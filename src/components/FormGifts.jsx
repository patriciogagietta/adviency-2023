import { useState } from "react"

export const FormGifts = ({ gifts, setGifts, modal, setModal } ) => {
    const [giftData, setGiftData] = useState({
        nombre: '',
        cantidad: 1,
        imagen: '',
        destinatario: '',
    })

    const handleCloseModal = () => {
        setModal(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (giftData.nombre.trim() === '' 
        || gifts.some((gift) => gift.nombre.toLowerCase() === giftData.nombre.toLocaleLowerCase())
        || giftData.imagen.trim() === '') return

        const newGiftObjetc = {
            nombre: giftData.nombre,
            cantidad: giftData.cantidad,
            imagen: giftData.imagen,
            destinatario: giftData.destinatario,
        }

        const updatedGifts = [...gifts, newGiftObjetc];

        localStorage.setItem('gift', JSON.stringify(updatedGifts))

        setModal(false)
        setGifts(updatedGifts)
        setGiftData({
            nombre: '',
            cantidad: 1,
            imagen: '',
            destinatario: '',
        })
    }

    return (
        <>
            {modal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                className="rounded p-2 placeholder-gray-400 border-2 border-red-500"
                                value={giftData.nombre}
                                type="text"
                                placeholder="Nombre del regalo"
                                onChange={(e) => setGiftData({ ...giftData, nombre: e.target.value })}
                            />

                            <input
                                className="rounded p-2 placeholder-gray-400 border-2 border-red-500"
                                value={giftData.imagen}
                                type="text"
                                placeholder="Url de la imagen"
                                onChange={(e) => setGiftData({ ...giftData, imagen: e.target.value })}
                            />

                            <input
                                className="rounded p-2 placeholder-gray-400 border-2 border-red-500"
                                value={giftData.destinatario}
                                type="text"
                                placeholder="Destinatario"
                                onChange={(e) => setGiftData({ ...giftData, destinatario: e.target.value })}
                            />

                            <input
                                className="rounded p-2 placeholder-gray-400 border-2 border-red-500"
                                value={giftData.cantidad}
                                type="number"
                                min={1}
                                placeholder="Cantidad"
                                onChange={(e) => setGiftData({ ...giftData, cantidad: e.target.value })}
                            />

                            <div className="flex justify-between">                           
                                <button
                                    onClick={handleCloseModal}
                                    type='submit'
                                    className="rounded bg-gray-200 px-2 py-1 border-2 border-black">
                                    Cerrar
                                </button>

                                <button
                                    type='submit'
                                    className="rounded bg-red-500 px-2 py-1 border-2 border-black">
                                    Agregar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
  )
}
