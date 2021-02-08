import { Link as RouterLink } from "react-router-dom";
import { 
  Heading,
  Link,
  VStack,
  Text
   } from "@chakra-ui/react";
import { routes } from "routes/routing";
import Layout from "components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <Heading as="h1" size="2xl" textAlign="center" my={8}>
        Home
      </Heading>

      <VStack spacing={4}>
        <Link as={RouterLink} to={routes.game} color="blue.700">
          Game
        </Link>
        <Link as={RouterLink} to={routes.ranking} color="blue.700">
          Ranking
        </Link>
      </VStack>
    </Layout>
  );
};

export default Home;
