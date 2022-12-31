import React, { FunctionComponent, useEffect,useState, useRef } from 'react';
import KakaoMap from '../components/KakaoMap/KakaoMap';
import StoreDrawer from '../components/KakaoMap/StoreDrawer';
import { MapMarker, Map, useMap } from 'react-kakao-maps-sdk';

type FindNearestWayProps = {};

const FindNearestWay: FunctionComponent<FindNearestWayProps> = () => {
  const [lat, setLat] = React.useState<number>(33.55635);
  const [lng, setLng] = React.useState<number>(126.795841);
  const mapRef = useRef<HTMLDivElement>(null);

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
      latlng: { lat: 	37.503085510654, lng: 127.048359211 },
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
      <Map
        center={{ lat: lat, lng: lng }}
        style={{ width: '100%', height: '70vh' }}>
        {data.map((value) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
            position={value.latlng}
            content={value.content}
          />
        ))}
      </Map>
      <StoreDrawer data={data} />
    </div>
  );
};

export default FindNearestWay;
