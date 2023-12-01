import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css'
import Header from './Header';
import ErrorPage from './ErrorPage';
import ControllerForm from './ControllerForm';
import UncontrollForm from './UncontrollForm';

const router = createBrowserRouter([
  {
      path: '/',
      element: <Header/>,
      errorElement: <ErrorPage />,
  },
  {
    path: 'controller/form_1',
    element: <ControllerForm />,
},
{
  path: 'uncontroller/form_2',
  element: <UncontrollForm />,
},
]);
function App() {
 

  return (
    <RouterProvider router={router} />
  )
}

export default App
