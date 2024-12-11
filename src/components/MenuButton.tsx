import { Button, Image } from "@chakra-ui/react";
import menuIcon from "../Assets/Menu.svg";

const MenuButton = ({ onClick }: { onClick: () => void }) => {
  //burda menubutona bir onClick fonksiyonunun verilmesi gerektiğini belittim
  return (
    <Button background="white" onClick={onClick} p={0}>
      <Image src={menuIcon} alt="Menu" width="20px" height={"17px"} />
    </Button>
  );
};

export default MenuButton;
