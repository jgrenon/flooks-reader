import { Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDir="column" bg="bg.subtle" color="fg" h="100vh" overflow="clip">
      <Flex as="header" bg="bg.inverted" color="fg.inverted" p={3}>
        FLOOKS READER
      </Flex>
      <Flex flexGrow={1} as="main" p={3}>
        Welcome to Flooks Reader!
      </Flex>
      <Flex as="footer">
        <Text color="fg.subtle" fontSize="xs" p={1}>
          &copy; 2025 Flooks Corp Inc. All rights reserved
        </Text>
      </Flex>
    </Flex>
  );
}
