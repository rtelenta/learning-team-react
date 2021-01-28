import { Box } from "@chakra-ui/react";

const Layout: React.FC = ({ children }) => {
  return (
    <Box mx="auto" maxW="6xl">
      {children}
    </Box>
  );
};

export default Layout;
