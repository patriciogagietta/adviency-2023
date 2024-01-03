
import { useEffect, useState } from 'react'
import { ListGifts } from './components/ListGifts'
import { FormGifts } from './components/FormGifts'
import { ModalComprar } from './components/ModalComprar'
import './App.css'

function App() {
  const [gifts, setGifts] = useState([])
  const [modal, setModal] = useState(false)
  const [giftEdit, setGiftEdit] = useState(null)
  const [isEdit, setIsEdit] = useState(false)
  const [modalComprar, setModalComprar] = useState(false)

  useEffect(() => {
    const storedGift = JSON.parse(window.localStorage.getItem('gift')) || []
    setGifts(storedGift)
  }, [])

  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center'>
        <div className='bg-slate-300 p-20 rounded flex flex-col gap-6 shadow-2xl'>
          <FormGifts gifts={gifts} setGifts={setGifts} modal={modal} setModal={setModal} giftEdit={giftEdit} setGiftEdit={setGiftEdit} setIsEdit={setIsEdit} isEdit={isEdit}/>
          <ListGifts gifts={gifts} setGifts={setGifts} setModal={setModal} setGiftEdit={setGiftEdit} setIsEdit={setIsEdit} setModalComprar={setModalComprar}/>
          {modalComprar && (
            <ModalComprar gifts={gifts} setModalComprar={setModalComprar} />
          )}
        </div>
      </div>
    </>
  )
}

export default App
