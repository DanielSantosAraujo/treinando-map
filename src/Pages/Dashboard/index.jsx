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
                                <div className="info">
                                    <p>Modelo:</p>
                                    <h3>{carro.modelo}</h3>
                                </div>
                                <div className="info">
                                    <p>Marca:</p>
                                    <p>{carro.marca}</p>
                                </div>
                                <div className="info">
                                    <p>Categoria:</p>
                                    <p>{carro.categoria}</p>
                                </div>
                                <div className="info">
                                    <p>Ano:</p>
                                    <p>{carro.ano}</p>
                                </div>
                                <div className="info">
                                    <p>Diária:</p>
                                    <p>{carro.diaria}</p>
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