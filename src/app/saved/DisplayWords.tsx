"use client";
import { useSavedWordStore } from "@/providers/SavedWordProvider";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  EmptyState,
  EmptyStateDescription,
  Em,
} from "@chakra-ui/react";
import { LuTrash } from "react-icons/lu";

export const DisplayWords = () => {
  const { removeWord, words } = useSavedWordStore((state) => state);

  if (words.length === 0 || words === null) {
    return (
      <EmptyState.Root>
        <EmptyState.Content>
          <EmptyState.Title fontFamily="global" fontSize="2rem">
            No words saved yet.
          </EmptyState.Title>
          <EmptyStateDescription>
            Save some words to see the definition and uses.
          </EmptyStateDescription>
        </EmptyState.Content>
      </EmptyState.Root>
    );
  }

  return (
    <Box as="section" w="full">
      <Heading fontFamily="global" my="2rem">
        Saved Words
      </Heading>
      <Flex
        as="section"
        w="full"
        flexDir="column"
        spaceY="1rem"
      >
        {words.map((word, index) => (
          <Box
            key={index}
            w="full"
            borderBottom="1px solid"
            borderColor={{ base: "gray.600", _dark: "gray.200" }}
            p="1rem"
          >
            <Flex
              w="full"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Text fontFamily="global" mb=".2rem">
                  {word.word}
                </Text>
                <Text color="purple.600" fontSize=".9rem">
                  {word.phonetics?.[0]?.text}
                </Text>
              </Box>
              <Button
                onClick={() => removeWord(word.word)}
                p="0"
                mt=".5rem"
                size="sm"
                variant="plain"
              >
                <Icon size="sm">
                  <LuTrash />
                </Icon>
                Delete Word
              </Button>
            </Flex>
            <Flex
              w="full"
              flexDir="column"
              spaceY="1.5rem"
              mt="1.5rem"
            >
              <Text fontSize="1.1rem">Meanings</Text>
              {word.meanings.map((meaning, meaningIndex) => (
                <Box key={`meaning-${meaningIndex}`}>
                  <Text fontFamily="global">
                    Part of speech:{" "}
                    <Em color="purple.600">{meaning.partOfSpeech}</Em>
                  </Text>
                  <Text fontSize=".9rem">
                    {meaning.definitions[0].definition}
                  </Text>
                  {/* Mostrar sinónimos globales */}
                  <Flex alignItems="center" spaceX=".2rem" mt=".5rem">
                    <Text>Synonyms: </Text>
                    {(meaning.synonyms?.length || 0) > 0 ? (
                      meaning.synonyms?.map((synonym, synonymIndex) => (
                        <Text
                          fontSize=".9rem"
                          fontFamily="global"
                          key={`synonym-${synonymIndex}`}
                          color="purple.600"
                        >
                          {synonym},
                        </Text>
                      ))
                    ) : (
                      <Text fontSize=".9rem" color="gray.500">
                        No synonyms available.
                      </Text>
                    )}
                  </Flex>
                  {/* Mostrar antónimos globales */}
                  <Flex alignItems="center" spaceX=".2rem" mt=".5rem">
                    <Text>Antonyms: </Text>
                    {(meaning.antonyms?.length || 0) > 0  ? (
                      meaning.antonyms?.map((antonym, antonymIndex) => (
                        <Text
                          fontSize=".9rem"
                          fontFamily="global"
                          key={`antonym-${antonymIndex}`}
                          color="purple.600"
                        >
                          {antonym},
                        </Text>
                      ))
                    ) : (
                      <Text fontSize=".9rem" color="gray.500">
                        No antonyms available.
                      </Text>
                    )}
                  </Flex>
                </Box>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};