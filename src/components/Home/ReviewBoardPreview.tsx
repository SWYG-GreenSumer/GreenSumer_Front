import React, { FunctionComponent } from 'react';

import { dumpData } from '../../dumpdata';

type ReviewBoardProps = {};

const ReviewBoard: FunctionComponent<ReviewBoardProps> = () => {

  return (
    <div className='h-fit cursor-pointer'>
      <div className='card sm:card-side bg-base-100 shadow-xl h-full'>
        <div className='card-body'>
          <h2 className='card-title border-y-2 border-black p-1 w-full flex justify-center'>
            후기 게시판
          </h2>
          {dumpData.map((e, i) => {
            if (i < 4) {
              return (
                <p key={e.product_id} className='border-b-2 border-black flex-grow-0'>{e.title}</p>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewBoard;
