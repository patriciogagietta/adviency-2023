import { useState } from "react"

export const FormGifts = ({ gifts, setGifts } ) => {
    const [newGift, setNewGift] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()

        setGifts([...gifts, newGift])
        setNewGift('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-10">
            <input 
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
