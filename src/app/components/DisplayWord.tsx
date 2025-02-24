"use client";
import { Heading, Box, Flex, Text, Button, Icon, HStack, Separator, List } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster";
import { LuPlay, LuSave } from "react-icons/lu";
import { useWordStore } from "@/providers/WordStoreProvider";
import { findAudioSource } from "@/utils/findAudioSource";
import { useSavedWordStore } from "@/providers/SavedWordProvider";

export const DisplayWord = () => {
  const { word } = useWordStore((state) => state);
  const { addWord } = useSavedWordStore((state) => state);

  const handlePlay = () => {
    const source = findAudioSource(word);
    const audio = new Audio(source);
    audio.play();
  }

  const handleSaveWord = () => {
    addWord(word as Word)
    toaster.create({
      title: "Word saved correctly.",
      type: "success"
    })
  }

  if (word === null || word === undefined) return null

  return (
    <Flex as="section" mt="3rem" w="full" flexDir="column">
      <Toaster />
      {/* Word Info and Phonetic */}
      <Flex w="full" alignItems="center" justifyContent="space-between">
        <Box>
          <Heading fontFamily="global" fontSize="2.5rem" mb=".8rem">
            {word?.word}
          </Heading>
          <Text color="purple.600" display={word?.phonetics?.[0]?.text !== undefined ? "inline" : "none"}>
            {word?.phonetics?.[0]?.text}
          </Text>
          <Button 
            onClick={handleSaveWord}
            mt=".5rem"
            p="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            variant="plain"
            size="sm"
          >
            <Icon size="md" >
              <LuSave />
            </Icon>
            Save Word
          </Button>
        </Box>
        <Box>
          <Button
            display={word?.word !== undefined ? "inline" : "none"}
            size="lg"
            rounded="999px"
            p="0"
            bg="purple.200"
            onClick={handlePlay}
            disabled={word?.phonetics?.[0]?.audio === undefined}
          >
            <Icon size="sm" fill="purple.600" stroke="none">
              <LuPlay />
            </Icon>
          </Button>
        </Box>
      </Flex>

      {/* Meanings */}
      <Box w="full" mt="1rem">
        {word?.meanings?.map((meaning, meaningIndex) => (
          <Box key={meaningIndex}>
            <HStack my="2rem">
              <Text fontFamily="global" fontWeight="bold" fontSize="1.2rem">
                {meaning?.partOfSpeech}
              </Text>
              <Separator flex="1" />
            </HStack>
            <Box>
              <Heading
                as="h3"
                fontSize="1.3rem"
                fontFamily="global"
                color={{ base: "gray.400", _dark: "gray.200" }}
                fontWeight="normal"
              >
                Meaning
              </Heading>
              <List.Root as="ul" spaceY=".8rem" mt=".5rem">
                {meaning?.definitions?.map((definition, definitionIndex) => (
                  <List.Item
                    fontFamily="global"
                    fontSize=".9rem"
                    key={`${meaningIndex}-${definitionIndex}`} 
                    as="li"
                    _marker={{ color: "purple.600" }}
                  >
                    <Text>{definition?.definition}</Text>
                    {meaning?.partOfSpeech === "verb" && definition?.example !== undefined && (
                      <Text
                        as="span"
                        color={{ base: "gray.800", _dark: "gray.400" }}
                        fontSize=".9rem"
                        fontFamily="global"
                      >
                        {`"${definition?.example}"`}
                      </Text>
                    )}
                  </List.Item>
                ))}
              </List.Root>
            </Box>
            {meaning?.synonyms?.length !== 0 && (
              <Flex mt="2rem" w="full" spaceX="1rem" alignItems="center">
                <Text color={{ base: "gray.800", _dark: "white" }} fontFamily="global">
                  Synonyms
                </Text>
                <Flex spaceX=".5rem">
                  {meaning?.synonyms?.map((synonym, synonymIndex) => (
                    <Text
                      key={`${meaningIndex}-${synonymIndex}`} 
                      fontFamily="global"
                      color="purple.600"
                      fontSize=".9rem"
                    >
                      {synonym},
                    </Text>
                  ))}
                </Flex>
              </Flex>
            )}
          </Box>
        ))}
      </Box>
    </Flex>
  );
};