import { useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";


function App() {
  
  const [Cart, SetCart] = useState([]);

 

  return (
    <div className="App">
      <Navbar count={Cart.length}/>
      <div className="content">
        <Product Cart={Cart} SetCart={SetCart}/>
      </div>  
    </div>
  );
}

export default App;
