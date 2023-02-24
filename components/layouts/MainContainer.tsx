import React, { ReactElement } from 'react';
import { Flex, FlexProps, useColorMode } from '@chakra-ui/react';

const MainContainer = (props: FlexProps): ReactElement => {
    const { colorMode } = useColorMode();

    const bgColor = { light: 'white', dark: 'gray.900' };

    const color = { light: 'black', dark: 'white' };
    return (
        <Flex
            bg={bgColor[colorMode]}
            color={color[colorMode]}
            direction="column"
            justifyContent="flex-start"
            minH="100vh"
            {...props}
        />
    );
};

export default MainContainer;
