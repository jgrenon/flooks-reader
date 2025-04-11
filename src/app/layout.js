import { Provider } from "@/components/ui/provider";
import { Geist, Geist_Mono } from "next/font/google";
import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { ColorModeButton } from "@/components/ui/color-mode";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Flooks",
  description: "Fluid E-Book Reader",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <Flex flexDir="column" bg="bg.subtle" color="fg" h="100vh" overflow="clip">
            <Flex as="header" bg="bg.inverted" p={3}>
              <Heading size="2xl" color="fg.inverted">
                FLOOKS
              </Heading>
              <Spacer />
              <Avatar size="sm" />
              <ColorModeButton />
            </Flex>
            {children}
            <Flex as="footer">
              <Text color="fg.subtle" fontSize="xs" p={1}>
                &copy; 2025 Flooks Corp Inc. All rights reserved
              </Text>
            </Flex>
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
