import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { mbtiQuestionJSON } from "/json/mbtiQuestionJSON.js";

type Props = {};

export default function MBTI({}: Props) {
  const navigate = useNavigate();
  let { pageNumber } = useParams();
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
    if (typeof pageNumber === "string") {
      setProcess(+pageNumber * 10);
    } else {
      setProcess(10);
    }
  }, [pageNumber]);

  const increasePage = () => {
    // page + 1 로 이동
    if (typeof pageNumber === "string") {
      navigate(`/mbti/${+pageNumber + 1}`);
    } else {
      navigate(`/mbti/1`);
    }
  };

  return (
    <div>
      {pageNumber === undefined ? (
        <div>
          <p>{pageNumber}</p>
          <button className="btn w-full" onClick={increasePage}>
            테스트 시작
          </button>
        </div>
      ) : (
        <>
          <progress
            className="progress progress-accent w-56"
            value={process}
            max="90"
          />
          {mbtiQuestionJSON.map((e: { title: any; }) => e.title)}
        </>
      )}
    </div>
  );
}
