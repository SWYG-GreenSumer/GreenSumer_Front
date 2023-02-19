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
        <StoreDrawer  />
      ) : (
        <ItemsDrawer setLat={setLat} setLng={setLng} />
      )}
    </div>
  );
};

export default FindNearestWay;
