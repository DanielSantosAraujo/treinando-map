import carros from '../../mocks/listaCarros'
import './style.css'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (

        <div className='mopa'>

            {carros.map(
                (carro) => {
                    return (

                        <div className="card-carro">

                            <div className="img-car">
                                <img src={carro.foto} alt={carro.modelo} />
                            </div>
                            <div className="detalhes">
                                <div className="info gap-[5px]">
                                    <p className='font-bold'>Modelo:</p>
                                    <h3>{carro.modelo}</h3>
                                </div>
                                <div className="info gap-[5px]">
                                    <p className='font-bold'>Marca:</p>
                                    <p>{carro.marca}</p>
                                </div>
                                <div className="info gap-[5px]">
                                    <p className='font-bold '>Categoria:</p>
                                    <p>{carro.categoria}</p>
                                </div>
                                <div className="info gap-[5px]">
                                    <p className='font-bold'>Ano:</p>
                                    <p>{carro.ano}</p>
                                </div>
                                <div className="info gap-[5px]">
                                    <p className='font-bold'>Diária:</p>
                                    <p>R$</p>
                                    <p>{carro.diaria.toFixed(2)}</p>
                                </div>
                                <Link to={`/carro/${carro.id}`}>
                                    <button>Alugar</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    )
}