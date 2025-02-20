import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ colaboradores, cor, nome, aoDeletar, mudarCor, id }) => {
    return (
        (colaboradores.length > 0) && <section className='time' style={{
            backgroundColor: hexToRgba(cor, '0.4')
        }}>
            <input value={cor} type='color' className='input-cor' onChange={evento => mudarCor(id, evento.target.value)}/>
            <h3 style={{
                borderColor: cor
            }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => 
                    <Colaborador 
                        key={id}
                        id={colaborador.id}
                        corFundo={cor}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        aoDeletar={aoDeletar}
                    />
                )}
            </div>
        </section>
    )
}

export default Time;