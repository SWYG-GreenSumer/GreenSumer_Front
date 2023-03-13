import React, { FunctionComponent, useCallback } from 'react';

type BirthYearProps = {
  setUserBirthYear: React.Dispatch<React.SetStateAction<string>>;
};

const BirthYear: FunctionComponent<BirthYearProps> = ({ setUserBirthYear }) => {
  const birthYear = new Date().getFullYear();
  const birthYearArray = Array.from({ length: 104 }, (_, index) => (birthYear - index).toString());

  const onClickBirthYearHandler = useCallback((event: React.MouseEvent<HTMLElement>): void => {
    const currYear = event.currentTarget.textContent;
    if (currYear !== null) {
      setUserBirthYear(currYear);
    }
  }, []);

  return (
    <div>
      {birthYearArray.map((e) => {
        return (
          <li key={e}>
            <a onClick={onClickBirthYearHandler}>{e}</a>
          </li>
        );
      })}
    </div>
  );
};

export default BirthYear;
