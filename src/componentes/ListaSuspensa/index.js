import './ListaSuspensa.css';

const ListaSuspensa = ({ aoAlterado, label, valor, obrigatorio, itens }) => {

    const aoSelecionado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select 
                value={valor}
                onChange={aoSelecionado}
                required={obrigatorio}
            >
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
                
            </select>
        </div>
    )
}

export default ListaSuspensa;