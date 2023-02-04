import React, { FunctionComponent, useEffect,useState, useRef } from 'react';
import StoreDrawer from '../components/KakaoMap/StoreDrawer';
import { MapMarker, Map, useMap } from 'react-kakao-maps-sdk';
import KakaoMap from '../components/KakaoMap/KakaoMap';

type FindNearestWayProps = {};

const FindNearestWay: FunctionComponent<FindNearestWayProps> = () => {
  return (
    <div>
      <KakaoMap width={'100%'} height={'97vh'} />
      {/* <StoreDrawer data={data} /> */}
    </div>
  );
};

export default FindNearestWay;
