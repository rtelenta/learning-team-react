import ChakraUiProvider from "./chakra/ChakraUiProvider";
import QueryProvider from "./query/QueryProvider";

const AppProvider: React.FC = ({ children }) => {
  return (
    <QueryProvider>
      <ChakraUiProvider>{children}</ChakraUiProvider>
    </QueryProvider>
  );
};

export default AppProvider;
