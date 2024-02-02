'use client'
import { Button } from '@mui/material'
import React from 'react'

function GeneralButton({ text, onClick }) {
  return (
    <Button
      variant='contained'
      className='uppercase bg-gradient-to-b from-[#FECB48] hover:bg-red-300 to-[#b38512] rounded-[15px] max-w-[216px] max-h-[66px] text-textButtonColor text-[11px] font-bold font-monserrat'
      size={'11px'}
      onClick={onClick}>
      {text}
    </Button>
  )
}

export default GeneralButton
