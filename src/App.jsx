
import { useState } from 'react'
import { ListGifts } from './components/ListGifts'
import { FormGifts } from './components/FormGifts'
import './App.css'

function App() {

  const storedGift = JSON.parse(window.localStorage.getItem('gift')) || []
  const [gifts, setGifts] = useState(storedGift)
  const [modal, setModal] = useState(false)
  const [giftEdit, setGiftEdit] = useState(null)
  const [isEdit, setIsEdit] = useState(false)

  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center'>
        <div className='bg-slate-300 p-20 rounded flex flex-col gap-6 shadow-2xl'>
          <h1 className='text-4xl font-bold'>Regalos: </h1>
          <FormGifts gifts={gifts} setGifts={setGifts} modal={modal} setModal={setModal} giftEdit={giftEdit} setGiftEdit={setGiftEdit} setIsEdit={setIsEdit} isEdit={isEdit}/>
          <ListGifts gifts={gifts} setGifts={setGifts} setModal={setModal} setGiftEdit={setGiftEdit} setIsEdit={setIsEdit}/>
        </div>
      </div>
    </>
  )
}

export default App
