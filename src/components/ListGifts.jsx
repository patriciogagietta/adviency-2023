import { MdDelete, MdEditSquare } from "react-icons/md"

export const ListGifts = ({ gifts, setGifts, setModal, setGiftEdit, setIsEdit }) => {

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

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={handleSeeModal}
        className="rounded bg-red-500 px-6 py-1.5 w-full border-2 border-black">
        Agregar Regalo
      </button>

      {gifts.length > 0 ? (
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {gifts.map((gift, index) => (
              <li key={index} className="flex justify-between items-center">

                <div className="flex gap-4 items-center">
                  <img className="size-12 rounded" src={gift.imagen} alt={gift.nombre} />
                  <div>
                    <p>{gift.nombre} (x{gift.cantidad})</p>
                    <p className="opacity-60">{gift.destinatario}</p>
                  </div>
                </div>

                <button onClick={() => handleEditGift(gift.nombre)} className="text-lg">
                  <MdEditSquare />
                </button>

                <button onClick={() => handleDeleteGift(index)} className="text-lg">
                  <MdDelete />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={handleDeleteAllGifts}
            className="rounded bg-red-500 px-6 py-1.5 w-full border-2 border-black">
            Borrar Todo
          </button>
        </div>
        ) : (
          <p className="opacity-50 text-center">No hay regalos! Agregá algo!</p>
      )}
    </div>
  )
}
