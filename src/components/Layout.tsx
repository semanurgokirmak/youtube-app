import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Box } from "@chakra-ui/react";
import useSidebarStore from "../store/SidebarStore";
import { useBreakpointValue } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isSidebarOpen } = useSidebarStore();
  const isHidden = useBreakpointValue({ base: true, md: false });

  const marginLeft = isHidden ? "0" : isSidebarOpen ? "100px" : "200px";

  return (
    <div>
      <Navbar />
      <SideBar />
      <Box ml={marginLeft} mt={"60px"}>
        {children}
      </Box>
    </div>
  );
};

export default Layout;
