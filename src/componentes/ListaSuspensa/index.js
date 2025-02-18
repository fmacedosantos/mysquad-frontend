import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

    const aoSelecionado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
                value={props.valor}
                onChange={aoSelecionado}
                required={props.obrigatorio}
            >
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
                
            </select>
        </div>
    )
}

export default ListaSuspensa;