import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className='h-[100px] w-full flex justify-between items-center px-40 py-10 absolute z-50'>
      <Image
        src='https://s3-alpha-sig.figma.com/img/bd47/e3f5/0c8c91effa54ca1270f8bb30625ff952?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJAaBtcda9GWKksxGtWaUhZQPPtdU~Z~d9ghAyDI-MMHbbVUhoZT9nRcL1JwHxlVp4cnG112iNlfzGqIAEDo6agSUndbQaE5tve1EpvWMpHwTXPG7f1vcvGMSSQrZrWHNvtfug~vmYsKj4H75LWyyN14eQYAQu7GPlYKakMcV2Cz1aBrDcRKp3nMYViCNXkxX680MY379Gp0alrYe1Q-8u4YYvdVrBmH8xN2KGvhJl-zgLouRx8KFq0sftA43QfKSmuQuUCrvS-ehAIEC6Q6h0ci~~eheJRWi5u~nCw~hqc8yB2nR8M38nPC80f7hL1g6kzjUxRqiOdRDLZtI85Tyg__'
        alt='logo'
        className=''
        width={50}
        height={50}
      />
      <nav>
        <ul className='font-outfit flex gap-5 text-[16px] text-white'>
          <li>
            <Link href='#'>Home</Link>
          </li>
          <li>
            <Link href='#'>Drops</Link>
          </li>
          <li>
            <Link href='#'>Marketplace</Link>
          </li>
          <li>
            <Link href='#'>Activity</Link>
          </li>
          <li>
            <Link href='#'>Company</Link>
          </li>
        </ul>
      </nav>
      <Button
        variant='outlined'
        className='rounded-full font-monserrat text-[11px] 2xl:text-[16px] border border-customYellow text-white'>
        Ver en opensea
      </Button>
    </header>
  )
}

export default Header
