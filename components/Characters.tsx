import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useTranslation } from "./common/useTranslation";

export default function Characters() {
  const t = useTranslation();
  return (
    <Box w={"100%"} bg="pink">
      <SimpleGrid minChildWidth="120px" spacing="40px" minW={"100%"}>
        <Box bg="tomato" height="80px">
          <Text>{t({ id: "page.home.head.title" })}</Text>
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
