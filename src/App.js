import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    },
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const mudarCorTime = (id, cor) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time;
    }))
  }

  return (
    <div>
      <Banner />
      <Formulario 
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => 
          aoNovoColaboradorAdicionado(colaborador
        )}
      />
      {times.map(time => 
        <Time 
          key={time.id} 
          nome={time.nome} 
          cor={time.cor} 
          colaboradores={colaboradores.filter(colaborador => 
            colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorTime}
          id={time.id}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
