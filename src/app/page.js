import { Avatar } from "@/components/ui/avatar";
import { Box, Flex, Heading, Spacer, Text, VStack, Link as UILink, Center, HStack, Separator } from "@chakra-ui/react";
import Link from "next/link";

function Universe({ title, cover, id }) {
  return (
    <UILink as={Link} href={`/universes/${id}`}>
      <VStack boxShadow="lg" borderRadius="md" boxShadowColor="black" gap={0}>
        {cover ? (
          <Box as="img" src={cover} w="42" h="64" borderTopRadius="md" />
        ) : (
          <Center h="64" borderTopRadius="md" bg="bg.muted">
            <Center w="48" textAlign="center">
              <Text fontWeight="extrabold" color="gray" fontSize="7xl">
                ?
              </Text>
            </Center>
          </Center>
        )}
        <Center w="full" bg="blue.subtle" py={1}>
          <Text fontSize="sm">{title}</Text>
        </Center>
      </VStack>
    </UILink>
  );
}

export default function Home() {
  return (
    <Flex flexDir="column" bg="bg.subtle" color="fg" h="100vh" overflow="clip">
      <Flex as="header" bg="bg.inverted" color="fg.inverted" p={3}>
        <Heading size="2xl">FLOOKS</Heading>
        <Spacer />
        <Avatar size="sm" />
      </Flex>
      <Flex flexGrow={1} flexDir="column" overflowY="auto" maxH="99vh">
        <VStack p={5} bg="bg.subtle">
          <Heading w="full">My Sessions</Heading>
          <HStack w="full" as="main" p={3}>
            <Universe title="Lovecraft World" cover="/lovecraft-universe.png" />
          </HStack>
        </VStack>
        <Separator />
        <VStack p={5} bg="bg.subtle">
          <Heading w="full">Available Universes</Heading>
          <HStack w="full" as="main" p={3}>
            <Universe title="Lovecraft World" cover="/lovecraft-universe.png" />
            <Universe title="New Universe" />
          </HStack>
        </VStack>
        <Separator />
        <VStack p={5} bg="bg.subtle">
          <Heading w="full">Popular Stories</Heading>
          <HStack w="full" as="main" p={3}>
            <Universe title="The Dark Lake" cover="/dark-lake.png" />
            <Universe title="New Storyline" />
          </HStack>
        </VStack>
      </Flex>
      <Flex as="footer">
        <Text color="fg.subtle" fontSize="xs" p={1}>
          &copy; 2025 Flooks Corp Inc. All rights reserved
        </Text>
      </Flex>
    </Flex>
  );
}
