
export const ModalComprar = ({ gifts, setModalComprar }) => {
    
    const handleCloseModalComprar = () => {
        setModalComprar(false)
    }

    return (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-10 rounded-lg shadow-lg">
                <div>
                    <h2 className="text-3xl font-bold">Comprar:</h2>
                </div>

                <ul className="flex flex-col gap-4 pb-10 mt-3">
                    {gifts.map((gift, index) => (
                        <li key={index} className="flex items-center gap-4">
                            <img className="size-12 rounded" src={gift.imagen} alt={gift.nombre} />
                            <div>
                                <p>{gift.nombre} (x{gift.cantidad})</p>
                                <p className="opacity-60">{gift.destinatario}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <div>
                    <button
                        onClick={handleCloseModalComprar}
                        type="button"
                        className="rounded bg-gray-200 px-2 py-1 border-2 border-black">
                        Cerrar
                    </button>
                </div>
            </div>
        </section>
    )
}
