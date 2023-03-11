import './App.css'
import 'bulma/css/bulma.min.css'
import Navbar from './components/Navbar'
import Button from "./components/Button";
import Cartwidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const greeting = [
    'Primer Pre-entrega.', <br/>, 'Se complicó mas de lo que esperaba la implementación de Bulma, ya que no encontré el modo de modificar los parametros que trae por default. Se verá el tema en el After'
  ];

  return (
    <main>
      <section id='home'>
      <Navbar>
        <Cartwidget/>
      </Navbar>
      <ItemListContainer greeting= {greeting}/>
      </section>
      <section id='categories'></section>
      <section id= 'offers'></section>
      <section id='history'></section>
    </main>
  )
}

export default App
