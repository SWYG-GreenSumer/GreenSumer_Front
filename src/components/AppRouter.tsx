import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Login from '../routes/Login';
import NotFound from '../routes/NotFound';
import SignUp from '../routes/SignUp';
import FindIDandPW from '../routes/FindIDandPW';
import MyPage from '../routes/MyPage';
import ReviewBoard from '../routes/ReviewBoard';
import PostReview from '../routes/PostReview';

const AppRouter = () => {
  return (
    <div className='max-h-full min-h-[70vh] mb-10 mt-10 m-auto w-4/5 flex flex-col justify-center'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/findIDandPW' element={<FindIDandPW />}></Route>
        <Route path='/myPage' element={<MyPage />}></Route>
        <Route path='/reviewBoard' element={<ReviewBoard />}></Route>
        <Route path='/postReview' element={<PostReview />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
