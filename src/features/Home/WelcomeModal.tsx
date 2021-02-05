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
    Text, 
    useDisclosure
} from "@chakra-ui/react"

// TODO: add Cancel button
// TODO: bug - changing avatar auto save 
// TODO: improve CSS

const WelcomeModal: React.FC = () => {
    const maxAvatarId = 898;

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [avatarId, setAvatarId] = useState(1);
    const [nickName, setNickName] = useState('');
    const [isNickNameEmpty, setIsNickNameEmpty] = useState(false);

    const handleOnSave = () => {
        if(nickName === '') {
            setIsNickNameEmpty(true);
            return;
        }else {
            setIsNickNameEmpty(false);
        }

        localStorage.setItem('nick_name', nickName);
        localStorage.setItem('avatar_id', avatarId.toString());
        onClose();
    }

    const handleOnAvatarChange = () => {
        setAvatarId(Math.floor(Math.random() * Math.floor(maxAvatarId-1)) +1);
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
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${avatarId}.png`} 
                                />
                                <Button 
                                    colorScheme="teal" 
                                    variant="ghost"
                                    onClick={handleOnAvatarChange}>
                                        Change Avatar
                                </Button>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleOnSave}>Send</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default WelcomeModal;