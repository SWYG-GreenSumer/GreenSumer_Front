import React, { FunctionComponent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MapMarker, Map, useMap } from 'react-kakao-maps-sdk';
import { storeDataJSON } from '../../../public/json/storeDataJSON';
import EventMarker from './EventMarker';

type KakaoMapProps = {
  width: string;
  height: string;
  lat: number;
  lng: number;
};

const KakaoMap: FunctionComponent<KakaoMapProps> = ({
  width,
  height,
  lat,
  lng,
}) => {
  const location = useLocation();

  const EventMarkerContainer = ({ position, content }: any) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);

    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}>
        {isVisible && content}
      </MapMarker>
    );
  };

  return (
    <div>
      <Map
        center={{ lat: lat, lng: lng }}
        style={
          location.pathname === '/'
            ? {
                width: width,
                height: height,
                borderRadius: 'var(--rounded-box, 1rem)',
              }
            : { width: width, height: height }
        }>
        {storeDataJSON.map((value) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${value.lat}-${value.lng}`}
            position={{ lat: value.lat, lng: value.lng }}
            content={<EventMarker storeName={value.storeName} />}
          />
        ))}
      </Map>
    </div>
  );
};

export default KakaoMap;
