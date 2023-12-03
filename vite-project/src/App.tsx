import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Header';
import ErrorPage from './ErrorPage';
import ControllerForm, { IFormInput } from './ControllerForm';
import UncontrollForm from './UncontrollForm';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
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
  return <RouterProvider router={router} />;
}

export default App;
