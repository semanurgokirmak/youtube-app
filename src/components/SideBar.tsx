<<<<<<< Updated upstream
=======
import React, { useState } from "react";
>>>>>>> Stashed changes
import { VStack, Box } from "@chakra-ui/react";
import { primaryLinks, secondaryLinks } from "../data/sidebar-links";
import SidebarLink from "./SidebarLink";
import useSidebarStore from "../store/SidebarStore";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { isSidebarOpen } = useSidebarStore();
<<<<<<< Updated upstream
=======
  const [activeLink, setActiveLink] = useState<string>("");

  const location = useLocation();
>>>>>>> Stashed changes

  const handleLinkClick = (url: string) => {
    setActiveLink(url);
  };

  return (
    <VStack
      maxW={isSidebarOpen ? "100px" : "200px"}
      position="fixed"
      pl={isSidebarOpen ? "0" : "10"}
      pt={10}
      h="full"
      w="full"
      alignItems={isSidebarOpen ? "center" : "flex-start"}
      gap={6}
    >
      {primaryLinks.map((item, index) => (
<<<<<<< Updated upstream
        <Link to={item.url} key={`primary-${index}`}>
          <SidebarLink isOpen={isSidebarOpen} {...item} />
=======
        <Link
          to={item.url}
          key={`primary-${index}`}
          onClick={() => handleLinkClick(item.url)}
        >
          <SidebarLink
            isOpen={isSidebarOpen}
            isActive={location.pathname === item.url}
            {...item}
          />
>>>>>>> Stashed changes
        </Link>
      ))}

      <Box> </Box>
<<<<<<< Updated upstream
      {secondaryLinks.map((item, index) => (
        <Link to={item.url} key={`secondary-${index}`}>
          <SidebarLink isOpen={isSidebarOpen} {...item} />
        </Link>
      ))}
=======

      {secondaryLinks.map((item, index) => (
        <Link
          to={item.url}
          key={`secondary-${index}`}
          onClick={() => handleLinkClick(item.url)}
        >
          <SidebarLink
            isOpen={isSidebarOpen}
            isActive={location.pathname === item.url}
            {...item}
          />
        </Link>
      ))}

      {!isSidebarOpen && <Subscriptions />}
>>>>>>> Stashed changes
    </VStack>
  );
};

export default SideBar;
