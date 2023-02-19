import React, { FunctionComponent } from 'react';

type EventMarkerProps = {
    storeName: string;
};

const EventMarker: FunctionComponent<
  EventMarkerProps
> = ({storeName}) => {
  return <div>{storeName}</div>;
};

export default EventMarker;
