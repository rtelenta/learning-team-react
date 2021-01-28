import { Link as RouterLink } from "react-router-dom";
import { Heading, Link, VStack } from "@chakra-ui/react";
import { routes } from "routes/routing";
import Layout from "components/Layout";

const Ranking: React.FC = () => {
  return (
    <Layout>
      <Heading as="h1" size="2xl" textAlign="center" my={8}>
        Ranking
      </Heading>

      <VStack spacing={4}>
        <Link as={RouterLink} to={routes.home} color="blue.700">
          Home
        </Link>
        <Link as={RouterLink} to={routes.game} color="blue.700">
          Game
        </Link>
      </VStack>
    </Layout>
  );
};

export default Ranking;
