import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { mbtiQuestionJSON } from '../../public/json/mbtiQuestionJSON';

type Props = {};

export default function MBTI({}: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  let { id } = useParams();
  // test 점수
  const [E, setE] = useState(0);
  const [I, setI] = useState(0);
  const [T, setT] = useState(0);
  const [F, setF] = useState(0);
  const [P, setP] = useState(0);
  const [J, setJ] = useState(0);
  // 진행도
  const [process, setProcess] = useState(0);  

  useEffect(() => {
    if (typeof id === 'string') {
      // 다음 페이지로 이동할 때마다 process 10씩 증가
      setProcess(+id * 10);
    }
  }, [id]);

  const onNoClickHandle = () => {
    ScoreNo();
    console.log(E, I, T, F, P, J)
    increasePage();
  };

  const onMiddleClickHandle = () => {
    ScoreYes();
    console.log(E, I, T, F, P, J)
    increasePage();
  };

  const onYesClickHandle = () => {
    ScoreYes();
    ScoreNo();
    console.log(E, I, T, F, P, J)
    increasePage();
  };

  const increasePage = () => {
    // page + 1 로 이동
    if (id === undefined) {
      navigate(`/mbti/1`);
    } else if (+id < 8) {
      navigate(`/mbti/${+id + 1}`);
      // 결과 페이지로 이동
    } else {
      navigate(`/mbti/result`);
    }
  };

  const ScoreNo = () => {
    if (id === undefined) return;

    if (mbtiQuestionJSON[+id].no === 'E') {
      setE((prev) => prev + 1);
    } else if (mbtiQuestionJSON[+id].no === 'I') {
      setI((prev) => prev + 1);
    } else if (mbtiQuestionJSON[+id].no === 'T') {
      setT((prev) => prev + 1);
    } else if (mbtiQuestionJSON[+id].no === 'F') {
      setF((prev) => prev + 1);
    } else if (mbtiQuestionJSON[+id].no === 'P') {
      setP((prev) => prev + 1);
    } else if (mbtiQuestionJSON[+id].no === 'J') {
      setJ((prev) => prev + 1);
    }
  };

  const ScoreYes = () => {
    if (id === undefined) return;

    if (mbtiQuestionJSON[+id].yes === 'E') {
      setE((prev) => prev + 1);
    } else if (mbtiQuestionJSON[+id].yes === 'I') {
      setI((prev) => prev + 1);
    } else if (mbtiQuestionJSON[+id].yes === 'T') {
      setT((prev) => prev + 1);
    } else if (mbtiQuestionJSON[+id].yes === 'F') {
      setF((prev) => prev + 1);
    } else if (mbtiQuestionJSON[+id].yes === 'P') {
      setP((prev) => prev + 1);
    } else if (mbtiQuestionJSON[+id].yes === 'J') {
      setJ((prev) => prev + 1);
    }
  };

  return (
    <div>
      {/* param이 없을 때 (시작 전 페이지) */}
      {!location.pathname.includes('result') && id === undefined ? (
        <div>
          <p>{id}</p>
          <button className='btn w-full' onClick={increasePage}>
            테스트 시작
          </button>
        </div>
      ) : /** param 중 result 포함할 때 (결과 페이지) */
      location.pathname.includes('result') ? (
        <>
        <div className='card'>결과 페이지 입니다.</div>
        </>
      ) : (
        /** 테스트 중 페이지  */
        <>
          <progress
            className='progress progress-primary w-56'
            value={process}
            max='90'
          />
          <p>{mbtiQuestionJSON[+id].question}</p>
          <button className='btn' onClick={onNoClickHandle}>
            전혀 그렇지 않다
          </button>
          <button className='btn' onClick={onNoClickHandle}>
            그렇지 않다
          </button>
          <button className='btn' onClick={onMiddleClickHandle}>
            보통이다
          </button>
          <button className='btn' onClick={onYesClickHandle}>
            그렇다
          </button>
          <button className='btn' onClick={onYesClickHandle}>
            매우 그렇다
          </button>
        </>
      )}
    </div>
  );
}
