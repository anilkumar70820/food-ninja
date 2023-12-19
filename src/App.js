import './App.css';
import AllBlogs from './components/AllBlogs';
import Blogs from './components/Blogs';
import FoodNinjaFooter from './components/common/FoodNinjaFooter';
import FoodNinjaNav from './components/common/FoodNinjaNav';

function App() {
  return (
  <>
  <FoodNinjaNav/>
  <Blogs/>
  <FoodNinjaFooter/>
  <AllBlogs/>
  </>
  );
}

export default App;
