const CarModel = require("../models/CarSchema");
const fs = require("fs");

const getAllCar = async (req, res) => {
  try {
    const data = await CarModel.find();

    if (data) {
      res.send({ status: 200, carData: data });
    } else {
      res.send({ status: 400, message: "Error Fetching Data" });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: 69, message: "Server Error" });
  }
};

const addCar = async (req, res) => {


  const CarData = {
    CarName: req.body.CarName,
    CompanyName: req.body.CompanyName,
    FuelCapacity: req.body.FuelCapacity,
    CarCapacity: req.body.CarCapacity,
    CarRent: req.body.CarRent,
    CarImage: req.file.filename,
    CarDesc: req.body.CarDesc
  };

  try {
    const findUnique = await CarModel.findOne({
      CarName: req.body.CarName,
    });


    if (findUnique) {
      res.send({ status: 505, message: "Car Already Exist" });
    } else {
      const UploadedData = await CarModel.insertMany([CarData]);

      if (UploadedData) {
        res.send({ status: 200, message: "Car Added Succefully" });
      } else {
        res.send({
          status: 400,
          message: "Error Adding Car",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.send({ status: 505, message: "Server Error" });
  }
};

const updateCarDetails = async (req, res) => {
  const _id = req.params.id;

  const CarData = {
    CarName: req.body.CarName,
    CompanyName: req.body.CompanyName,
    FuelCapacity: req.body.FuelCapacity,
    CarCapacity: req.body.CarCapacity,
    CarRent: req.body.CarRent,
    CarImage: req.file ? req.file.filename : req.body.CarImage,
    CarDesc: req.body.CarDesc
  };

  try {
    const carData = await CarModel.findById(_id);

    if (!carData) {
      return res.send({ status: 404, message: "Car not found" });
    } else {
      if (carData.CarImage !== CarData.CarImage) {
        let currentDir = __dirname;
        let desiredDir = currentDir.replace(
          /controllers$/,
          `public/${carData.CarImage}`
        );

        fs.unlink(desiredDir, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    }
    const UpdatedData = await CarModel.findByIdAndUpdate(_id, CarData, {
      new: true,
    });

    if (UpdatedData) {
      res.send({ status: 200, message: "Data Updated Successfully" });
    } else {
      res.send({ status: 400, message: "Error Updating User" });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: 505, message: "Server Error" });
  }
};

const deleteCarData = async (req, res) => {
  const _id = req.params.id;

  try {
    const carData = await CarModel.findById(_id);
    if (!carData) {
      return res.send({ status: 404, message: "Car not found" });
    } else {
      let currentDir = __dirname;
      let desiredDir = currentDir.replace(
        /controllers$/,
        `public/${carData.CarImage}`
      );

      fs.unlink(desiredDir, (err) => {
        if (err) {
          console.log(err);
        }
        return true;
      });

      const deletedItem = await CarModel.findByIdAndDelete(_id);

      if (deletedItem) {
        res
          .status(200)
          .send({ status: 200, message: "Data deleted successfully" });
      } else {
        res
          .status(400)
          .send({ status: 400, message: "Error deleting car data" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: 500, message: "Server Error" });
  }
};

module.exports = { getAllCar, addCar, updateCarDetails, deleteCarData };
