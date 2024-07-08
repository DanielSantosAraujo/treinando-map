import { useParams } from 'react-router-dom'
import carros from '../../mocks/listaCarros';

export default function Carrinho() {
    const { id } = useParams();

    const carro = carros.find(carro => carro.id === Number(id))
    return (
        <div>
           <img src={carro.foto} alt={carro.modelo} />
            <p>{carro.modelo}</p>
        </div>
    )
}