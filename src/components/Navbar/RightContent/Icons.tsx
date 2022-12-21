import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import useDirectory from "../../../hooks/useDirectory";

type ActionIconsProps = {};

const ActionIcons: React.FC<ActionIconsProps> = () => {
  const { toggleMenuOpen } = useDirectory();
  return (
    <Flex alignItems="center" flexGrow={1}>
      <Flex
        display={{ base: "none", md: "flex" }}
        mr={3}
        ml={1.5}
        padding={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{ bg: "gray.200" }}
        onClick={toggleMenuOpen}
      >
        <Icon as={GrAdd} fontSize={20} />
      </Flex>
    </Flex>
  );
};
export default ActionIcons;
