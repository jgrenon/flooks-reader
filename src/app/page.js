import { auth } from "@/auth";
import { Box, Flex, Heading, Text, VStack, Link as UILink, Center, HStack, Separator } from "@chakra-ui/react";
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

export default async function Home() {
  const session = await auth();

  return (
    <Flex flexGrow={1} flexDir="column" overflowY="auto" maxH="99vh">
      {session?.user && (
        <VStack p={5} bg="bg.subtle">
          <Heading w="full">My Sessions</Heading>
          <HStack w="full" as="main" p={3}>
            <Universe title="Lovecraft" cover="/lovecraft-universe.png" />
          </HStack>
        </VStack>
      )}
      <Separator />
      <VStack p={5} bg="bg.subtle">
        <Heading w="full">Available Universes</Heading>
        <Text w="full" fontSize="sm">
          Select a universe to explore scenes and storylines for your reading session
        </Text>
        <HStack w="full" as="main" p={3}>
          <Universe title="Lovecraft" cover="/lovecraft-universe.png" />
          {session?.user && <Universe title="New Universe" />}
        </HStack>
      </VStack>
      <Separator />
      <VStack p={5} bg="bg.subtle">
        <Heading w="full">Popular Stories</Heading>
        <Text w="full" fontSize="sm">
          Select one of the most popular storylines on Flooks
        </Text>
        <HStack w="full" as="main" p={3}>
          <Universe title="The Dark Lake" cover="/dark-lake.png" />
          {session?.user && <Universe title="New Storyline" />}
        </HStack>
      </VStack>
    </Flex>
  );
}
