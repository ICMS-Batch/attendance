import { Box, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box
      position="fixed"
      top="0"
      right="0"
      left="0"
      bottom="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
    </Box>
  );
};

export default Loader;
