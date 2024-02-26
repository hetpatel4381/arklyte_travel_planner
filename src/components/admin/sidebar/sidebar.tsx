"use client";
import { Architects_Daughter } from "next/font/google";
import React from "react";
import {
  Sidebar as ReactProSidebar,
  Menu,
  MenuItem,
  sidebarClasses,
} from "react-pro-sidebar";

import { BiSolidCategory } from "react-icons/bi";
import { FaBookOpen, FaHome, FaHotel } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineDataUsage } from "react-icons/md";

const ArchitectsDaughter = Architects_Daughter({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Sidebar = () => {
  const menuItems = [
    {
      label: "Dashboard",
      icons: <FaHome />,
      link: "/admin/dashboard",
    },
    {
      label: "Trips",
      icons: <BiSolidCategory />,
      link: "/admin/trips",
    },
    {
      label: "Hotels",
      icons: <FaHotel />,
      link: "/admin/hotels",
    },
    {
      label: "Bookings",
      icons: <FaBookOpen />,
      link: "/admin/bookings",
    },
    {
      label: "Scrape Data",
      icons: <MdOutlineDataUsage />,
      link: "/admin/scrape-data",
    },
  ];

  return (
    <div className="min-h[100vh] overflow-hidden">
      <ReactProSidebar className="h-full overflow-hidden"></ReactProSidebar>
    </div>
  );
};

export default Sidebar;
