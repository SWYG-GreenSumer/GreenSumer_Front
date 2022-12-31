import React, { FunctionComponent } from 'react';

type StoreDrawerProps = {
  data: any;
};

const StoreDrawer: FunctionComponent<StoreDrawerProps> = ({ data }) => {
  return (
    <div className='absolute right-0 top-0'>
      <div className='drawer drawer-mobile'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col items-center justify-center'>
          {/* <!-- Page content here --> */}
          <label
            htmlFor='my-drawer-2'
            className='btn btn-primary drawer-button lg:hidden'>
            Open drawer
          </label>
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 bg-base-100 text-base-content'>
            {/* <!-- Sidebar content here --> */}
            {data?.map(
              (
                e: {
                  content: any;                 
                },
                index: React.Key | null | undefined
              ) => {
                console.log(e)
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
