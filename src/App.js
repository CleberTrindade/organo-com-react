import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      codSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      codSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      codSecundaria: '#FOF8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      codSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      codSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      codSecundaria: '#FFF5D9'
    },
    {
      nome: 'Invovação de Gestão',
      corPrimaria: '#FF8A29',
      codSecundaria: '#FFEEDF'
    }    
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />   
      <Formulario 
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={aoNovoColaboradorCadastrado}
      /> 
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.codSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}
    </div>
  );
}

export default App;
