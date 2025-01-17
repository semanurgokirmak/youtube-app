import React from "react";
import { VStack, Box } from "@chakra-ui/react";
import { primaryLinks, secondaryLinks } from "../data/sidebar-links";
import SidebarLink from "./SidebarLink";
import useSidebarStore from "../store/SidebarStore";
import { Link, useLocation } from "react-router-dom";
import Subscriptions from "./Subscriptions";
import { useAuth } from "../components/AuthContext";

const SideBar: React.FC = () => {
  const { isSidebarOpen } = useSidebarStore();
  const location = useLocation();
  const { isLoggedIn } = useAuth();

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
      {primaryLinks.map((item, index) => {
        if (item.urlText === "Subscriptions" && !isLoggedIn) {
          return null;
        }

        return (
          <Link to={item.url} key={`primary-${index}`}>
            <SidebarLink
              isOpen={isSidebarOpen}
              isActive={location.pathname === item.url}
              {...item}
            />
          </Link>
        );
      })}

      <Box> </Box>

      {secondaryLinks.map((item, index) => {
        if (
          (item.urlText === "History" ||
            item.urlText === "Favorites" ||
            item.urlText === "Subscriptions" ||
            item.urlText === "Liked Videos" ||
            item.urlText === "Watch Later") &&
          !isLoggedIn
        ) {
          return null;
        }
        return (
          <Link to={item.url} key={`secondary-${index}`}>
            <SidebarLink
              isOpen={isSidebarOpen}
              isActive={location.pathname === item.url}
              {...item}
            />
          </Link>
        );
      })}

      {!isSidebarOpen && <Subscriptions />}
    </VStack>
  );
};

export default SideBar;
