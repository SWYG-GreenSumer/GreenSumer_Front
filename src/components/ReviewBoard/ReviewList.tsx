import axios from 'axios';
import React, { FunctionComponent, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { dumpData } from '../../../public/json/dumpdata';
import { reviewPostsState } from './reviewPostsAtoms';

type ReviewListProps = {};

const ReviewList: FunctionComponent<ReviewListProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [reviewPosts, setReviewPosts] = useRecoilState(reviewPostsState);

  useEffect(() => {
    axios
      .get('/api/reviews/news/')
      .then(
        ({
          data: {
            resultCode,
            result: { content },
          },
        }) => {
          if (resultCode === 'SUCCESS') {
            console.log(content);
            setReviewPosts(content);
          }
        },
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            {/* 후기 게시판 페이지에서만 표시 */}
            {location.pathname.includes('reviewBoard') && (
              <tr>
                <th className="bg-success">제목</th>
                <th className="bg-success">글쓴이</th>
                <th className="bg-success">별점</th>
                <th className="bg-success">조회수</th>
                <th className="bg-success">좋아요 수</th>                
              </tr>
            )}
          </thead>
          <tbody>
            {/* <!-- row --> */}
            {reviewPosts.map((e, i) => {
              // 후기 게시판 페이지에서는 10개씩, 메인 페이지에서는 4개씩 보여주기
              if (location.pathname.includes('reviewBoard') && i < 10) {
                if (i < 10) {
                  return (
                    <tr
                      key={e.product_id}
                      className="cursor-pointer"
                      onClick={() => navigate(`/reviewDetail/${e.product_id}`)}
                    >
                      <td>{e.title}</td>
                      <td>{e.nickname}</td>                      
                      <td>{e.scope}</td>
                      <td>{e.views}</td>
                      <td>{e.likes}</td>
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
