import React from 'react'
import { Button } from '@/components/ui/button'

const OverlayDeleteCity = (props : any) => {
  return (
    <div className='bg-[#292D325C] bg-opacity-30 h-screen w-screen flex flex-col items-center justify-center fixed'>
        <div className='w-1/2 h-1/2 bg-[#292D32] border-[#C2E4FF] border-2 rounded-lg flex flex-col items-center justify-evenly gap-4'>
            <h1 className='font-bold text-white text-xl'>Voulez-vous supprimer cette ville ?</h1>
            <div className='flex flex-row items-center justify-evenly w-full'>
                <Button onClick={props.onDelete} className='rounded-full bg-[#C2E4FF] text-black font-bold w-1/4'>Oui</Button>
                <Button onClick={props.onClose} className='rounded-full bg-[#C2E4FF] text-black font-bold w-1/4'>Non</Button>
            </div>
        </div>
    </div>
  )
}

export default OverlayDeleteCity