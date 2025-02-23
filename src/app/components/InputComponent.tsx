import { Box, Input } from "@chakra-ui/react"
import { InputGroup } from "@/components/ui/input-group"
import { LuSearch } from "react-icons/lu"

export const InputComponent = () => {
  return (
    <Box
      as="section"
      w="full"
      mt="1.5rem"
    > 
      <InputGroup w="full" endElement={<LuSearch />}>
        <Input 
          fontFamily="global"
          w="100%"
          borderRadius="md"
          outline="none"
          placeholder="Enter the word..." 
          border={{ base: '1px solid', _dark: '1px solid' }}
          borderColor={{ base: 'transparent', _dark: 'gray.800' }}
          bg={{ base: 'lightInputBackground', _dark: 'darkBackground' }}
          _active={{ borderColor: 'purple.300'}}
          _focus={{ borderColor: 'purple.300'}}
        />
      </InputGroup>
    </Box>
  )
}