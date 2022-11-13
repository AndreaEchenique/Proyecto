
import './App.css';
import homeimage from './img/estu.jpg';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <h1 className="linkcurso"style={{
        borderRadius:"4px",
        textAlign: "left",
        padding: 10,

       
      }}>
        Cursos
      </h1>
       <img src={homeimage} alt="imagen" style={{
        borderRadius:"10px",
        textAlign: "center",
        width: "900px",
        height:"300px"
      }} />
        <h1 className="title">
  BIENVENIDOS A EDU Global 
</h1>
<h1 className="info" >
 Aprende de expertos en areas de mayor demanda laboral
</h1>
   
      <h2 className="cursoshome" style={{
        borderRadius:"4px",
        textAlign: "left",
        width: "900px",
        height:"300px"
      }}>
        Cursos mas vistos
      </h2>

      <div>
      <div class="row">
      <button className="btn-marketing">Marketing</button>
      <h1 className="info" >
      
 Aprende de expertos en areas de mayor demanda laboral
</h1>
</div>
<div class="row">
      <button className="btn-programacion">Programación</button>
      <h1 className="info" >
 Aprende de expertos en areas de mayor demanda laboral
</h1>
</div>
<div class="row">
      
      <button className="btn-negocios">Negocios</button>
      <h1 className="info" >
 Aprende de expertos en areas de mayor demanda laboral
</h1>
</div>
    
      </div>
      
      </header>
    </div>
  );
}

export default App;
