import React, { FunctionComponent, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { itemsDataJSON1 } from '../../../public/json/itemsDataJSON';
import { storeDataJSON } from '../../../public/json/storeDataJSON';

type ItemsDrawerProps = {
  setLat: React.Dispatch<React.SetStateAction<number>>;
  setLng: React.Dispatch<React.SetStateAction<number>>;
};

interface ItemsData {
  id: number;
  itemsName: string;
  price: string;
  stock: number;
  description: string;
  images: string[];
}

const ItemsDrawer: FunctionComponent<ItemsDrawerProps> = ({
  setLat,
  setLng,
}) => {
  const Location = useLocation();
  useEffect(() => {
    const urlParameter = Location.pathname.split('/')[2];
    if (urlParameter === undefined) return;

    const currStore = storeDataJSON.filter(
      ({ id }) => `${id}` === urlParameter
    );

    setLat(currStore[0].lat);
    setLng(currStore[0].lng);
  }, [Location]);

  return (
    <div className='absolute right-0 top-0 z-[1]'>
      <div className='drawer drawer-mobile'>
        <div className='drawer-side'>
          <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 h-[100vh] flex-nowrap overflow-auto bg-base-100 text-base-content'>
            {/* <!-- Sidebar content here --> */}
            {itemsDataJSON1.map((e: ItemsData, index: React.Key) => {
              return (
                <li className='shadow-md rounded mb-1' key={index}>
                  <Link
                    to={`/productDetail/${e.id}`}
                    className='flex flex-col w-full items-start'>
                    <div className=''>
                      <img
                        className=''
                        src={`${e.images[0]}`}
                        alt='가게 이미지'
                      />
                    </div>
                    <div className='flex relative flex-col h-[160px] w-full'>
                      <p className='text-[18px]'>{e.itemsName}</p>
                      <p className='whitespace-nowrap text-ellipsis overflow-hidden'>
                        {e.price}원
                      </p>
                      <p>{e.stock}개 남음</p>
                      <p className=''>{e.description}</p>
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

export default ItemsDrawer;
