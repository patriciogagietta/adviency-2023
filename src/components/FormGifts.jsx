import { useEffect, useState } from "react"

export const FormGifts = ({ gifts, setGifts, modal, setModal, giftEdit, setGiftEdit, setIsEdit, isEdit } ) => {
    const [giftData, setGiftData] = useState({
        nombre: '',
        cantidad: 1,
        imagen: '',
        destinatario: '',
        precio: 0,
    })

    const REGALOS_ALAZAR = [
        "Botines",
        "CSGO",
        "Peluche",
        "Perfume",
        "Reloj",
        "Libro",
        "Vino",
        "Camara",
        "Ajedrez",
        "Damas"
    ];

    useEffect(() => {
        if (giftEdit){
            setGiftData({
                nombre: giftEdit.nombre,
                cantidad: giftEdit.cantidad,
                imagen: giftEdit.imagen,
                destinatario: giftEdit.destinatario,
                precio: giftEdit.precio
            })
        }
    }, [giftEdit])

    const handleCloseModal = () => {
        setGiftEdit(null)
        setModal(false)
        setIsEdit(false)
        setGiftData({
            nombre: '',
            cantidad: 1,
            imagen: '',
            destinatario: '',
            precio: 0
        });
    }

    const handleGiftAlAzar = () => {
        const index = Math.floor(Math.random() * REGALOS_ALAZAR.length)
        const giftAlAzar = REGALOS_ALAZAR[index]

        const giftExists = gifts.some((gift) => gift.nombre.toLowerCase() === giftAlAzar.toLowerCase());

        if (!giftExists){
            setGiftData(prevGiftData => ({ ...prevGiftData, nombre: giftAlAzar }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isEdit === false){
            if (gifts.some((gift) => gift.nombre.toLowerCase() === giftData.nombre.toLocaleLowerCase())) return
        }

        let updatedGifts
        if (giftEdit) {
            const existingGift = gifts.find(
                (gift) =>
                    gift.nombre.toLowerCase() === giftData.nombre.toLowerCase() &&
                    gift.nombre.toLowerCase() !== giftEdit.nombre.toLowerCase()
            )

            if (existingGift) {
                return
            }

            updatedGifts = gifts.map((gift) =>
                gift.nombre === giftEdit.nombre ? { ...giftData } : gift
            )
        } else {
            updatedGifts = [...gifts, { ...giftData }]
        }

        localStorage.setItem('gift', JSON.stringify(updatedGifts))

        setModal(false)
        setGiftEdit(null)
        setGifts(updatedGifts)
        setGiftData({
            nombre: '',
            cantidad: 1,
            imagen: '',
            destinatario: '',
            precio: 0,
        })
    }

    return (
        <>
            {modal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <input
                                    className="rounded p-2 placeholder-gray-400 border-2 border-red-500"
                                    value={giftData.nombre}
                                    required
                                    type="text"
                                    placeholder="Nombre del regalo"
                                    onChange={(e) => setGiftData({ ...giftData, nombre: e.target.value })}
                                />

                                <button 
                                    type='button' 
                                    onClick={handleGiftAlAzar} 
                                    className="rounded bg-red-500/50 px-2 py-1 border-2 border-black">
                                    Sorprendeme!
                                </button>
                            </div>

                            <input
                                className="rounded p-2 placeholder-gray-400 border-2 border-red-500"
                                value={giftData.imagen}
                                required
                                type="text"
                                placeholder="Url de la imagen"
                                onChange={(e) => setGiftData({ ...giftData, imagen: e.target.value })}
                            />

                            <input
                                className="rounded p-2 placeholder-gray-400 border-2 border-red-500"
                                value={giftData.destinatario}
                                required
                                type="text"
                                placeholder="Destinatario"
                                onChange={(e) => setGiftData({ ...giftData, destinatario: e.target.value })}
                            />

                            <input
                                className="rounded p-2 placeholder-gray-400 border-2 border-red-500"
                                value={giftData.precio}
                                required
                                type="number"
                                placeholder="Precio"    
                                onChange={(e) => setGiftData({ ...giftData, precio: e.target.value })}
                            />

                            <input
                                className="rounded p-2 placeholder-gray-400 border-2 border-red-500"
                                value={giftData.cantidad}
                                required
                                type="number"
                                min={1}
                                placeholder="Cantidad"
                                onChange={(e) => setGiftData({ ...giftData, cantidad: e.target.value })}
                            />

                            <div className="flex justify-between">                           
                                <button
                                    onClick={handleCloseModal}
                                    type='button'
                                    className="rounded bg-gray-200 px-2 py-1 border-2 border-black">
                                    Cerrar
                                </button>

                                <button
                                    type='submit'
                                    className="rounded bg-red-500 px-2 py-1 border-2 border-black">
                                    {giftData.nombre ? 'Confirmar' : 'Agregar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
  )
}
