import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
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
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
