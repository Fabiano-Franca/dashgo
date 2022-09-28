import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

//Criando o contexto
//O createContext precisa da informação do que será gravado neste contexto
//ela será o tipo do retorno do useDisclosure.
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps) {
  //O chakra disponibiliza o hooks useDisclosure que tem as informações que
  // precisamos do nosso drawer.
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return(
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}
//Para não precisarmos ficar utilizando o useContext do react, podemos fazer uma 
//substituição passando nosso contexto para o useContext, como abaixo.
export const useSidebarDrawer = () => useContext(SidebarDrawerContext)