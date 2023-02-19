import { FunctionComponent, useEffect, useState } from 'react';
import StoreDrawer from '../components/KakaoMap/StoreDrawer';
import KakaoMap from '../components/KakaoMap/KakaoMap';
import { useLocation } from 'react-router-dom';
import ItemsDrawer from '../components/KakaoMap/ItemsDrawer';

type FindNearestWayProps = {};

const FindNearestWay: FunctionComponent<FindNearestWayProps> = () => {
  const [lat, setLat] = useState<number>(37.498095);
  const [lng, setLng] = useState<number>(127.02761);

  const location = useLocation();
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

  
  useEffect(() => {
    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude; // 위도
        let lng = position.coords.longitude; // 경도

        setLat(lat);
        setLng(lng);
      });
    }
  }, []);
  
  return (
    <div>
      <KakaoMap width={'100%'} height={'97vh'} lat={lat} lng={lng} />
      {location.pathname === '/findNearestWay' ? (
        <StoreDrawer />
      ) : (
        <ItemsDrawer />
      )}
    </div>
  );
};

export default FindNearestWay;
