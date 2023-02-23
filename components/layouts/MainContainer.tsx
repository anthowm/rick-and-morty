import React, { ReactElement } from "react";
import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";

const MainContainer = (props: FlexProps): ReactElement => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "white", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      direction="column"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      minH="100vh"
      {...props}
    />
  );
};

export default MainContainer;
