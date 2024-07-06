import axios from "axios"
import { toast } from "react-toastify";
import { fetchCarDetails } from "../store/apiCallFunctions/FetchCarDetails";

const deleteCar = (id, dispatch) => {

    if(window.confirm("You Sure you want to Delete?")){
        axios.delete(`http://localhost:8000/cars/delete-car/${id}`).then((response) => {
            const apiResponse = response.data;
    
            if(apiResponse.status === 200){
                toast.success(apiResponse.message, {theme: "colored", autoClose: 2000, hideProgressBar: true})
               dispatch(fetchCarDetails())
            }
            else {
                toast.error(apiResponse.message, {theme: "colored", autoClose: 2000, hideProgressBar: true})
            }
        }).catch((e) => {
            console.log(e)
            toast.error("Server Error", {theme: "colored", autoClose: 2000, hideProgressBar: true})
        })
    }
}

export default deleteCar;