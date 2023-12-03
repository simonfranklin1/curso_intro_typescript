import './App.css'
import Context from './components/Context';
import Destructuring, {Category} from './components/Destructuring';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import State from './components/State';

function App() {
  //1 - variáveis
    const name: string =  "Simon";
    const surname: string = "Franklin";
    const age: number = 20;
    const isWorking: boolean = false;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}, boa tarde!`;
  }

  // 9 - types
  type textOrNull = string | null;
  let myText: textOrNull = null;
  myText = "Não esta mais nulo"

  //type fixed = "Isso" | "Ou" | "Aquilo";
  //let myText2: fixed = "Isso";

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <p>O meu nome é {name} {surname}</p>
      <p>tenho {age} anos de idade</p>
      {isWorking && (
      <div>
        <p>Sou programador</p>
      </div>
      )}
      <h3>{userGreeting(name)}</h3>

      {/* 4 - importação de componente */}
      <FirstComponent />
      
      {/* 5 - desestruturando props */}
      <SecondComponent name='Segundo' />
      <Destructuring title='Primeiro post' content='Algum comentário' commentsQty={5} tags={['typescript', 'javascript', 'react']} category={Category.TS} />
      
      {/* 6 - useState */}
      <State />
      {myText && <p>Tem texto na variável</p>}

      {/*11 - context api */}
      <Context />
    </div>
  )
}

export default App