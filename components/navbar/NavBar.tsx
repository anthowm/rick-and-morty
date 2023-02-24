import {
    Box,
    Button,
    Flex,
    Stack,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Logo from '../../public/assets/logo.svg';
import { useContext } from 'react';
import { LangContext } from '../../hooks/I18nWrapper';

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const lang = useContext(LangContext);
    console.log('🚀 ~ file: NavBar.tsx:17 ~ NavBar ~ lang', lang);
    return (
        <header>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={24} py={2}>
                <Flex
                    alignItems={'center'}
                    h={16}
                    justifyContent={'space-between'}
                >
                    <Box>
                        <Logo />
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? (
                                    <MoonIcon />
                                ) : (
                                    <SunIcon />
                                )}
                            </Button>
                            <Button onClick={() => lang.changeLang('es')}>
                                Change to ES
                            </Button>
                            <Button onClick={() => lang.changeLang('en')}>
                                Change to EN
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </header>
    );
}
