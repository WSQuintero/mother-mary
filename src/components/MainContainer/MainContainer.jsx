import Image from 'next/image'
import './MainContainer.css'
import { Button } from '@mui/material'
function MainContainer() {
  return (
    <main className='bg-blue-700 min-h-[100vh] flex flex-col justify-center items-center px-20 overflow-hidden'>
      <div className='w-[90%] min-h-[100vh] flex justify-center items-center relative'>
        <section className=' w-2/4 h-[100vh] pt-20  text-white flex flex-col justify-center  gap-10  z-40'>
          <h1 className=' uppercase w-full xl:w-[961px]  leading-none font-monserrat font-bold text-6xl xl:text-[84px] text-pretty text-shadow-customShadow relative'>
            Collect <br /> Mother Mary <br />
            Art{' '}
            <span className='relative w-full'>
              nft <div class='elipse rounded-full top-10 right-0'></div>
            </span>
          </h1>
          <p className='font-outfit lg:text-[20px] max-w-[500px] text-wrap whitespace-line '>
            Find the best upcoming and live NFT drops. Moonly provides analytics
            to help you make good NFT investments.
          </p>
          <Button
            variant='contained'
            className='uppercase bg-gradient-to-b from-[#FECB48]  to-[#684d0a] rounded-[15px] max-w-[216px] max-h-[66px] text-textButtonColor text-[11px] font-bold font-monserrat'
            size={'11px'}>
            Ver en opensea
          </Button>
        </section>
        <section className='w-2/4'>
          <Image
            src={
              'https://s3-alpha-sig.figma.com/img/ff28/033c/db6af3f1420599af15c38573944c9f79?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6K-f~Tf74jQ9Y91lgGwOX1bqLJWnyB-~kS6PhTEPO8eNO5p6Cybp0ASMNRrI26Z655YX87O5uK-4-LFGPOuUmtI7Dxa9ObOsP6w4qAJxA7-udTpLpXFF3geo3Ku5OuZZQ~AqTv8pX6tRuDSp0lGsHwfvCOeZxQ2sSqag1tIg0TaAo425BGudwvNXIbPPvTIXTMXTOVxjblkGSbNPBUu5ZYaYUlnMNYkDND58MndilN-oJUPME-jmimEbhua~EW--gXgOAAQKgHXb0XwMBhID6rUrXsZeTYBfd4YVPcyqOXiBJ~mUb3uTAYB-m9Gl8oiv3yyYw46jjt1JBzfkeqayw__'
            }
            alt='virgin'
            width={700}
            height={700}
            className='object-contain h-[500px] lg:h-[1085px] absolute bottom-0'
          />
        </section>
      </div>
    </main>
  )
}

export default MainContainer