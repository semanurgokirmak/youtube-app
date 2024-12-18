import { Box, Image, Stack } from "@chakra-ui/react";
import { ISidebarLinks } from "@/interfaces/ISidebar";

interface SidebarLinkProps extends ISidebarLinks {
  isOpen: boolean;
}

const SidebarLink = ({ iconSrc, url, urlText, isOpen }: SidebarLinkProps) => {
  return (
    <Stack
      direction={isOpen ? "column" : "row"}
      gap={isOpen ? "2px" : "10px"}
      alignItems="center"
    >
      <Image
        src={iconSrc}
        alt="Sidebar Icon"
        width="15px"
        height="15px"
        objectFit="contain"
      />

      <Box
        fontSize="12px"
        color="red"
        display="flex"
        alignItems="center"
        textAlign="center"
      >
        {urlText}
      </Box>
    </Stack>
  );
};

export default SidebarLink;
