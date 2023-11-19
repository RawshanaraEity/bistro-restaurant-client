import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart()

    // Todo: get isAdmin value from database
    const isAdmin = true


    return (
        <div className="flex ">
            <div className="w-64 min-h-screen bg-yellow-600">
                <ul className="menu p-4">
                    {
                        isAdmin ? 
                        <>
                             <li>
                        <NavLink to='/dashboard/adminHome'>
                            <FaHome></FaHome>
                            Admin Home
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addItems'>
                            <FaUtensils></FaUtensils>
                            Add Items
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageItems'>
                            <FaList></FaList> 
                            Manage Items
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'>
                            <FaBook></FaBook> 
                           Manage Bookings
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/users'>
                            <FaUser></FaUser> 
                            All Users
                            </NavLink>
                    </li>
                        </>
                        : 
                        <>
                             <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome></FaHome>
                            User Home
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'>
                            <FaCalendar></FaCalendar>
                            Reservation
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart></FaShoppingCart> 
                            My Cart ({cart.length})
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                            <FaAd></FaAd> 
                            Add Review
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'>
                            <FaList></FaList> 
                            My Bookings
                            </NavLink>
                    </li>
                        </>
                    }
                   
                    {/* shared navlinks */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                             Home
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <FaSearch></FaSearch>
                             Menu
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/contact'>
                            <FaEnvelope></FaEnvelope>
                             Contact
                            </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard sidebar */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;