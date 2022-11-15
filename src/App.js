import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/Router/Router';
import 'react-day-picker/dist/style.css';

function App() {
  return (
    <div className='max-w-[1180px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
