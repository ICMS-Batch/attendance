import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { CgNotes } from "react-icons/cg";
import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi";
import { RiGroupLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Sidebar from "./Sidebar/Sidebar";

const MobileNav = ({ onOpen, user, profile, setCurrentUser, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{profile.full_name}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {profile.role}{" "}
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => setCurrentUser(null)}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const DashboardLayout = () => {
  const links = [
    {
      name: "Home",
      link: "/",
      icon: RxDashboard,
    },
    {
      name: "Students",
      link: "/students",
      icon: RiGroupLine,
    },
    {
      name: "Attendances",
      link: "/attendances",
      icon: CgNotes,
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { currentUser, profile, setCurrentUser } = useAuth();

  const audioRef = useRef();

  return (
    <Box as="section" bg="gray.50" _dark={{ bg: "gray.700" }} minH="100vh">
      <Sidebar display={{ base: "none", md: "block" }} links={links} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar w="full" borderRight="none" links={links} />
        </DrawerContent>
      </Drawer>
      <MobileNav
        onOpen={onOpen}
        user={currentUser}
        profile={profile}
        setCurrentUser={setCurrentUser}
      />

      <Box
        ml={{ base: 0, md: 60 }}
        transition=".3s ease"
        p="4"
        height="100vh"
        bg="#edf3f8"
      >
        <audio
          src="/audio/notification.mp3"
          autoPlay={true}
          ref={audioRef}
          muted={true}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
