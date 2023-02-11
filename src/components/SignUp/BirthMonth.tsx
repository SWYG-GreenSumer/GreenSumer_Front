import React, { FunctionComponent, useCallback } from 'react';

type BirthMonthProps = {
  setUserBirthMonth: React.Dispatch<React.SetStateAction<string>>;
};

const BirthMonth: FunctionComponent<BirthMonthProps> = ({
  setUserBirthMonth,
}) => {
  const birthMonthArray = Array.from({ length: 12 }, (_, index) => 1 + index);

  const onClickBirthMonthHandler = useCallback(
    (event: React.MouseEvent<HTMLElement>): void => {
      const currMonth = event.currentTarget.textContent;
      if(currMonth !== null){
        setUserBirthMonth(currMonth);
      }
    },
    []
  );
  return (
    <div>
      {birthMonthArray.map((e) => {
        return (
          <li key={e}>
            <a onClick={onClickBirthMonthHandler}>{e}</a>
          </li>
        );
      })}
    </div>
  );
};

export default BirthMonth;
