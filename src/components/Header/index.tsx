import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  }); // * se tiver na versao mobile é false, se tiver na versao desk é verdadeira. Vamos usar para mostrar ou nao o nome do usuario e o email no comp. profile

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
      {!isWideVersion && (
        <IconButton
          aria-label="open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={() => onOpen()}
          mr="2"
        />
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
