import { Link as RouterLink } from "react-router-dom";
import { Link, VStack, Text, Flex } from "@chakra-ui/react";
import { routes } from "routes/routing";
import Layout from "components/Layout";

const Game: React.FC = () => {
  return (
    <Layout>
      <Flex py={8}>
        <Text size="2xl" color="orange.400" fontWeight="bold" mr={2}>
          Tiempo restante:
        </Text>

        <Text size="2xl" color="white" fontWeight="bold">
          90 segundos
        </Text>
      </Flex>

      <VStack spacing={4}>
        <Link as={RouterLink} to={routes.home} color="blue.700">
          Home
        </Link>
        <Link as={RouterLink} to={routes.ranking} color="blue.700">
          Ranking
        </Link>
      </VStack>
    </Layout>
  );
};

export default Game;
