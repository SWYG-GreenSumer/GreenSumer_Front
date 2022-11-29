import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Login from '../routes/Login';
import NotFound from '../routes/NotFound';
import SignUp from '../routes/SignUp';
import FindIDandPW from '../routes/FindIDandPW';
import MyPage from '../routes/MyPage';


const AppRouter = () => {
  return (
    <div className='flex-col min-w-full max-w-4xl px-4 h-full'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/findIDandPW' element={<FindIDandPW />}></Route>
        <Route path='/myPage' element={<MyPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
