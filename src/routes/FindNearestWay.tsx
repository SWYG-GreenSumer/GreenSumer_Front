import React, { FunctionComponent, useEffect, useRef } from 'react';
import KakaoMap from '../components/KakaoMap/KakaoMap';
import StoreDrawer from '../components/KakaoMap/StoreDrawer';

type FindNearestWayProps = {};

const FindNearestWay: FunctionComponent<FindNearestWayProps> = () => {
  return (
    <div>
      <KakaoMap width='100%' height='80vh' />
    </div>
  );
};

export default FindNearestWay;
