import {
  Flex,
  Icon,
  Box,
  useColorModeValue,
  Text,
  CloseButton,
  chakra,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavItem = ({ icon, children, link, ...rest }) => {
  return (
    <Flex
      as={Link}
      to={link}
      height="14"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: "pink.400",
        color: "white",
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="2"
          fontSize="16"
          _groupHover={{
            color: "white",
          }}
          as={icon}
        />
      )}
      <chakra.span alignSelf="flex-end">{children}</chakra.span>
    </Flex>
  );
};

const Sidebar = ({ links, onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {links.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link.link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default Sidebar;
