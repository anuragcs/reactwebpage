import './styles/stylecount.css';



function App() {
let number = 100;
const appname = "🌜OUNTER  🅰️PP";

const increase =()=>{
  alert('increase');
}

const decrease=()=>{
  alert('decrease');
}



//es6 way
// const click = () =>{
//   alert('Hello you clicked me');
// };

//es5 way
// function count(){
//   alert('Hello you clicked me');
// }

// const count = () =>{
//      alert('Hello you clicked me');
//      };

// var count = 0;
  return (
    <div class="container">
     <center><h1 class="h1" onClick={()=>{
      alert('Hello you clicked on heading')
     }}>{appname}🙌</h1></center>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFCA03',
      marginBlock: '10px',
      padding: '5px',
      borderRadius: '30px'}}>
      <h2 ><span>Count -</span></h2>
      <h2 ><span>{number}</span></h2>
    </div>
    <div> 
      <button  onClick={decrease} >➖</button>
      <button  onClick={increase}>➕</button>
      </div>
    </div>
  );
}

export default App;
