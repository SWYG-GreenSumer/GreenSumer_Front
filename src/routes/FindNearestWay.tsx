import { FunctionComponent } from 'react';
import StoreDrawer from '../components/KakaoMap/StoreDrawer';
import KakaoMap from '../components/KakaoMap/KakaoMap';

type FindNearestWayProps = {};

const FindNearestWay: FunctionComponent<FindNearestWayProps> = () => {
  const data = [
    {
      content: <div style={{ color: '#000' }}>강남역</div>,
      latlng: { lat: 37.498095, lng: 127.02761 },
    },
    {
      content: <div style={{ color: '#000' }}>서울시청</div>,
      latlng: { lat: 37.541, lng: 126.986 },
    },
    {
      content: <div style={{ color: '#000' }}>역삼역</div>,
      latlng: { lat: 37.503325874722, lng: 127.04403462366 },
    },
    {
      content: <div style={{ color: '#000' }}>선릉역</div>,
      latlng: { lat: 37.503085510654, lng: 127.048359211 },
    },
  ];
  return (
    <div>
      <KakaoMap width={'100%'} height={'97vh'} />
      <StoreDrawer data={data} />
    </div>
  );
};

export default FindNearestWay;
