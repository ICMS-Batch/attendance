import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiFillBell,
} from "react-icons/ai";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Header = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 3 }}
        py={4}
        shadow="sm"
        position="sticky"
        top="0"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Dashboard
                </Button>
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="brand"
                  leftIcon={<AiOutlineInbox />}
                >
                  Inbox
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<BsFillCameraVideoFill />}
                >
                  Videos
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <chakra.a
              p={3}
              color="gray.800"
              _dark={{ color: "inherit" }}
              rounded="sm"
              _hover={{ color: "gray.800", _dark: { color: "gray.600" } }}
            >
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>
            <Menu>
              {({ isOpen }) => (
                <>
                  <Avatar
                    src="https://bit.ly/dan-abramov"
                    position="relative"
                    zIndex={1}
                  >
                    <MenuButton
                      isActive={isOpen}
                      as={Button}
                      bg="none"
                      _hover={{ bg: "none" }}
                      position="absolute"
                      zIndex={0}
                    ></MenuButton>
                  </Avatar>
                  <MenuList>
                    <MenuItem>
                      <NavLink to="/login">
                        <Flex align="center" gap="2">
                          <FiLogOut color="red" />
                          <Text p="0">Logout</Text>
                        </Flex>
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={() => alert("Kagebunshin")}>
                      <Flex align="center" gap="2">
                        <FiSettings color="#2B6CB0" />
                        <Text p="0">Settings</Text>
                      </Flex>
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Header;
