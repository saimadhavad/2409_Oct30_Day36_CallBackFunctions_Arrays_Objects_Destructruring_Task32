import './App.css';
import CallBackArrayObject from './components/CallBackArrayObject';

function App() {

  // let calculateResult  = (teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks, passFn,failFn) => {

  //   let passMarks = 35;

  //   if (teluguMarks >= passMarks && hindiMarks >= passMarks &&
  //     englishMarks >= passMarks && mathsMarks >= passMarks &&
  //     scienceMarks >= passMarks && socialMarks >= passMarks)
  //   {
  //     passFn();
  //     // console.log("Student Passed in tenth");
  //   }
  //   else  {
  //     failFn();
  //     // console.log("Student Failed in tenth");
  //   }
    
  // };

  // // CALLBACK FUNCTIONS
  // calculateResult(68,57,69,45,54,43, 
  //   ()=> {console.log("Student Passed in tenth");}, 
  //   ()=>{console.log("Student Failed in tenth");} );

  return (
    <div className="App">
      <h1>Callback Functions, Arrays & Objects</h1>
      <CallBackArrayObject></CallBackArrayObject>
    </div>
  );
}

export default App;
