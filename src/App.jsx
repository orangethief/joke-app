import {createBrowserRouter,
createRoutesFromElements,
Route,
RouterProvider,
} from 'react-router-dom';

import About from './components/About';
import MainLayout from './MainLayout';
import Joke from './components/Joke';
import Contact from './components/Contact';


import './index.css'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Joke />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>,
    ),
  );
   
  
  return <RouterProvider router={router} />;
  
}

export default App
