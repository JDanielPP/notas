import { useState } from "react";

function App() {
  //todo: presentar el concepto de "state"
  
  //hooks
 const [inputState, setInputState] = useState({
   titulo:"",
   fecha:"",
   nota:"",
 });//valor inicial del state

 const inicialState = JSON.parse(localStorage.getItem ("notas")) || [];
 const [notas, setNotas] = useState(inicialState);
 
  const handleInputChange = (event) => {
    //console.log(event.target.);
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };
  const handleClickBorrar= () => {
    setInputState({
      ...inputState,
    titulo: "", 
    fecha: "", 
    nota: "" });

};
 
const handleClickGuardar = () => {
  setNotas([...notas, inputState]);
  localStorage.setItem("notas", JSON.stringify([...notas, inputState]));
  handleClickBorrar();
  };
  
  const handleBorrarNota = (index) => {
    const nuevoArreglo = [];

    notas.forEach((nota,i) => {
      if (index !== i) {
        nuevoArreglo.push(nota);
      }
    });

    localStorage.setItem("notas", JSON.stringify(nuevoArreglo));
    setNotas([...nuevoArreglo]);
  };
  const handleClickLimpiarLista = () => {
    setNotas([])
    localStorage.setItem("notas", JSON.stringify([]));
  };

  const handleClickNota = (index) => {
     setInputState({...notas[index]});
  };
   return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <h3>Lista</h3>
          {notas.length === 0 ? (
            "Al momento no tienes notas guardadas. Puedes crear una en el formulario"
            ) : (
              <ol>
                {notas.map((item, index) => {
                  return(
                    <li key ={index} onClick={()=> 
                    handleClickNota(index)}>
                      {item.titulo} ({item.fecha}) {item.nota}&nbsp;

                      <i className="bi-x-circle-fill" 
                      onClick={() => handleBorrarNota (index)}
                      style={{
                      color:"red", 
                      fontSize:"0.75rem", 
                      cursor:"pointer",}}></i>
                    </li>
                  )
                })}
              </ol>
            )}
           <button
           type="button"
           className="btn btn-primary"
           onClick={handleClickLimpiarLista}
           disabled ={notas.length === 0}
         >

           Limpiar lista
         </button>
        </div>
        <div className="col">
         <h3>Notas</h3><br></br>
         <label className="mb-2"  style={{width: "100%"}}>
          Titulo
         <input 
           id="titulo" 
           name="titulo" 
           type="text "
           onChange={handleInputChange}
           value={inputState.titulo}
           style={{width: "100%"}}
           />

          
           </label>
           <br/>
           <label className="mb-2" style={{width: "100%"}}>
            Fecha 
            <input 
            id="fecha" 
            name="fecha" 
            type="date"
            onChange={handleInputChange}
            value={inputState.fecha}
            style={{width: "100%"}}
            />
            </label>
            <br/>
            <label className="bm-2" style={{width: "100%"}}>
             Nota 
             <textarea 
             id="nota" 
             name="nota" 
             onChange={handleInputChange}
             value={inputState.nota}
             style={{width: "100%"}}
             />
            </label>
            <hr></hr>
      <div className="ms-2 me-2 mt-2 row">


      <div className="col">
        <span className="row me-1">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClickBorrar}
            disabled={
              inputState.titulo===""||
              inputState.fecha===""||
              inputState.nota===""
              }
          >

            Borrar
          </button>
          </span>
        </div>

        <div className="col">
          <span className="row ms-1">
          
          <button 
            type="button"
            className="btn btn-primary"
            onClick={handleClickGuardar}
            disabled={
              inputState.titulo===""||
              inputState.fecha===""||
              inputState.nota===""
            }>
            Guardar
          </button> 
          </span>

            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;