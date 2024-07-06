import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Routing from './routes/Routes'
import {Provider} from "react-redux"
import Store from './store/Store'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store= {Store}>
        <ToastContainer/>
    <RouterProvider router={Routing}/>
    </Provider>
)
