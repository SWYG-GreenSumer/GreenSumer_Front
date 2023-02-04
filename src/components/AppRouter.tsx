
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../routes/Home';
import Login from '../routes/Login';
import NotFound from '../routes/NotFound';
import SignUp from '../routes/SignUp';
import FindIDandPW from '../routes/FindIDandPW';
import MyPage from '../routes/MyPage';
import ReviewBoard from '../routes/ReviewBoard';
import PostReview from '../routes/PostReview';
import FindNearestWay from '../routes/FindNearestWay';
import ReviewDetail from '../routes/ReviewDetail';
import MBTI from '../routes/MBTI';

const AppRouter = () => {
  const location = useLocation();
  return (
    <>
      <Nav />
      <div
        className={`max-h-full min-h-[90vh] flex flex-col justify-center ${
          location.pathname.includes('findNearestWay')
            ? `m-0 w-full`
            : `mb-10 mt-10 m-auto w-4/5`
        }`}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/findIDandPW' element={<FindIDandPW />}></Route>
          <Route path='/myPage' element={<MyPage />}></Route>
          <Route path='/reviewBoard' element={<ReviewBoard />}></Route>
          <Route path='/postReview' element={<PostReview />}></Route>
          <Route path='/findNearestWay' element={<FindNearestWay />}></Route>
          <Route path='/reviewDetail/:id' element={<ReviewDetail />}></Route>
          <Route path='/mbti' element={<MBTI />}></Route>
          <Route path='/mbti/:id' element={<MBTI />}></Route>
          <Route path='/mbti/result' element={<MBTI />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
        {!location.pathname.includes('findNearestWay') && <Footer />}
    </>
  );
};

export default AppRouter;
