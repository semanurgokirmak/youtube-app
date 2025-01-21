import React, { useEffect } from "react";
import { VStack, Box, HStack } from "@chakra-ui/react";
import { primaryLinks, secondaryLinks } from "../data/sidebar-links";
import SidebarLink from "./SidebarLink";
import useSidebarStore from "../store/SidebarStore";
import { Link, useLocation } from "react-router-dom";
import Subscriptions from "./Subscriptions";
import { useAuth } from "../components/AuthContext";
import { useBreakpointValue } from "@chakra-ui/react";

const SideBar: React.FC = () => {
  const { isSidebarOpen, setSidebarState } = useSidebarStore();
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  const isHidden = useBreakpointValue({ base: true, md: false });
  const isLargerThan1400 = useBreakpointValue({ base: false, lg: true });

  const isSidebarVisible = !isHidden || isSidebarOpen;
  useEffect(() => {
    if (isLargerThan1400 === false) {
      setSidebarState(true);
    }
  }, [isLargerThan1400, setSidebarState]);

  useEffect(() => {
    if (isHidden) setSidebarState(false);
  }, [isHidden, setSidebarState]);

  if (isHidden) {
    return (
      <HStack
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        h="60px"
        bg="white"
        justifyContent="space-around"
        boxShadow="0px -2px 5px rgba(0,0,0,0.1)"
        zIndex="1000"
      >
        {primaryLinks.map((item, index) => (
          <Link to={item.url} key={`bottom-nav-${index}`}>
            <VStack gap={1} alignItems="center">
              <Box>
                <img
                  src={item.iconSrc}
                  alt={item.urlText}
                  width="20px"
                  height="20px"
                />
              </Box>
              <Box fontSize="12px">{item.urlText}</Box>
            </VStack>
          </Link>
        ))}

        {secondaryLinks.map((item, index) => {
          if (item.urlText === "Library") {
            return (
              <Link to={item.url} key={`bottom-nav-secondary-${index}`}>
                <VStack gap={1} alignItems="center">
                  <Box>
                    <img
                      src={item.iconSrc}
                      alt={item.urlText}
                      width="20px"
                      height="20px"
                    />
                  </Box>
                  <Box fontSize="12px">{item.urlText}</Box>
                </VStack>
              </Link>
            );
          }
          return null;
        })}
      </HStack>
    );
  }

  return (
    isSidebarVisible && (
      <VStack
        maxW={isSidebarOpen ? "100px" : "200px"}
        position="fixed"
        pl={isSidebarOpen ? "0" : "5"}
        pt={10}
        h="100vh"
        w={isSidebarOpen ? "100px" : "200px"}
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
    )
  );
};

export default SideBar;
