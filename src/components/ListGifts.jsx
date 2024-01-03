import { MdDelete, MdEditSquare } from "react-icons/md"

export const ListGifts = ({ gifts, setGifts, setModal, setGiftEdit, setIsEdit, setModalComprar }) => {

  const handleDeleteGift = (index) => {
    const updatedGifts = [...gifts]
    updatedGifts.splice(index, 1)
    
    setGifts(updatedGifts)
    localStorage.setItem('gift', JSON.stringify(updatedGifts))
  }

  const handleDeleteAllGifts = () => {
    setGifts([])
    localStorage.removeItem('gift')
  }

  const handleSeeModal = () => {
    setModal(true)
  }

  const handleEditGift = (nombre) => {
    const giftEditt = gifts.find((gift) => gift.nombre === nombre)
    setGiftEdit(giftEditt)
    setIsEdit(true)
    setModal(true)
  }

  const handlePrevisualizar = () => {
    setModalComprar(true)
  }

  const totalPrice = gifts.reduce((total, gift) => total + (gift.precio * gift.cantidad), 0)

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={handleSeeModal}
        className="rounded bg-red-500 px-6 py-1.5 w-full border-2 border-black">
        Agregar Regalo
      </button>

      {gifts.length > 0 ? (
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col gap-4 border-b-2 pb-10 mt-3 border-black">
            {gifts.map((gift, index) => (
              <li key={index} className="flex justify-between items-center gap-20">

                <div className="flex gap-5">
                  <div className="flex gap-4">
                    <img className="size-12 rounded" src={gift.imagen} alt={gift.nombre} />
                    <div>
                      <div className="flex gap-4">
                        <p>{gift.nombre} (x{gift.cantidad})</p>
                        <p className="font-bold">{Number(gift.precio * gift.cantidad).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
                      </div>
                      <div>
                        <p className="opacity-60">{gift.destinatario}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1">
                  <MdEditSquare onClick={() => handleEditGift(gift.nombre)} className="cursor-pointer text-2xl"/>
                  <MdDelete onClick={() => handleDeleteGift(index)} className="cursor-pointer text-2xl"/>
                </div>

              </li>
            ))}
          </ul>

          <p className="text-center font-bold">Total: {Number(totalPrice).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleDeleteAllGifts}
              className="rounded bg-red-500 px-6 py-1.5 w-full border-2 border-black">
              Borrar Todo
            </button>

            <button
              onClick={handlePrevisualizar}
              className="rounded px-6 bg-red-500/40 py-1.5 w-full border-2 border-black">
              Previsualizar
            </button>
          </div>
        </div>
        ) : (
          <p className="opacity-50 text-center">No hay regalos! Agregá algo!</p>
      )}
    </div>
  )
}
