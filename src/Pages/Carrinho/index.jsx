import { useParams } from 'react-router-dom'
import carros from '../../mocks/listaCarros';


export default function Carrinho() {
    const { id } = useParams();

    const carro = carros.find(carro => carro.id === Number(id))
    return (
        <div className=' h-[100vh] flex flex-row w-[100vw]'>
            <div className='h-[60vh] w-[50vw] flex items-center justify-center'>
                <img src={carro.foto} alt={carro.modelo} />
            </div>
            <div className='h-[50vh] w-[50vw]'>
                <div className="">
                    <p className='font-bold text-3xl h-[80px] w-[500px] flex items-center justify-center'>Detalhe do veiculo</p>
                </div>
                <div className='h-[40vh] w-[50vw]'>
                    <div className='flex gap-[5px]'>
                        <p className='font-bold text-xl'>Modelo:</p>
                        <p className='text-[20px]'>{carro.modelo}</p>
                    </div>
                    <div className='flex gap-[5px]'>
                        <p className='font-bold text-xl'>Marca:</p>
                        <p className='text-[20px]'>{carro.marca}</p>
                    </div>
                    <div className='flex gap-[5px]'>
                        <p className='font-bold text-xl'>Categoria:</p>
                        <p className='text-[20px]'>{carro.categoria}</p>
                    </div>
                    <div className='flex gap-[5px]'>
                        <p className='font-bold text-xl'>Ano:</p>
                        <p className='text-[20px]'>{carro.ano}</p>
                    </div>
                    <div className='flex gap-[5px]'>
                        <p className='font-bold text-xl'>Diária:</p>
                        <p className='text-[20px]'>{carro.diaria}</p>
                    </div>
                </div>

                <div className='gap-10'>
                <input type="text" placeholder='Diarias' className='bg-black w-[500px] h-[50px] rounded-[10px]'/>
                <button className='bg-green-400 h-[50px] w-[150px] rounded-[10px]'>Calcular</button>
            </div>

            </div>

            

        </div>
    )
}