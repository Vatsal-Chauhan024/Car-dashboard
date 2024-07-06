import { MdDashboard, MdLogout, MdOutlineAddTask  } from "react-icons/md"


const AsideNavbar = [
    {
        itemName: "Dashboard",
        itemLink: "/dashboard",
        itemIcon: <MdDashboard/>
    },
    {
        itemName: "Add Car",
        itemLink: "/add-car",
        itemIcon: <MdOutlineAddTask/>
    },
    {
        itemName: "Logout",
        itemLink: "/logout",
        itemIcon: <MdLogout/>
    }
]

export default AsideNavbar;