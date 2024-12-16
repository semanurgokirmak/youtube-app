import { VStack, Box } from "@chakra-ui/react";
import { primaryLinks, secondaryLinks } from "../data/sidebar-links";
import SidebarLink from "./SidebarLink";
import useSidebarStore from "../store/SidebarStore";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { isSidebarOpen } = useSidebarStore();

  return (
    <VStack
      maxW={isSidebarOpen ? "100px" : "200px"}
      position="fixed"
      top="84px"
      left="0"
      pl={isSidebarOpen ? "0" : "10"}
      pt={4}
      h="full"
      w="full"
      bgColor={"#fff"}
      alignItems={isSidebarOpen ? "center" : "flex-start"}
      gap={6}
    >
      {primaryLinks.map((item, index) => (
        <Link to={item.url} key={`primary-${index}`}>
          <SidebarLink isOpen={isSidebarOpen} {...item} />
        </Link>
      ))}

      <Box> </Box>
      {secondaryLinks.map((item, index) => (
        <Link to={item.url} key={`secondary-${index}`}>
          <SidebarLink isOpen={isSidebarOpen} {...item} />
        </Link>
      ))}
    </VStack>
  );
};

export default SideBar;
