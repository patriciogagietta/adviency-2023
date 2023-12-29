import { MdDelete } from "react-icons/md"

export const ListGifts = ({ gifts, setGifts }) => {

  const handleDeleteGift = (index) => {
    const updatedGifts = [...gifts]

    updatedGifts.splice(index, 1)
    setGifts(updatedGifts)
  }

  const handleDeleteAllGifts = () => {
    setGifts([])
  }

  return (
  <div className="flex flex-col gap-3">
    <ul>
      {gifts.map((gift, index) => (
          <li key={index} className="flex justify-between items-center">
            {gift}
            <button 
              onClick={() => handleDeleteGift(index)}
            className="text-lg">
              <MdDelete />
            </button>
          </li>
      ))}
    </ul>

    <div className="flex items-center justify-center">
      <button 
      onClick={handleDeleteAllGifts}
      className="rounded bg-red-500 px-6 py-1 w-full">
        Borrar Todo
      </button>
    </div>
  </div>
  )
}
