import { FaUser, FaUserGraduate, FaUsers, FaUserTie, FaKey, FaHome, FaPhotoVideo } from "react-icons/fa";
import {BiCalendarEvent} from "react-icons/bi"
import { Navigate } from "react-router-dom";

const list = [
  {
    text: "Add Alumni",
    link: "/admin/user-management",
    rlink: "user-management",
    icon: <FaUser />,
    // element: <UserManagement />,
  },
  {
    text: "Add Event",
    link: "/admin/su-staff",
    rlink: "su-staff",
    icon: <BiCalendarEvent />,
    // element: <SUStaff />,
  },
  {
    text: "Gallery",
    link: "/admin/gallery",
    rlink: "gallery",
    icon: <FaPhotoVideo />,
    // element: <Gallery />,
  },
  {
    text: "default",
    link: "/admin",
    rlink: "",
    element: <Navigate to="/admin/about" />,
  },
];

export default list;
