import { AspectRatio, Box, Image } from "@chakra-ui/react";
import pokeballImg from "assets/poke4.png";

interface ICardProps {
  onClick: () => void;
  active: boolean;
  img: string;
  disabled: boolean;
}

const Card: React.FC<ICardProps> = ({ active, onClick, disabled, img }) => {
  const handleClick = () => {
    if (disabled || active) return;

    onClick();
  };

  return (
    <Box
      rounded="lg"
      cursor="pointer"
      overflow="hidden"
      boxShadow="dark-lg"
      bg="white"
      onClick={handleClick}
    >
      <AspectRatio
        w="full"
        ratio={1}
        display={active || disabled ? "none" : "block"}
      >
        <Image src={pokeballImg} objectFit="cover" />
      </AspectRatio>

      <AspectRatio
        w="full"
        ratio={1}
        display={active || disabled ? "block" : "none"}
      >
        <Image src={img} objectFit="cover" />
      </AspectRatio>
    </Box>
  );
};

export default Card;
