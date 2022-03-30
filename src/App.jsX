import {useState} from "react";

function App() {
  //hooks
  const [inputState, setInputState]= useState({
    titulo: "",
    fecha: "",
    nota: "",
  });

  const handleInputChange = (event) => {
    setInputState({
     titulo: event.target.value,
     fecha: "",
     nota: "",
    }); 
    });


  return (
    <div className="App">
        <h3>notas</h3>  
        <label htmlfor="titulo">titulo</label>
         <input 
         id="titulo" 
         name="titulo" 
         type="text"
         onchangen= {handlechangePrueba} />
         value={tituloState}
         />
         <br></br>
         <label htmlfor = "fecha">fecha</label>
         <input 
         id="fecha" 
         name="fecha" 
         type="text"
         onchangen= {handlechangetitulo} />
         value={fechaState}
         />
         <br></br>
         <label htmlfor = "fecha">fecha</label>
         <input 
         id="nota" 
         name="nota" 
         type="text"
         onchangen= {handlechangetitulo} />
         value={notaState}
         />

    </div>
  );
}

export default App;
