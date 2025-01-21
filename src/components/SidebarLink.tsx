import { Box, Image, Stack } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { ISidebarLinks } from "@/interfaces/ISidebar";

interface SidebarLinkProps extends ISidebarLinks {
  isOpen: boolean;
  isActive: boolean;
}

const SidebarLink = ({
  iconSrc,
  url,
  urlText,
  isOpen,
  isActive,
}: SidebarLinkProps) => {
  const { theme } = useTheme();

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
        filter={theme === "light" ? "none" : "invert(1)"}
      />
      <Box
        fontSize="12px"
        color={isActive ? "red" : theme === "light" ? "gray.600" : "white"}
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
