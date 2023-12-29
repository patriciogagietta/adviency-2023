import { useState } from "react"

export const FormGifts = ({ gifts, setGifts } ) => {
    const [giftData, setGiftData] = useState({
        nombre: '',
        cantidad: 1,
        imagen: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (giftData.nombre.trim() === '' 
        || gifts.some((gift) => gift.nombre.toLowerCase() === giftData.nombre.toLocaleLowerCase())
        || giftData.imagen.trim() === '') return

        const newGiftObjetc = {
            nombre: giftData.nombre,
            cantidad: giftData.cantidad,
            imagen: giftData.imagen,
        }

        const updatedGifts = [...gifts, newGiftObjetc];

        localStorage.setItem('gift', JSON.stringify(updatedGifts))

        setGifts(updatedGifts)
        setGiftData({
            nombre: '',
            cantidad: 1,
            imagen: '',
        })
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-4">
            <input 
                className="rounded p-2 placeholder-gray-400"
                value={giftData.nombre}
                type="text" 
                placeholder="Nombre del regalo"
                onChange={(e) => setGiftData({...giftData, nombre: e.target.value})}
            />

            <input
                className="rounded p-2 placeholder-gray-400"
                value={giftData.imagen}
                type="text"
                placeholder="Url de la imagen"
                onChange={(e) => setGiftData({ ...giftData, imagen: e.target.value })}
            />

            <input
                className="rounded p-2 placeholder-gray-400 w-20"
                value={giftData.cantidad}
                type="number"
                min={1}
                onChange={(e) => setGiftData({ ...giftData, cantidad: e.target.value })}
            />

            <button 
                type='submit' 
                className="rounded bg-red-500 px-6 py-1">
                Agregar
            </button>
        </form>
  )
}
