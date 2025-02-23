import { Box, Flex } from "@chakra-ui/react";

export const  MainContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <Box 
      as="main"
      maxW="full"
      minH="100dvh"
    >
      <Flex
        as="section"
        maxW="1020px"
        mx="auto"
        h="full"
        flexDir="col"
        py="2rem"
      >
        {children}
      </Flex>
    </Box>
  );
}
