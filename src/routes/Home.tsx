import React, { FunctionComponent } from 'react';
import Map from '../components/Home/Map';
import { useNavigate } from 'react-router-dom';
import MBTILink from '../components/Home/MBTILink';
import ReviewList from '../components/ReviewBoard/ReviewList';

type HomeProps = {};

const Home: FunctionComponent<HomeProps> = () => {
    const navigate = useNavigate();

  const reviewBoardClickHandle = () => {
    navigate('/reviewBoard');
  };

  return (
    <div>
      <div className='flex flex-col w-full lg:flex-row'>
        <div className='h-[37rem] lg:w-1/2 card rounded-box'>
          <Map />
        </div>
        <div className='divider lg:divider-horizontal' />
        <div className=' h-full sm:h-[37rem] lg:w-1/2 justify-between card rounded-box'>
          <MBTILink />
          {/* <ReviewBoardPreview /> */}
          <div
            className='h-fit cursor-pointer'
            onClick={reviewBoardClickHandle}>
            <div className='card sm:card-side bg-base-100 shadow-xl h-full'>
              <div className='card-body'>
                <h2 className='card-title border-y-2 border-black p-1 w-full flex justify-center'>
                  후기 게시판
                </h2>
                <ReviewList />
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Home;
