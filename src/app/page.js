import Header from "@/app/ui/Header/Header";
import MainContainer from "@/app/ui/MainContainer/MainContainer";
import { ContextProvider } from "@/context/MyContext";

export default function Home() {
  return (
    <ContextProvider>
      <Header />
      <MainContainer />
    </ContextProvider>
  );
}
