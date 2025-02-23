import { Flex, Heading, Icon, Separator, Button } from "@chakra-ui/react"
import { LuBookOpen } from "react-icons/lu"
import { ColorModeButton } from "@/components/ui/color-mode";

export const HeaderComponent = () => {
  return (
    <Flex
      as="main"
      w="full"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex align="center" spaceX=".5rem">
        <Icon size="md">
          <LuBookOpen />
        </Icon>
        <Heading color={{ base: 'mainText', _dark: 'mainTextDark'}}>Nextionary</Heading>
      </Flex>
      <Flex
        fontFamily="global"
        alignItems="center"
        spaceX=".5rem"
      >
        <Button 
          variant="ghost" 
          size="sm" 
          transition="all 0.2 ease-in" 
          color={{ base: 'secondaryText', _dark: 'secondaryTextDark'}}
          _hover={{ textDecoration: "underline"  }}
        >
          Saved Words
        </Button>
        <Separator height="2rem" orientation="vertical" />
        <ColorModeButton />
      </Flex>
    </Flex>
  )
}