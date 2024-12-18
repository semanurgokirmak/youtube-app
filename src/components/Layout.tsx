import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Box } from "@chakra-ui/react";
import useSidebarStore from "../store/SidebarStore";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isSidebarOpen } = useSidebarStore();

  return (
    <div>
      <Navbar />
      <SideBar />
      <Box ml={isSidebarOpen ? "100px" : "200px"} mt={"60px"}>
        {children}
      </Box>
    </div>
  );
};

export default Layout;
