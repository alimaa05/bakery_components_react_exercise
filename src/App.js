
import './App.css';
// import the js files
import Cakes from './components/Cake';
import Title from './components/Title';
import Search from './components/Search';
import NavBar from './components/NavBar';
import RecipeForm from './components/RecipeForm';

function App() {
  return (
    <>
    <Title/>
    <NavBar/>
    <Search/>
    <RecipeForm/>
    <Cakes/>
    
    </>
  );
}

export default App;
