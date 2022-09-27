import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box>
          <Text>Fabiano França</Text>
          <Text color="gray.300" fontSize="small">
            fabianofranca.ti@gmail.com
          </Text>
        </Box>
      ) }

      <Avatar 
        size="md" 
        name="Fabiano França" 
        src="https://avatars.githubusercontent.com/u/9583853?s=400&u=c7b5969dbdba0d0a35b054757e4ade0a26629351&v=4" 
      />
    </Flex>
  );
}