import { MdDelete } from "react-icons/md"

export const ListGifts = ({ gifts, setGifts }) => {

  const handleDeleteGift = (index) => {
    const updatedGifts = [...gifts]

    updatedGifts.splice(index, 1)
    setGifts(updatedGifts)
  }

  return (
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
  )
}
