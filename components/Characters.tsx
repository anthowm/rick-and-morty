import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { useTranslation } from './common/useTranslation';

export default function Characters() {
    const t = useTranslation();
    return (
        <Box bg="pink" w={'100%'}>
            <SimpleGrid minChildWidth="120px" minW={'100%'} spacing="40px">
                <Box bg="tomato" height="80px">
                    <Text>{t({ id: 'page.home.head.title' })}</Text>
                </Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
            </SimpleGrid>
        </Box>
    );
}
