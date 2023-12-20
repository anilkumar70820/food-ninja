import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllBlogs from './components/AllBlogs';
import Blogs from './components/blogsdetails/Blogs';
import Preloader from './components/common/Preloader';

function App() {
  return (
  <>
<Preloader/>
  <Routes>
    <Route path='/' element={<AllBlogs/>}/>
    <Route path='/blogs' element={<Blogs/>}/>
  </Routes>
  </>
  );
}

export default App;
