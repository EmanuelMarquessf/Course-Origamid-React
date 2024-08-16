import { useEffect } from 'react'

export default function load() {
  return (
    <div className='flex flex-col gap-2 items-center justify-center bg-slate-100 rounded-sm w-full h-[335px]'> 
      <img src='/egg.gif' className='w-28 h-28'></img>
      <span className='font-vt text-xl'>Loading...</span>
    </div>
  )
}
