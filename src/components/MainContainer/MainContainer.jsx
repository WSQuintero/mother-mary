import './MainContainer.css'
import Background from '../BackGround/Background'
import Home from '../Home/Home'
function MainContainer() {
  return (
    <main className=' min-h-[100vh] w-full flex flex-col justify-center items-center  overflow-hidden bg-[#002339] px-20'>
      <Background />
      <Home />
    </main>
  )
}

export default MainContainer
