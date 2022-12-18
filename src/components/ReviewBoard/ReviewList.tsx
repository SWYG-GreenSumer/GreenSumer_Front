import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import { dumpData } from '../../dumpdata';

type ReviewListProps = {};

const ReviewList: FunctionComponent<ReviewListProps> = () => {
  const location = useLocation();
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* <!-- head --> */}
          <thead>
            {/* 후기 게시판 페이지에서만 표시 */}
            {location.pathname.includes('reviewBoard') && (
              <tr>
                <th className='bg-success'>번호</th>
                <th className='bg-success'>종류</th>
                <th className='bg-success'>제목</th>
                <th className='bg-success'>글쓴이</th>
                <th className='bg-success'>날짜</th>
                <th className='bg-success'>조회수</th>
              </tr>
            )}
          </thead>
          <tbody>
            {/* <!-- row --> */}
            {dumpData.map((e, i) => {
              // 후기 게시판 페이지에서는 10개씩, 메인 페이지에서는 4개씩 보여주기
              if (location.pathname.includes('reviewBoard') && i < 10) {
                if (i < 10) {
                  return (
                    <tr key={e.product_id}>
                      <th>{e.product_id}</th>
                      <td>{e.hashtag}</td>
                      <td>{e.title}</td>
                      <td>{e.nickname}</td>
                      <td>{e.createdAt}</td>
                      <td>{e.views}</td>
                    </tr>
                  );
                }
              } else {
                if (i < 4) {
                  return (
                    <tr key={e.product_id}>
                      <td>{e.title}</td>
                    </tr>
                  );
                }
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewList;
