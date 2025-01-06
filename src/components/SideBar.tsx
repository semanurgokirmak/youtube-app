import React from "react";
import { VStack, Box } from "@chakra-ui/react";
import { primaryLinks, secondaryLinks } from "../data/sidebar-links";
import SidebarLink from "./SidebarLink";
import useSidebarStore from "../store/SidebarStore";
import { Link } from "react-router-dom";
import Subscriptions from "./Subscriptions";

const SideBar: React.FC = () => {
  const { isSidebarOpen } = useSidebarStore();

  return (
    <VStack
      maxW={isSidebarOpen ? "100px" : "200px"}
      position="fixed"
      pl={isSidebarOpen ? "0" : "5"}
      pt={10}
      h="100vh"
      w="full"
      alignItems={isSidebarOpen ? "center" : "flex-start"}
      gap={5}
      overflowY="hidden"
      _hover={{
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "gray.400",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "gray.600",
        },
      }}
    >
      {primaryLinks.map((item, index) => (
        <Link to={item.url} key={`primary-${index}`}>
          <SidebarLink isOpen={isSidebarOpen} {...item} />
        </Link>
      ))}

      <Box></Box>

      {secondaryLinks.map((item, index) => (
        <Link to={item.url} key={`secondary-${index}`}>
          <SidebarLink isOpen={isSidebarOpen} {...item} />
        </Link>
      ))}

      {!isSidebarOpen && <Subscriptions />}
    </VStack>
  );
};

export default SideBar;
