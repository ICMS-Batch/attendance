import { Flex } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useColorMode } from "@chakra-ui/react";
const ProtectedRoute = () => {
  const { colorMode } = useColorMode();
  const auth = true;
  return (
    <Flex flexDir="column" w="100%" h="100vh" bg="gray.700">
      <Header />
      {auth ? <Outlet /> : <Navigate to="/login" />}
    </Flex>
  );
};

export default ProtectedRoute;
