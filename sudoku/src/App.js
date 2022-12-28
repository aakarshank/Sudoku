import './App.css';
import { getSudoku } from 'sudoku-gen';
const sudoku = getSudoku('easy')
function App() {
  let sudokuAnswers = sudoku.solution;
  let sudokuUsersAnswers = sudoku.puzzle;
  return (
    <div className="App">
      <h1>Sudoku!</h1>
      <h1 id="Completed"></h1>
      <div className="sudoku-grid">
        {console.log(sudokuAnswers)}
        {Array.from({ length: 81 }, (_,index) => <div className="row" value ={`row${index+1}`}>
          {sudoku.puzzle[index]=='-'?<input type="text" id={`${index+1}`} maxLength="1" onKeyPress={(i)=>{
            if (isNaN(i.nativeEvent.key) || i.nativeEvent.key=='0'){
              i.preventDefault()
            }
            else {
              let sudokuUsersAnswersCopy = sudokuUsersAnswers.split('')
              sudokuUsersAnswersCopy[index] = i.nativeEvent.key;
              sudokuUsersAnswers = sudokuUsersAnswersCopy.join('');
              if (!isNaN(sudokuUsersAnswers)){
                if (sudokuUsersAnswers==sudokuAnswers){
                  document.getElementById('Completed').innerHTML = 'board completed!'
                }
              }
            }
            }
            } style = {{outline:'none',backgroundColor:'transparent',border:'none',}}></input>:(<h1>{sudoku.puzzle[index]}</h1>)}</div>)}
      </div>
    </div>
  )
}

export default App;
