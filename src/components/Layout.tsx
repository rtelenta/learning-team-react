import { Box } from "@chakra-ui/react";

const Layout: React.FC = ({ children }) => {
  return (
    <Box mx="auto" maxW="6xl" px={4}>
      {children}
    </Box>
  );
};

export default Layout;
