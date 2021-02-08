import { 
  Heading,
  Link,
  VStack,
  Text,
  Center,
  Box,
  Button
   } from "@chakra-ui/react";

const Card  = () => {
    const flip = () => {
        return(
            render (
                <Center>
                    <Box>
                        <Heading>
                            Back
                        </Heading>
                    </Box>

                </Center>
            )
        )
    }
  return (
      <Center>
          <Button onClick={flip} border="2px solid #333" h="300px"
          w="200px" bg="#fff" color="#111">
            <Heading as="h3" fontSize="2x1" textAlign="center" alignItems="center">
                My Card
            </Heading>
          </Button>
      </Center>
  );
};

export default Card;