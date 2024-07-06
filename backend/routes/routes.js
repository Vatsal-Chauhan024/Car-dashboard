const express = require("express")
const router = new express.Router()
const { addCar, getAllCar, updateCarDetails, deleteCarData } = require("../controllers/CarControllers")
const { upload } = require("../multers/CarImage")

router.get("/cars", getAllCar)
router.post("/cars/add-car",upload.single("CarImage"), addCar)
router.patch("/cars/update-car/:id",upload.single("CarImage"), updateCarDetails)
router.delete("/cars/delete-car/:id", deleteCarData)


module.exports = router;