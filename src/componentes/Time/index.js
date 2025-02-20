import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({colaboradores, corPrimaria, corSecundaria, nome, aoDeletar}) => {
    return (
        (colaboradores.length > 0) && <section className='time' style={{
            backgroundColor: corSecundaria
        }}>
            <h3 style={{
                borderColor: corPrimaria
            }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => 
                    <Colaborador 
                        key={colaborador.nome}
                        corFundo={corPrimaria}
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