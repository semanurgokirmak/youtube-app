import { Box, Image, Stack } from "@chakra-ui/react";
import { ISidebarLinks } from "@/interfaces/ISidebar";

interface SidebarLinkProps extends ISidebarLinks {
  isOpen: boolean;
  isActive: boolean; // Yeni props
}

const SidebarLink = ({
  iconSrc,
  url,
  urlText,
  isOpen,
  isActive,
}: SidebarLinkProps) => {
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
        color={isActive ? "red" : "black"} // Aktifse kırmızı, değilse siyah
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
