import React, { FunctionComponent } from 'react';

interface MapProps {}

const Map: FunctionComponent<MapProps> = () => {
  return (
    <div className='h-fit lg:h-[32rem]'>
      <div className='card shadow-xl h-full'>
        <figure>
          <img className='lg:h-[30rem]' src='public\img\지도 사진.png' alt='지도 사진' />
        </figure>
        <div className='card-body'>
          <div className='pointer'>가까운 매장 길 찾기 {'>>'}</div>
        </div>
      </div>
    </div>
  );
};

export default Map;
