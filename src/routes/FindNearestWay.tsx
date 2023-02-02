import React, { FunctionComponent, useEffect,useState, useRef } from 'react';
import StoreDrawer from '../components/KakaoMap/StoreDrawer';
import { MapMarker, Map, useMap } from 'react-kakao-maps-sdk';
import KakaoMap from '../components/KakaoMap/KakaoMap';

type FindNearestWayProps = {};

const FindNearestWay: FunctionComponent<FindNearestWayProps> = () => {
  const [lat, setLat] = React.useState<number>(33.55635);
  const [lng, setLng] = React.useState<number>(126.795841);  

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
        // displayMarker(locPosition, message);
      });
    }
  }, []);

  const EventMarkerContainer = ({ position, content }: any) => {
    const map = useMap()
    const [isVisible, setIsVisible] = useState(false)

    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    )
  }


  return (
    <div>
      <KakaoMap width={'100%'} height={'100%'} />
      {/* <StoreDrawer data={data} /> */}
    </div>
  );
};

export default FindNearestWay;
