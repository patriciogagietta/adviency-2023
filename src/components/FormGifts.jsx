import { useState } from "react"

export const FormGifts = ({ gifts, setGifts } ) => {
    const [newGift, setNewGift] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (newGift.trim() === '' || gifts.some((gift) => gift.toLowerCase() === newGift.toLocaleLowerCase())) return

        setGifts([...gifts, newGift])
        setNewGift('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-10">
            <input 
                className="rounded p-2 placeholder-gray-400"
                value={newGift}
                type="text" 
                placeholder="Nombre del regalo"
                onChange={(e) => setNewGift(e.target.value)}
            />
            <button 
            type='submit' 
            className="rounded bg-red-500 px-6 py-1">
                Agregar
            </button>
        </form>
  )
}
