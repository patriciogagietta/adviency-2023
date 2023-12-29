import { MdDelete } from "react-icons/md"

export const ListGifts = ({ gifts, setGifts }) => {

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

  return (
    <div className="flex flex-col gap-3">
      {gifts.length === 0 ? (
        <p className="opacity-50 text-center">No hay regalos! Agregá algo!</p>
        ) : (
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {gifts.map((gift, index) => (
              <li key={index} className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img className="size-12 rounded" src={gift.imagen} alt={gift.nombre} />
                  <p>{gift.nombre} (x{gift.cantidad})</p>
                </div>
                <button onClick={() => handleDeleteGift(index)} className="text-lg">
                  <MdDelete />
                </button>
              </li>
            ))}
          </ul>

          <button 
            onClick={handleDeleteAllGifts} 
            className="rounded bg-red-500 px-6 py-1 w-full">
              Borrar Todo
          </button>
        </div>
      )}
    </div>
  )
}
