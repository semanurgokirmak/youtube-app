import React, { useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Box } from "@chakra-ui/react";
import useSidebarStore from "../store/SidebarStore";
import { useLocation } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isSidebarOpen } = useSidebarStore();
  const location = useLocation();
  const isVideoPage = location.pathname === "/video";
  return (
    <div>
      <Navbar />
      {!isVideoPage && <SideBar />}
      <Box ml={"255px"} mt={"60px"}>
        {children}
      </Box>
    </div>
  );
};

export default Layout;
