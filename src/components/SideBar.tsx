import { VStack } from "@chakra-ui/react";
import { sidebarLinks } from "../data/sidebar-links";
import SidebarLink from "./SidebarLink";
import useSidebarStore from "../store/SidebarStore";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { isSidebarOpen } = useSidebarStore();

  return (
    <VStack
      maxW="255px"
      position="fixed"
      top="84px"
      left="0"
      pl={10}
      pt={4}
      h="full"
      w="full"
      bgColor={"#fff"}
      alignItems={"flex-start"}
      gap={4}
    >
      {sidebarLinks.map((item, index) => (
        <Link to={item.url} key={index}>
          <SidebarLink isOpen={isSidebarOpen} {...item} />
        </Link>
      ))}
    </VStack>
  );
};

export default SideBar;
