import "./MainContainer.css";
import Home from "../Home/Home";
import RickAndMorty from "../RickAndMorty/RickAndMorty";
function MainContainer() {
  return (
    <main className=" min-h-[100vh] w-full flex flex-col justify-center items-center  overflow-hidden bg-[#002339] px-20">
      <Home />
      <RickAndMorty />
    </main>
  );
}

export default MainContainer;
