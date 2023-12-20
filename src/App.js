import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllBlogs from './components/AllBlogs';
import Blogs from './components/blogsdetails/Blogs';
import Preloader from './components/common/Preloader';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
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
