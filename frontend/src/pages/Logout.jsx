import React from 'react'
import Button from '../components/Button'
import {  useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Logout = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate("/", {replace: true})
        toast.success("Logout Sucessfully", {theme: "colored", autoClose: 2000, hideProgressBar: true})
        sessionStorage.clear()
    }

  return (
    <>
    
    <div className='w-screen h-screen flex justify-center items-center bg-bg-secondary'>

        <div className='max-w-2xl w-full rounded-10 shadow-lg h-72 bg-bg-primary flex flex-col gap-10 justify-center items-center'>

            <p className='font-semibold text-warning text-xl text-center tracking-wide'>See you soon, star traveler! ✨ Log out and come back to explore more.</p>

            <div className='w-full flex justify-center gap-10'>
                <Button className="border-danger text-danger hover:bg-danger" onClick={handleLogout}>Logout</Button>
                <Button onClick={() => navigate(-1)}>Cancel</Button>
            </div>


        </div>

    </div>
    
    </>
  )
}

export default Logout
