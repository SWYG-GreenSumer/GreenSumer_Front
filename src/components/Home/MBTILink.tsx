import React, { FunctionComponent } from 'react';

type MBTILinkProps = {};

const MBTILink: FunctionComponent<MBTILinkProps> = () => {
  return (
    <div className='h-96 sm:h-60'>
      <div className='card sm:card-side bg-base-100 shadow-xl h-full'>
        <figure>
          <img className='h-[90%]' src='public\icon\SumBTI.svg' alt='MBTI Test' />
        </figure>
        <div className='card-body p-5 w-full sm:w-1/2'>
          <h2 className='card-title'>그린슘BTI 테스트</h2>
          <p className='text-sm'>녹색 소비로 알아보는 내 성향!</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>바로가기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MBTILink;
