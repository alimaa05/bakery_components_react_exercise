
import './App.css';
// import the js files
import Cakes from './components/Cake';
import Title from './components/Title';
import NavBar from './components/NavBar';
import RecipeForm from './components/RecipeForm';

function App() {
  return (
    <>
    <Title/>
    <NavBar/>
    <RecipeForm/>
    <Cakes/>
    
    </>
  );
}

export default App;
