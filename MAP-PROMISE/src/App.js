import logo from './logo.svg';
import ItemListContainer from './components/ItemListContainer';
import Boostrap from './components/Boostrap';
import ItemList from './components/ItemList';
function App() {
  const user = {
    nombre: "Yair",
    edad: 21,
    usuario: "ZarpDevX"
  };

  return (
    <div>
      <Boostrap />
      <ItemListContainer
        nombre={user.nombre}
        edad={user.edad}
        usuario={user.usuario}
      />

    </div>
  );
}

export default App;
