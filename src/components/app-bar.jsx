import { Flex, Heading, HStack, Spacer, Link as UILink } from "@chakra-ui/react";
import { Avatar } from "./ui/avatar";
import { ColorModeButton } from "./ui/color-mode";
import { auth } from "@/auth";
import { SignIn } from "./signin";
import Link from "next/link";

export async function AppBar() {
  const session = await auth();

  return (
    <Flex as="header" bg={{ base: "gray.600", _dark: "gray.800" }} p={3}>
      <Heading size="2xl" color={{ base: "gray.50", _dark: "gray.200" }}>
        FLOOKS
      </Heading>
      <Spacer />
      <HStack>
        {session?.user ? (
          <Avatar size="sm" />
        ) : (
          <>
            <SignIn />
            <UILink color={{ base: "gray.50", _dark: "gray.200" }} as={Link} href="/register">
              Register
            </UILink>
          </>
        )}
      </HStack>

      <ColorModeButton />
    </Flex>
  );
}
