import { Text, Flex, Grid, useDisclosure } from "@chakra-ui/react";
import Layout from "components/Layout";
import Card from "./components/Card";
import clefairyImg from "assets/clefairy.png";
import dratiniImg from "assets/dratini.png";
import eeveeImg from "assets/eevee.jpg";
import oddishImg from "assets/oddish.png";
import pikachuImg from "assets/pikachu.jpg";
import vulpixImg from "assets/vulpix.jpg";
import React, { useEffect, useRef, useState } from "react";
import shuffleArray from "utils/shuffleArray";
import LoseModal from "./components/LoseModal";

const pokemons = [
  {
    img: clefairyImg,
    name: "clefairy",
  },
  {
    img: dratiniImg,
    name: "dratini",
  },
  {
    img: oddishImg,
    name: "oddish",
  },
  {
    img: eeveeImg,
    name: "eevee",
  },
  {
    img: pikachuImg,
    name: "pikachu",
  },
  {
    img: vulpixImg,
    name: "vulpix",
  },
];

type cardStatus = "iddle" | "active" | "disabled";

type cardType = {
  img: string;
  name: string;
  status: cardStatus;
};

const Game: React.FC = () => {
  const matchDurationInSeconds = 10;
  const [seconds, setSeconds] = useState<number>(matchDurationInSeconds);
  const [cards, setCards] = useState<cardType[]>([]);
  const timer = useRef<number | null>(null);
  const {
    isOpen: isOpenLoseModal,
    onOpen: onOpenLoseModal,
    onClose: onCloseLoseModal,
  } = useDisclosure();

  const stopTimer = () => {
    if (timer.current) clearTimeout(timer.current);
  };

  const runTimer = () => {
    const second = 1;
    const secsToMilisecs = (n: number) => n * 1000;

    timer.current = window.setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - second);
    }, secsToMilisecs(second));
  };

  const initBoard = () => {
    const cards = [...pokemons, ...pokemons].map((pokemon) => ({
      ...pokemon,
      status: "iddle" as cardStatus,
    }));

    const randomCards = shuffleArray<cardType>(cards);

    onCloseLoseModal();
    setSeconds(matchDurationInSeconds);
    setCards(randomCards);
    runTimer();
  };

  const activeCards = (cards: cardType[]) =>
    cards.filter((card) => card.status === "active");

  const isMatchedCards = (cards: cardType[]) => {
    const actives = activeCards(cards);
    const firstActiveCardName = actives[0].name;

    const isMatched = actives.every(
      (card) => card.name === firstActiveCardName
    );

    return isMatched;
  };

  const validateCards = (cards: cardType[]) => {
    const resetCardTimeOut = 1500;

    if (isMatchedCards(cards)) {
      setCards(
        cards.map((card) => ({
          ...card,
          status: card.status === "active" ? "disabled" : card.status,
        }))
      );
    } else {
      setTimeout(() => {
        setCards(
          cards.map((card) => ({
            ...card,
            status: card.status === "active" ? "iddle" : card.status,
          }))
        );
      }, resetCardTimeOut);
    }
  };

  const flipCard = (index: number) => () => {
    const newCards = [...cards].map((card, i) => ({
      ...card,
      status: i === index ? "active" : card.status,
    }));
    const matchCardsNumber = 2;
    const activeCardsNumber = activeCards(newCards).length;

    if (activeCardsNumber <= matchCardsNumber) {
      setCards(newCards);
    }

    if (activeCardsNumber === matchCardsNumber) {
      validateCards(newCards);
    }
  };

  const validateMatch = () => {
    const isFinishedBoard = cards.every((card) => card.status === "disabled");

    stopTimer();

    if (isFinishedBoard) {
      /* TODO: WINNER MODAL */
    } else {
      onOpenLoseModal();
    }
  };

  useEffect(() => {
    if (!seconds) validateMatch();

    // eslint-disable-next-line
  }, [seconds]);

  useEffect(() => {
    initBoard();

    return () => stopTimer();

    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <Flex py={8}>
        <Text size="2xl" color="red.400" fontWeight="bold" mr={2}>
          Tiempo restante:
        </Text>

        <Text size="2xl" color="white" fontWeight="bold">
          {seconds} segundos
        </Text>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4}>
        {cards.map(({ status, img }, i) => (
          <Card
            key={i}
            active={status === "active"}
            disabled={status === "disabled"}
            img={img}
            onClick={flipCard(i)}
          />
        ))}
      </Grid>

      <LoseModal
        isOpen={isOpenLoseModal}
        onClose={onCloseLoseModal}
        onRetry={initBoard}
      />
    </Layout>
  );
};

export default Game;
