import React, { useState } from 'react';
import {
    Avatar,
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure
} from "@chakra-ui/react"

const WelcomeModal: React.FC = () => {
    const maxAvatarId = 898;

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [avatarId, setAvatarId] = useState(1);
    const [nickName, setNickName] = useState('');
    const [isNickNameEmpty, setIsNickNameEmpty] = useState(false);

    const handleOnSave = () => {
        if (nickName === '') {
            setIsNickNameEmpty(true);
            return;
        } else {
            setIsNickNameEmpty(false);
        }

        localStorage.setItem('nick_name', nickName);
        localStorage.setItem('avatar_id', avatarId.toString());
        setAvatarId(1)
        setNickName('');
        onClose();
    }

    const handleOnAvatarChange = () => {
        setAvatarId(Math.floor(Math.random() * Math.floor(maxAvatarId - 1)) + 1);
    }

    const handleOnCancel = () => {
        setAvatarId(1);
        setNickName('');
        onClose();
    }

    return (
        <>
            <Button colorScheme="teal" onClick={onOpen}>Register</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Welcome</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            onChange={e => setNickName(e.target.value)}
                            placeholder="Nickname"
                        />
                        {isNickNameEmpty && <Text fontSize="xs" color="tomato" >Please type a valid nick name</Text>}
                        <br />
                        <br />
                        <Avatar
                            name="Dan Abrahmov"
                            bg="white"
                            borderColor="gray"
                            showBorder={true}
                            size="xl"
                            ml={10}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${avatarId}.png`}
                        />
                        <Button
                            ml={8}
                            mt={6}
                            colorScheme="teal"
                            size="lg"
                            onClick={handleOnAvatarChange}>
                            Change Avatar
                        </Button>
                    </ModalBody>

                    <ModalFooter>
                        <Stack direction="row" spacing={4}>
                            <Button colorScheme="pink" onClick={handleOnCancel}>Cancel</Button>
                            <Button colorScheme="blue" onClick={handleOnSave}>Send</Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default WelcomeModal;