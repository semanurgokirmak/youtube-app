import { VStack, Box, Text, Stack, Image } from "@chakra-ui/react";
import { primaryLinks, secondaryLinks } from "../data/sidebar-links";
import SidebarLink from "./SidebarLink";
import useSidebarStore from "../store/SidebarStore";
import { Link } from "react-router-dom";

const subscriptions = [
  { name: "Gussie Singleton", profilePic: "https://via.placeholder.com/40" },
  { name: "Nora Francis", profilePic: "https://via.placeholder.com/40" },
  { name: "Belle Briggs", profilePic: "https://via.placeholder.com/40" },
  { name: "Eunice Cortez", profilePic: "https://via.placeholder.com/40" },
  { name: "Emma Hanson", profilePic: "https://via.placeholder.com/40" },
  { name: "Leah Berry", profilePic: "https://via.placeholder.com/40" },
  { name: "Belle Briggs", profilePic: "https://via.placeholder.com/40" },
  { name: "Eunice Cortez", profilePic: "https://via.placeholder.com/40" },
  { name: "Emma Hanson", profilePic: "https://via.placeholder.com/40" },
  { name: "Leah Berry", profilePic: "https://via.placeholder.com/40" },
  { name: "Belle Briggs", profilePic: "https://via.placeholder.com/40" },
  { name: "Eunice Cortez", profilePic: "https://via.placeholder.com/40" },
];

const SideBar = () => {
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
      overflowY="auto"
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

      {!isSidebarOpen && (
        <Box w="full">
          <Text
            fontSize="sm"
            fontWeight="bold"
            mb={4}
            color="gray.600"
            textAlign="left"
          >
            Subscriptions
          </Text>
          <VStack align="flex-start" gap={2}>
            {subscriptions.map((channel, index) => (
              <Stack
                key={`subscription-${index}`}
                direction="row"
                align="center"
                gap={4}
                w="full"
              >
                <Image
                  src={channel.profilePic}
                  alt={channel.name}
                  boxSize="30px"
                  borderRadius="full"
                />
                <Text fontSize="sm" color="gray.700">
                  {channel.name}
                </Text>
              </Stack>
            ))}
          </VStack>
        </Box>
      )}
    </VStack>
  );
};

export default SideBar;
