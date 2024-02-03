import Header from "@/components/Header/Header";
import MainContainer from "@/components/MainContainer/MainContainer";
import { ContextProvider } from "@/context/MyContext";

export default function Home() {
  return (
    <ContextProvider>
      <Header />
      <MainContainer />
    </ContextProvider>
  );
}
