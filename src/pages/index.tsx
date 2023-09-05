import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  // *nao colocou dessa forma values:SignInFormData pq o 2 param event nao seria tipado
  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("values =>", values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      {/* p=8 (medida espacamentos do chakra): para saber a medida em px basta multiplicar por 4, e ai nesse caso 32px. E para associar em rem dividir por 4 */}
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        {/* o stack server para dar espacamento entre o primeiro nivel de elementos, entao para nao dar esse espacamento entre a label e o input envolvemos ele dentro de um outro elemento (div, no caso FormControl que e para agrupar a label com input). E ai sera aplicado o espacamento entre as divs */}
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={formState.errors.email}
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={formState.errors.password}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
