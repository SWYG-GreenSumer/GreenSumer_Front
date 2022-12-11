import React, { FunctionComponent } from 'react';
import { dumpData } from '../dumpdata';

type ReviewBoardProps = {};

const ReviewBoard: FunctionComponent<ReviewBoardProps> = () => {
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className='bg-success'>번호</th>
              <th className='bg-success'></th>
              <th className='bg-success'>제목</th>
              <th className='bg-success'>글쓴이</th>
              <th className='bg-success'>날짜</th>
              <th className='bg-success'>조회수</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row --> */}
            {dumpData.map((e, i) => {
              if (i < 10) {
                return (
                  <tr>
                    <th>{e.product_id}</th>
                    <td>{e.hashtag}</td>
                    <td>{e.title}</td>
                    <td>{e.nickname}</td>
                    <td>{e.createdAt}</td>
                    <td>{e.views}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center mt-10'>
        <div className='btn-group m-x-auto'>
          <button className='btn'>«</button>
          <button className='btn'>Page 1</button>
          <button className='btn'>»</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewBoard;
