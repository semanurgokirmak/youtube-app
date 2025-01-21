import { Button, Image } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import menuIcon from "../Assets/Menu.svg";

const MenuButton = ({ onClick }: { onClick: () => void }) => {
  const { theme } = useTheme();

  return (
    <Button
      background={theme === "light" ? "white" : "black"}
      onClick={onClick}
      p={0}
      _hover={{ background: theme === "light" ? "gray.100" : "gray.700" }}
    >
      <Image
        src={menuIcon}
        alt="Menu"
        width="20px"
        height="17px"
        filter={theme === "light" ? "none" : "invert(1)"}
      />
    </Button>
  );
};

export default MenuButton;
