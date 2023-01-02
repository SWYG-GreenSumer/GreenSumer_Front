import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { mbtiQuestionJSON } from "../../public/json/mbtiQuestionJSON";

type Props = {};

export default function MBTI({}: Props) {
  const navigate = useNavigate();
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
  // 해당 페이지에 대한 질문

  useEffect(() => {
    console.log(id);

    if (typeof id === "string") {
      // 다음 페이지로 이동할 때마다 process 10씩 증가
      setProcess(+id * 10);
    }
  }, [id]);

  const increasePage = () => {
    // page + 1 로 이동
    if (typeof id === "string") {
      navigate(`/mbti/${+id + 1}`);
    } else {
      navigate(`/mbti/1`);
    }
  };

  return (
    <div>
      {/* param이 없을 때 (시작 전 페이지) */}
      {id === undefined ? (
        <div>
          <p>{id}</p>
          <button className="btn w-full" onClick={increasePage}>
            테스트 시작
          </button>
        </div>
      ) : /** param 중 result 포함할 때 (결과 페이지) */
      id.includes("result") ? (
        <></>
      ) : (
        /** 테스트 중 페이지  */
        <>
          <progress
            className="progress progress-primary w-56"
            value={process}
            max="90"
          />
          <p>{mbtiQuestionJSON[+id].question}</p>
          <button className="btn">전혀 그렇지 않다</button>
          <button className="btn">그렇지 않다</button>
          <button className="btn">보통이다</button>
          <button className="btn">그렇다</button>
          <button className="btn">매우 그렇다</button>
        </>
      )}
    </div>
  );
}
