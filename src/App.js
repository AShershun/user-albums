import './App.css';
import {Routes, Route} from 'react-router-dom';

import Layout from './components/Layout';
import UsersPage from './pages/UsersPage';
import UserAlbumsPage from './pages/UserAlbumsPage';
import AlbumPhotosPage from './pages/AlbumPhotosPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<UsersPage />} />
            <Route path='/user/:userId' element={<UserAlbumsPage />} />
            <Route path='/album/:albumId' element={<AlbumPhotosPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Route>
    </Routes>
  );
}

export default App;
