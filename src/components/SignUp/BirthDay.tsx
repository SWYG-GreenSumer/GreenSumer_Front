import React, { FunctionComponent, useCallback } from 'react';

/**
 * 년, 월에 따라 마지막 날짜가 무엇인지 계산하는 함수
 *
 * example :
 *
 * let days = getDaysInMonth(2, 2022);
 *
 * console.log(days); // 28
 *
 * @param month number
 * @param year number
 * @returns last day
 *

 * 
 */
const getDaysInMonth = (month: string, year: string) => {
  return new Date(+year, +month, 0).getDate();
};

type BirthDayProps = {
  birthMonth: string;
  birthYear: string;
  setUserBirthDay: React.Dispatch<React.SetStateAction<string>>;
};

const BirthDay: FunctionComponent<BirthDayProps> = ({ birthMonth, birthYear, setUserBirthDay }) => {
  const birthDayLength = getDaysInMonth(birthMonth, birthYear);
  const birthDayArray = Array.from({ length: birthDayLength }, (_, index) => index + 1);

  const onClickBirthDayHandler = useCallback((event: React.MouseEvent<HTMLElement>): void => {
    const currDay = event.currentTarget.textContent;
    if (currDay !== null) {
      setUserBirthDay(currDay);
    }
  }, []);

  return (
    <div>
      {birthDayArray.map((e) => {
        return (
          <li key={e}>
            <a onClick={onClickBirthDayHandler}>{e}</a>
          </li>
        );
      })}
    </div>
  );
};

export default BirthDay;
