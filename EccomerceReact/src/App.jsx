import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";

function App() {
  let saludo = "Bienvenido Nicolass";

  return (
    <div>
      <Navbar />
      <Home />
      <Login />
      <ItemListContainer saludo={saludo} edad={21} />
    </div>
  );
}

export default App;
