import { useParams } from 'react-router-dom'
import carros from '../../mocks/listaCarros';


export default function Carrinho() {
    const { id } = useParams();

    const carro = carros.find(carro => carro.id === Number(id))
    return (
        <div className=' h-[100vh] flex  w-[100vw] '>
            <div className='w-[50vw] h-[50vh] flex items-center justify-center'>
                <img src={carro.foto} alt={carro.modelo} className=' '/>
            </div>
            <div className='h-[50vh] w-[50vw]'>
                <div className="">
                    <p className='font-bold text-3xl h-[80px] w-[500px] flex items-center justify-center'>Detalhes do veículo</p>
                </div>
                <div className='h-[40vh] w-[50vw] pt-[10px]'>
                    <div className='flex p-[6px] gap-[5px]'>
                        <p className='font-bold text-xl'>Modelo:</p>
                        <p className='text-[20px]'>{carro.modelo}</p>
                    </div>
                    <div className='flex p-[2px] gap-[5px]'>
                        <p className='font-bold text-xl'>Marca:</p>
                        <p className='text-[20px]'>{carro.marca}</p>
                    </div>
                    <div className='flex p-[px] gap-[5px]'>
                        <p className='font-bold text-xl'>Categoria:</p>
                        <p className='text-[20px]'>{carro.categoria}</p>
                    </div>
                    <div className='flex p-[2px] gap-[5px]'>
                        <p className='font-bold text-xl'>Ano:</p>
                        <p className='text-[20px]'>{carro.ano}</p>
                    </div>
                    <div className='flex p-[2px] gap-[5px]'>
                        <p className='font-bold text-xl'>Diária:</p>
                        <p className='text-[20px]'>{carro.diaria}</p>
                    </div>
                </div>

                <div className='flex gap-[10px]'>
                    <input type="text" placeholder='Diárias' className='bg-gray-300 w-[500px] h-[50px] rounded-[10px] pl-[10px] placeholder-gray-700' />
                    <div>
                    <div>
                <button className='bg-green-400 h-[50px] w-[150px] rounded-[10px]'>Calcular</button>
                    </div>
                    </div>
                </div>

            </div>



        </div>
    )
}