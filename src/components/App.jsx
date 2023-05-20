import "../css/App.css";
import Header from "./Header";
import Movie from "./Movie";
import data from '../data.json'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
      {
        data.map((elements)=>{
          return(
          <Movie 
            title= {elements.Title}
            image = {elements.Poster}
            year = {elements.Year}
          />
          );

      }
      )}
       
      </div>
    </div>
  );
}

export default App;
