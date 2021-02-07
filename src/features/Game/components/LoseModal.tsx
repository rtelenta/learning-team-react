import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react";

interface ILoseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
}

const LoseModal: React.FC<ILoseModalProps> = ({ isOpen, onClose, onRetry }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} colorScheme="white">
      <ModalOverlay />

      <ModalContent>
        <ModalHeader textAlign="center">Perdiste</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justify="center" my={8}>
            <Button colorScheme="red" size="lg" onClick={onRetry}>
              Reintentar
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoseModal;
