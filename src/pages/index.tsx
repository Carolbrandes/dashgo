import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
  // *p=8 (medida espacamentos do chakra): para saber a medida em px basta multiplicar por 4, e ai nesse caso 32px. E para associar em rem dividir por 4
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        {/* o stack server para dar espacamento entre o primeiro nivel de elementos, entao para nao dar esse espacamento entre a label e o input envolvemos ele dentro de um outro elemento (div, no caso FormControl que e para agrupar a label com input). E ai sera aplicado o espacamento entre as divs */}
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{ bgColor: "gray.900" }}
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{ bgColor: "gray.900" }}
              size="lg"
            />
          </FormControl>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
