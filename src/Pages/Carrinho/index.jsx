import { useParams, Link } from 'react-router-dom'
import carros from '../../mocks/listaCarros';
import { useState } from 'react';


export default function Carrinho() {
    const { id } = useParams();

    const [valorTotal, setValorTotal] = useState(0)
    const [totalDias, setTotalDias] = useState(0)

    const carro = carros.find(carro => carro.id === Number(id))
    const listaCarros = carros.filter((carros) => carros.id !== Number(id))

    function navigate(){
        setValorTotal(0)
        setTotalDias(0)
    }
    function calcula(){
        const valor = parseFloat(carro.diaria) * parseFloat(Math.ceil(totalDias))
        setValorTotal(valor)
    }

    return (
        <div className=' h-[100vh] flex  w-[100vw] flex-col gap-3 '>
            <div className="flex gap-10">
                <div className='h-[60vh] w-[40vw] flex items-center justify-center'>
                    <img src={carro.foto} alt={carro.modelo} className=' ' />
                </div>
                <div className='h-[60vh] w-[60vw]'>
                    <div className="flex items-end justify-center">
                        <p className='font-bold text-3xl h-[50px] w-[500px] mt-2  flex items-center justify-center'>Detalhes do veículo</p>
                    </div>
                    <div className='h-[40vh] w-[50vw] pt-[5px]'>
                        <div className='flex p-[2px] gap-[5px]'>
                            <p className='font-bold text-xl'>Modelo:</p>
                            <p className='text-[20px]'>{carro.modelo}</p>
                        </div>
                        <div className='flex p-[2px] gap-[5px]'>
                            <p className='font-bold text-xl'>Marca:</p>
                            <p className='text-[20px]'>{carro.marca}</p>
                        </div>
                        <div className='flex p-[2px] gap-[5px]'>
                            <p className='font-bold text-xl'>Categoria:</p>
                            <p className='text-[20px]'>{carro.categoria}</p>
                        </div>
                        <div className='flex p-[2px] gap-[5px]'>
                            <p className='font-bold text-xl'>Ano:</p>
                            <p className='text-[20px]'>{carro.ano}</p>
                        </div>
                        <div className='flex p-[2px] gap-[5px] pb-4'>
                            <p className='font-bold text-xl'>Diária:</p>
                            <p className='text-[20px]'>{carro.diaria}</p>
                        </div>

                        <div className='flex gap-[10px] pr-2'>
                            <input
                            
                            onChange={(valor) => setTotalDias(valor.target.value)}
                            type="text" placeholder='Diárias' className='bg-gray-300 w-[500px] h-[50px] rounded-[10px] pl-[10px] placeholder-gray-700' />
                            <div>
                                <div>
                                    <button
                                        onClick={calcula}
                                    className='bg-green-400 h-[50px] w-[200px] rounded-[10px] '>Calcular</button>
                                </div>
                            </div>
                        </div>

                        <div className='bg-green-400 h-10 w-28 mt-4 rounded-lg flex items-center pl-2 gap-2'>
                            <p>R$</p>
                            <p>{valorTotal}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center w-[100vw] h-[40vh]  gap-6'>
                {listaCarros.map(
                    (carroInfo) => {
                        return (
                            <div className='flex w-[30%] gap-3 hover:scale-110'>
                                <div className='flex'>
                                    <img src={carroInfo.foto} alt={carroInfo.modelo} className='h-[180px] w-[250px]' />
                                </div>
                                <div className='mt-2'>
                                    <h3 className='font-bold'>{carroInfo.modelo}</h3>
                                    <div className='flex flex-col gap-20'>
                                        <div className='flex gap-1'>
                                            <p className='font-bold'>R$</p>
                                            <p>{carroInfo.diaria.toFixed(2)}</p>
                                        </div>
                                        <div className='flex'>
                                            <Link to={`/carro/${carroInfo.id}`}>
                                                <button
                                                className='bg-orange-600 w-[150px] h-[50px] rounded-md'>Alugar</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        )
                    }
                )}
            </div>
        </div>
    )
}