import { Box, Flex } from "@chakra-ui/react";

export const  MainContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <Box 
      as="main"
      maxW="full"
      minH="100dvh"
      bg={{ base: 'lightBackground', _dark: 'darkBackground' }}
    >
      <Flex
        as="section"
        maxW="720px"
        mx="auto"
        h="full"
        flexDir="column"
        py="2rem"
        px={{ base: "1.5rem", md: "0" }}
      >
        {children}
      </Flex>
    </Box>
  );
}
