import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { storeDataJSON } from '../../../public/json/storeDataJSON';

type StoreDrawerProps = {};

interface StoreData {
  id: number;
  storeName: string;
  category: string;
  address: string;
  phone: string;
  instagram: string;
  lat: number;
  lng: number;
  Images: number[];
}

const StoreDrawer: FunctionComponent<StoreDrawerProps> = ({}) => {
  return (
    <div className="absolute right-0 top-0 z-[1]">
      <div className="drawer drawer-mobile">
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-[100vh] flex-nowrap overflow-auto bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {storeDataJSON.map((e: StoreData, index: React.Key) => {
              return (
                <li className="shadow-md rounded mb-1" key={index}>
                  <Link to={`/findNearestWay/${e.id}`} className="flex flex-col w-full items-start">
                    <div className="">
                      <img className="" src={`${e.Images[0]}`} alt="가게 이미지" />
                    </div>
                    <div className="flex relative flex-col h-[160px] w-full">
                      <p className="text-[18px]">{e.storeName}</p>
                      <p className="whitespace-nowrap text-ellipsis overflow-hidden">{e.address}</p>
                      <p>{e.phone}</p>
                      <p className="absolute bottom-0">{e.category}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StoreDrawer;
