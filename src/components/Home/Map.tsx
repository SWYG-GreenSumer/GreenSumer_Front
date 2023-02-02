import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoMap from '../KakaoMap/KakaoMap';

interface MapProps {}



const Map: FunctionComponent<MapProps> = () => {
  const navigate = useNavigate();
  return (
    <div className='h-[37rem] lg:h-full'>
      <div className='card shadow-xl h-full'>
        <KakaoMap width='100%' height='32rem' />
        <div className='card-body cursor-pointer'>
          <div className='pointer' onClick={() => navigate('/findNearestWay')}>
            가까운 매장 길 찾기 {'>>'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
