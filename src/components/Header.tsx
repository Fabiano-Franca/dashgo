import { Avatar, Box, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';
import { RiNotificationLine, RiUserAddLine } from './../../node_modules/react-icons/ri/index.esm';

export function Header(){
  return(
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text 
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input 
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400'}}
        />

        <Icon as={RiSearchLine} />
      </Flex>

      <Flex
        align="center"
        ml="auto"
      >
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20"/>
          <Icon as={RiUserAddLine} fontSize="20"/>
        </HStack>
        <Flex align="center">
          <Box>
            <Text>Fabiano França</Text>
            <Text color="gray.300" fontSize="small">
              fabianofranca.ti@gmail.com
            </Text>
          </Box>

          <Avatar 
            size="md" 
            name="Fabiano França" 
            src="https://avatars.githubusercontent.com/u/9583853?s=400&u=c7b5969dbdba0d0a35b054757e4ade0a26629351&v=4" 
          />
        </Flex>
      </Flex>

    </Flex>
  );
}