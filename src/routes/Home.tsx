import React, { FunctionComponent } from 'react';
import Map from '../components/Home/Map';
import ReviewBoard from '../components/Home/ReviewBoard/ReviewBoard';
import MBTILink from '../components/Home/MBTILink';

type HomeProps = {};

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <div className='flex flex-col w-full lg:flex-row'>
        <div className='h-fit lg:w-1/2 card rounded-box'>
          <Map />          
        </div>
        <div className='divider lg:divider-horizontal' />
        <div className='h-[32rem] lg:w-1/2 justify-between card rounded-box'>
          <MBTILink />
          <ReviewBoard />
        </div>
      </div>
    </div>
  );
};

export default Home;
