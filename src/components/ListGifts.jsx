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
          <ul className="flex flex-col gap-4 border-b-2 pb-6 border-y-rose-500">
            {gifts.map((gift, index) => (
              <li key={index} className="flex justify-between items-center gap-20">

                <div className="flex gap-4">
                  <div className="flex gap-5">
                    <img className="size-12 rounded" src={gift.imagen} alt={gift.nombre} />
                    <div>
                      <p>{gift.nombre} (x{gift.cantidad})</p>
                      <p className="opacity-60">{gift.destinatario}</p>
                    </div>
                  </div>
                  <div>
                    <p>{Number(gift.precio * gift.cantidad).toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button onClick={() => handleEditGift(gift.nombre)} className="text-lg">
                    <MdEditSquare />
                  </button>

                  <button onClick={() => handleDeleteGift(index)} className="text-lg">
                    <MdDelete />
                  </button>
                </div>

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
