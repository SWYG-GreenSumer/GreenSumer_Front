import React, { FunctionComponent, ReactNode, RefObject, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import StoreDrawer from './StoreDrawer';

type KakaoMapProps = {
  width: string;
  height: string;
  children: ReactNode;

};

const KakaoMap: FunctionComponent<KakaoMapProps> = ({ width, height }) => {
  const [lat, setLat] = React.useState<number>(33.55635);
  const [lng, setLng] = React.useState<number>(126.795841);
  const mapRef = useRef<HTMLDivElement>(null);
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

        // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다.
        let locPosition = new window.kakao.maps.LatLng(lat, lng);
        // 인포윈도우에 표시될 내용입니다
        let message = '<div style="padding:5px;">현위치</div>';

        // 마커와 인포윈도우를 표시합니다.
        displayMarker(locPosition, message);
      });
    }
  }, []);

  useEffect(() => {
    const container = mapRef.current;
    let options = {
      center: new window.kakao.maps.LatLng(lat, lng),
      level: 5,
    };

    let map = new window.kakao.maps.Map(container, options);
  }, [lat, lng]);

  return (
    <div
      id='map'
      className={`w-[${width}] h-[93.2vh] sm:h-[${height}] relative`}
      ref={mapRef}>      
    </div>
  );
};

export default KakaoMap;
