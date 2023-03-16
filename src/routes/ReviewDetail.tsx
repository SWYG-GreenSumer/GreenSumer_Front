import axios from 'axios';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dumpData } from '../../public/json/dumpdata';

type ReviewDetailProps = {};

type ReviewDetailJSON = {
  id: number;
  product_id: number;
  user_id: number;
  title: string;
  content: string;
  hashtag: string;
  articlemages: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
};

const ReviewDetail: FunctionComponent<ReviewDetailProps> = () => {
  const navigate = useNavigate();
  const [reviewDetail, setReviewDetail] = useState<ReviewDetailJSON>();

  useEffect(() => {
    axios
      .get('/api/reviews/news')
      .then(
        ({
          data: {
            resultCode,
            result: { content },
          },
        }) => {
          if (resultCode === 'SUCCESS') {
            console.log(content);
            // setReviewPosts(content);
          }
        },
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-h-[60vh]">
      <div className="mb-8">
        <div className="grid grid-cols-[1fr_9fr] text-[#333] border-[#c5c5c5] border-y-2">
          <p className="bg-[#e5e7ea] p-1">제목</p>
          <p className="p-1">ㅁㅁㅁ</p>
        </div>
        <div className="grid grid-cols-[1fr_9fr] text-[#333] border-[#c5c5c5] border-b-2">
          <p className="bg-[#e5e7ea] p-1">작성자</p>
          <p className="p-1">ㅁㅁㅁ</p>
        </div>
      </div>
      <div className="mb-8">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">내용</div>
      <div className="flex justify-between">
        <button className="btn" onClick={() => navigate(`/reviewDetail/1`)}>
          이전
        </button>
        <button className="btn" onClick={() => navigate(`/reviewDetail/2`)}>
          다음
        </button>
      </div>
    </div>
  );
};

export default ReviewDetail;
