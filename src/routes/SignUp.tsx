import React, {
  FunctionComponent,
  ReactEventHandler,
  useCallback,
  useState,
} from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';

interface SignUpProps {}

const SignUp: FunctionComponent<SignUpProps> = () => {
  // 판매자인지, 소비자인지 판별
  const [isSeller, setIsSeller] = React.useState<boolean>(false);
  // 주소 검색창이 열렸는지, 닫혔는지 판별
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);

  // 회원 정보
  const [userID, setUserID] = React.useState<string>('');
  const [userPW, setUserPW] = React.useState<string>('');
  const [userPWConfirm, setUserPWConfirm] = React.useState<string>('');
  const [userEmail, setUserEmail] = React.useState<string>('');
  const [userNickname, setUserNickname] = React.useState<string>('');
  const [userAddress, setUserAddress] = React.useState<string>('');

  // 유효성 검사를 위한 boolean
  const [isID, setIsID] = React.useState<boolean>(false);
  const [isPW, setIsPW] = React.useState<boolean>(false);
  const [isPWConfirm, setIsPWConfirm] = React.useState<boolean>(false);
  const [isEmail, setIsEmail] = React.useState<boolean>(false);
  const [isNickname, setIsNickname] = React.useState<boolean>(false);
  const [isAddress, setIsAddress] = React.useState<boolean>(false);

  //오류메시지 상태저장
  const [IDMessage, setIDMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>('');
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [nicknameMessage, setNicknameMessage] = useState<string>('');

  const onSellerClick = () => {
    setIsSeller(true);
  };

  const onConsumerClick = () => {
    setIsSeller(false);
  };

  // ID 변경됐을 때 유효성 검사
  // 5자 ~ 12자 이어야 함
  const onIDChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const id = event.target.value;
      setUserID(id);
      if (id.length >= 5 && id.length <= 12) {
        setIDMessage('올바른 ID 형식입니다 :)');
        setIsID(true);
      } else {
        setIDMessage('5글자 이상 12글자 이하로 입력해주세요.');
        setIsID(false);
      }
    },
    []
  );

  const onPWChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,20}$/;
      const currentPassword = event.target.value;
      setUserPW(currentPassword);

      if (passwordRegex.test(currentPassword)) {
        setIsPW(true);
        setPasswordMessage('안전한 비밀번호입니다 :)');
      } else {
        setPasswordMessage(
          '숫자 + 영문자 + 특수문자 조합으로 10자리 이상 20자리 이하 입력해주세요.'
        );
        setIsPW(false);
      }
    },
    []
  );

  const onPWConfirmChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const currentPasswordConfirm = event.target.value;
      setUserPWConfirm(currentPasswordConfirm);

      if (currentPasswordConfirm === userPW) {
        setPasswordConfirmMessage('비밀번호가 일치합니다 :)');
        setIsPWConfirm(true);
      } else {
        setPasswordConfirmMessage(
          '비밀번호가 일치하지 않습니다. 다시 입력해주세요.'
        );
        setIsPWConfirm(false);
      }
    },
    [userPW]
  );

  const onEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const emailCurrent = event.target.value;
      setUserEmail(emailCurrent);

      if (emailRegex.test(emailCurrent)) {
        setEmailMessage('올바른 이메일 형식입니다 : )');
        setIsEmail(true);
      } else {
        setEmailMessage('이메일 형식이 틀렸습니다. 다시 입력해주세요.');
        setIsEmail(false);
      }
    },
    []
  );

  const onNicknameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nickname = event.target.value;
      setUserNickname(nickname);

      if (nickname.length >= 5) {
        setIsNickname(true);
        setNicknameMessage('올바른 닉네임 형식입니다 :)');
      } else {
        setIsNickname(false);
        setNicknameMessage('닉네임의 길이를 확인해주세요.');
      }
    },
    []
  );

  const handle = {
    // 주소 검색 버튼 클릭 이벤트
    onAddressSearchClick: () => {
      setOpenPostcode((current) => !current);
    },
    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      console.log(`주소: ${data.address}, 우편번호: ${data.zonecode}`);
      setOpenPostcode(false);
      setUserAddress(data.address);
      setIsAddress(true);
    },
  };

  return (
    <div className='m-auto w-fit'>
      {/* Seller Consumer 버튼 */}
      <div className='flex my-5'>
        <button
          className='btn btn-primary text-2xl font-bold text-white min-w-fit h-10 mr-60'
          onClick={onSellerClick}>
          Seller
        </button>
        <button
          className='btn btn-secondary text-2xl font-bold text-white min-w-fit  h-10'
          onClick={onConsumerClick}>
          Consumer
        </button>
      </div>
      {/* 회원가입 input */}
      <div className='SignupInputContainer flex-col justify-center max-w-xl'>
        <div className='form-control w-full'>
          <label className='label' htmlFor='userID'>
            <span className='label-text'>ID</span>
            {userID.length > 0 && (
              <span className={`message ${isID ? 'success' : 'error'}`}>
                {IDMessage}
              </span>
            )}
          </label>
          <input
            id='userID'
            type='text'
            placeholder='5 ~ 12글자 입력해주세요'
            className='input input-bordered w-full max-w-xl'
            value={userID}
            onChange={onIDChange}
            required
          />
        </div>
        <div className='form-control w-full max-w-xl'>
          <label className='label' htmlFor='userPW'>
            <span className='label-text'>Password</span>
            {userPW.length > 0 && (
              <span className={`message ${isPW ? 'success' : 'error'}`}>
                {passwordMessage}
              </span>
            )}
          </label>
          <input
            id='userPW'
            type='password'
            placeholder='숫자 + 영문자 + 특수문자 조합 10 ~ 20자 입력해주세요'
            className='input input-bordered w-full max-w-xl'
            value={userPW}
            onChange={onPWChange}
            required
          />
        </div>
        <div className='form-control w-full max-w-xl'>
          <label className='label' htmlFor='userPWConfirm'>
            <span className='label-text'>Password Confirm</span>
            {userPWConfirm.length > 0 && (
              <span className={`message ${isPWConfirm ? 'success' : 'error'}`}>
                {passwordConfirmMessage}
              </span>
            )}
          </label>
          <input
            id='userPWConfirm'
            type='password'
            placeholder='비밀번호 확인를 입력해주세요'
            className='input input-bordered w-full max-w-xl'
            value={userPWConfirm}
            onChange={onPWConfirmChange}
            required
          />
        </div>
        <div className='form-control w-full max-w-xl'>
          <label className='label' htmlFor='userEmail'>
            <span className='label-text'>이메일</span>
            {userEmail.length > 0 && (
              <span className={`message ${isEmail ? 'success' : 'error'}`}>
                {emailMessage}
              </span>
            )}
          </label>
          <input
            id='userEmail'
            type='text'
            placeholder='이메일을 입력해주세요'
            className='input input-bordered w-full max-w-xl'
            value={userEmail}
            onChange={onEmailChange}
            required
          />
        </div>
        <div className='form-control w-full max-w-xl'>
          <label className='label' htmlFor='userNickname'>
            <span className='label-text'>닉네임</span>
            {userNickname.length > 0 && (
              <span className={`message ${isNickname ? 'success' : 'error'}`}>
                {nicknameMessage}
              </span>
            )}
          </label>
          <input
            id='userNickname'
            type='text'
            placeholder='5글자 이상 입력해주세요'
            className='input input-bordered w-full max-w-xl'
            value={userNickname}
            onChange={onNicknameChange}
            required
          />
        </div>
        {/* Seller 일 때, 지점 등록 가능 */}
        {isSeller && (
          <div className='form-control w-full max-w-xl'>
            <label className='label' htmlFor='userAddress'>
              <span className='label-text'>가게 주소</span>
            </label>
            <input
              id='userAddress'
              type='text'
              placeholder='가게 주소를 입력해주세요'
              className='input input-bordered w-full max-w-xl'
              value={userAddress}
              onClick={handle.onAddressSearchClick}
              onFocus={handle.onAddressSearchClick}
              required
            />
          </div>
        )}
        {isSeller && openPostcode && (
          <DaumPostcodeEmbed
            // 값을 선택할 경우 실행되는 이벤트
            onComplete={handle.selectAddress}
            // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘
            autoClose={false}
            // 팝업을 열 때 가본적으로 입력되는 검색어
            defaultQuery='판교역로 235'
            className='mt-2 border-4 '
          />
        )}
        <button
          className='btn btn-block btn-success mt-8'
          disabled={
            isSeller
              ? !(
                  isID &&
                  isPW &&
                  isPWConfirm &&
                  isEmail &&
                  isNickname &&
                  isAddress
                )
              : !(isID && isPW && isPWConfirm && isEmail && isNickname)
          }>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignUp;
