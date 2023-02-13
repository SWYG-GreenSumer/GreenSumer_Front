import React, { FunctionComponent } from 'react';
import { storeDataJSON } from '../../../public/json/storeDataJSON';

type dataArrayProps = {
  content: JSX.Element;
  latlng: {
    lat: number;
    lng: number;
  };
};

type StoreDrawerProps = {
  data: dataArrayProps[];
};

const StoreDrawer: FunctionComponent<StoreDrawerProps> = ({ data }) => {
  return (
    <div className='absolute right-0 top-0 z-[1]'>
      <div className='drawer drawer-mobile'>        
        <div className='drawer-side'>
          <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 bg-base-100 text-base-content'>
            {/* <!-- Sidebar content here --> */}
            {data.map(
              (
                e: {
                  content: any;
                },
                index: React.Key | null | undefined
              ) => {
                console.log(e);
                return (
                  <li key={index}>
                    <a className='text-black'>{e.content.props.children}</a>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StoreDrawer;
