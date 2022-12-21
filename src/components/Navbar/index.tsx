import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import {
  defaultMenuItem,
  directoryMenuState,
} from "../../atoms/directoryMenuAtom";
import { auth } from "../../firebase/clientApp";
import RightContent from "./RightContent";
import router from "next/router";
import CreateCommunityModal from "../Modal/CreateCommunity";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      bg="white"
      height="44px"
      padding="6px 12px"
      justifyContent="space-between"
    >
      <Flex
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
        cursor="pointer"
      >
        <Link href="/">
          <Image src="/images/ImageLogo1.png" height="40px" />
        </Link>
        <Button
          ml={5}
          variant="outline"
          height="28px"
          display={{ base: "none", sm: "flex" }}
          width={{ base: "70px", md: "110px" }}
          onClick={onOpen}
        >
          Create Topic
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create a topic</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <CreateCommunityModal
                isOpen={isOpen}
                handleClose={onClose}
                userId={user?.uid}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
      <RightContent user={user as User} />
    </Flex>
  );
};
export default Navbar;
