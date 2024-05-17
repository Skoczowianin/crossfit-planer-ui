import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Template from './Template'
import MainLayout from './MainLayout';
import HomePage from './HomePage';
import Exercise from './Exercise';
import { setUp } from './LocalStorageSetup';

setUp();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='/template' element={<Template />} />
      <Route path='/exercise' element={<Exercise />} />
    </Route>
)
);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App

