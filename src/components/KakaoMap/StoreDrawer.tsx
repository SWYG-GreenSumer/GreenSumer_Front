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

interface StoreData {
   id: number;
    storeName: string;
    category: string;
    address: string;
    phone: string;
    instagram: string;
    lat: number,
    lng: number,
    Images: number[];
}

const StoreDrawer: FunctionComponent<StoreDrawerProps> = ({ data }) => {
  return (
    <div className='absolute right-0 top-0 z-[1]'>
      <div className='drawer drawer-mobile'>        
        <div className='drawer-side'>
          <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 h-[100vh] flex-nowrap overflow-auto bg-base-100 text-base-content'>
            {/* <!-- Sidebar content here --> */}
            {storeDataJSON.map(
              (
                e: StoreData,
                index: React.Key
              ) => {                
                return (
                  <li className='shadow-md rounded mb-1' key={index}>
                    <a className='flex flex-col'>
                      <div className=''>
                        <img className='' src={`${e.Images[0]}`} alt="가게 이미지" />
                      </div>
                      <div className='flex relative flex-col h-[160px]'>
                        <p className='text-[18px]'>{e.storeName}</p>
                        <p className='whitespace-nowrap text-ellipsis overflow-hidden'>{e.address}</p>
                        <p>{e.phone}</p>
                        <p className='absolute bottom-0'>{e.category}</p>
                      </div>
                    </a>
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
