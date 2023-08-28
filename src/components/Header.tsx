import { Flex, Icon, Input, HStack, Text, Box, Avatar } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export function Header() {
  // *h = "20" - sempre que coloca o numero como String, ele entende q e formato de espacamento
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo{" "}
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>

      {/* foi utilizado uma label para fazermos um input fake pq vamos ter um icone */}
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={480}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
          px="4"
          mr="4"
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Diego Fernandes</Text>
            <Text color="gray.300" fontSize="small">
              diego.schell.f@gmail.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Diego Fernandes"
            src="https://github.com/diego3g.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
