import axios from 'axios';
import React, {
  FunctionComponent,
  ReactEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import BirthDay from '../components/SignUp/BirthDay';
import BirthMonth from '../components/SignUp/BirthMonth';
import BirthYear from '../components/SignUp/BirthYear';
const { kakao } = window;

interface SignUpProps {}

const SignUp: FunctionComponent<SignUpProps> = () => {
  // 판매자인지, 소비자인지 판별
  const [isSeller, setIsSeller] = useState<boolean>(false);
  // 주소 검색창이 열렸는지, 닫혔는지 판별
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);

  // 회원 정보
  const [userID, setUserID] = useState<string>('');
  const [userPW, setUserPW] = useState<string>('');
  const [userPWConfirm, setUserPWConfirm] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [certifiedEmailCode, setCertifiedEmailCode] = useState<string>('');
  const [userNickname, setUserNickname] = useState<string>('');
  const [userAddress, setUserAddress] = useState<string>('');
  const [userBirthYear, setUserBirthYear] = useState<string>('');
  const [userBirthMonth, setUserBirthMonth] = useState<string>('');
  const [userBirthDay, setUserBirthDay] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userGender, setUserGender] = useState<boolean>(false);
  const [userPhoneAreaCode, setUserPhoneAreaCode] = useState<string>("");
  const [userPhoneExchangeCode, setUserPhoneExchangeCode] =
    useState<string>("");
  const [userPhoneSubscriberNumber, setUserPhoneSubscriberNumber] =
    useState<string>("");

  const [lat, setLat] = useState<string>('');
  const [lng, setLng] = useState<string>('');

  // 유효성 검사를 위한 boolean
  const [isID, setIsID] = useState<boolean>(false);
  const [isPW, setIsPW] = useState<boolean>(false);
  const [isPWConfirm, setIsPWConfirm] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isCertifiedEmail, setIsCertifiedEmail] = useState<boolean>(false);
  const [isNickname, setIsNickname] = useState<boolean>(false);
  const [isAddress, setIsAddress] = useState<boolean>(false);
  const [isUserPhoneAreaCode, setIsUserPhoneAreaCode] =
    useState<boolean>(false);
  const [isUserPhoneExchangeCode, setIsUserPhoneExchangeCode] =
    useState<boolean>(false);
  const [isUserPhoneSubscriberNumber, setIsUserPhoneSubscriberNumber] =
    useState<boolean>(false);

  //오류메시지 상태저장
  const [IDMessage, setIDMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>('');
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [nicknameMessage, setNicknameMessage] = useState<string>('');
  const [phoneNumberMessage, setPhoneNumberMessage] = useState<string>('');

  // 주소 Geocoding
  const geocoder = new kakao.maps.services.Geocoder();

  // Router
  const navigate = useNavigate();

  useEffect(() => {
    userAddress &&
      // 주소로 좌표를 검색합니다..
      geocoder.addressSearch(
        userAddress,
        function (
          result: {
            y: string;
            x: string;
          }[],
          status: any
        ) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            console.log(coords);
            setLat(`${coords.La}`);
            setLng(`${coords.Ma}`);
          }
        }
      );
  }, [isAddress]);

  // ID 변경됐을 때 유효성 검사
  // 5자 ~ 12자 이어야 함
  const onIDChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const id = event.target.value;
      setUserID(id);
      if (id.length >= 5 && id.length <= 12) {
        setIDMessage("올바른 ID 형식입니다 :)");
        setIsID(true);
      } else {
        setIDMessage("5글자 이상 12글자 이하로 입력해주세요.");
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
        setPasswordMessage("안전한 비밀번호입니다 :)");
      } else {
        setPasswordMessage(
          "숫자 + 영문자 + 특수문자 조합으로 10자리 이상 20자리 이하 입력해주세요."
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
        setPasswordConfirmMessage("비밀번호가 일치합니다 :)");
        setIsPWConfirm(true);
      } else {
        setPasswordConfirmMessage(
          "비밀번호가 일치하지 않습니다. 다시 입력해주세요."
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
        setEmailMessage("올바른 이메일 형식입니다 : )");
        setIsEmail(true);
      } else {
        setEmailMessage("이메일 형식이 틀렸습니다. 다시 입력해주세요.");
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
        setNicknameMessage("올바른 닉네임 형식입니다 :)");
      } else {
        setIsNickname(false);
        setNicknameMessage("닉네임의 길이를 확인해주세요.");
      }
    },
    []
  );

  const onNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const name = event.target.value;
      setUserName(name);
    },
    []
  );


  const SignUpClickHandle = () => {
    axios
      .post('/api/users/sign-up/', {
        username: userID,
        password: userPW,
        name: userName,
        birth: `${userBirthYear}-${userBirthMonth}-${userBirthDay}`,
        nickname: userNickname,
        email: userEmail,
        phone: '010-1234-1234',
        gender: 1,
      })
      .then(({ data }) => {
        console.log(data);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  // 이메일 인증 확인 버튼
  const isCertifiedEmailClickHandle = () => {
    alert('이메일 인증이 확인되었습니다.');
    setIsCertifiedEmail(true);
  };

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

  const onChangeUserPhoneAreaCodeInputHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const currPhoneAreaCode = event.target.value;
      const parsedCode = parseInt(currPhoneAreaCode);

      // 5글자 이상 입력 금지
      if (currPhoneAreaCode.length > 4) return;
      // 숫자만 입력
      if (isNaN(parsedCode) && currPhoneAreaCode !== "") return;

      if (currPhoneAreaCode.length > 2) setIsUserPhoneAreaCode(true);

      setUserPhoneAreaCode(currPhoneAreaCode);
    },
    []
  );

  const onChangeUserPhoneExchangeCodeInputHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const currPhoneExchangeCode = event.target.value;
      const parsedCode = parseInt(currPhoneExchangeCode);

      // 5글자 이상 입력 금지
      if (currPhoneExchangeCode.length > 4) return;
      // 숫자만 입력
      if (isNaN(parsedCode) && currPhoneExchangeCode !== "") return;

      if (currPhoneExchangeCode.length > 3) setIsUserPhoneExchangeCode(true);

      setUserPhoneExchangeCode(currPhoneExchangeCode);
    },
    []
  );

  const onchangeUserPhoneSubscriberNumberInputHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const currPhoneSubscriberNumber = event.target.value;
      const parsedCode = parseInt(currPhoneSubscriberNumber);

      // 5글자 이상 입력 금지
      if (currPhoneSubscriberNumber.length > 4) return;
      // 숫자만 입력
      if (isNaN(parsedCode) && currPhoneSubscriberNumber !== "") return;

      if (currPhoneSubscriberNumber.length > 4)
        setIsUserPhoneSubscriberNumber(true);

      setUserPhoneSubscriberNumber(currPhoneSubscriberNumber);
    },
    []
  );

  const onClickFemaleButtonHandler = useCallback(() => {
    setUserGender(false);
  }, []);

  const onClickMaleButtonHandler = useCallback(() => {
    setUserGender(true);
  }, []);

  return (
    <div className='flex justify-center'>
      {/* 회원가입 input */}
      <div className='SignupInputContainer flex-col justify-center'>
        <div className='form-control w-full'>
          <label className='label' htmlFor='userID'>
            <span className='label-text'>ID</span>
          </label>
          <input
            id='userID'
            type='text'
            placeholder='ID를 입력해주세요'
            className='input input-bordered w-full'
            value={userID}
            onChange={onIDChange}
            required
          />
          <label>
            {userID.length > 0 && (
              <span
                className={`message text-xs ${
                  isID ? "text-secondary" : "text-error"
                }
                `}
              >
                {IDMessage}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full ">
          <label className="label" htmlFor="userPW">
            <span className="label-text">Password</span>
          </label>
          <input
            id="userPW"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className="input input-bordered w-full "
            value={userPW}
            onChange={onPWChange}
            required
          />
          <label>
            {userPW.length > 0 && (
              <span
                className={`message text-xs ${
                  isPW ? "text-secondary" : "text-error"
                }`}
              >
                {passwordMessage}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full ">
          <label className="label" htmlFor="userPWConfirm">
            <span className="label-text">Password Confirm</span>
          </label>
          <input
            id="userPWConfirm"
            type="password"
            placeholder="비밀번호 확인를 입력해주세요"
            className="input input-bordered w-full "
            value={userPWConfirm}
            onChange={onPWConfirmChange}
            required
          />
          <label>
            {userPWConfirm.length > 0 && (
              <span
                className={`message text-xs ${
                  isPWConfirm ? "text-secondary" : "text-error"
                }`}
              >
                {passwordConfirmMessage}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full ">
          <label className="label" htmlFor="userEmail">
            <span className="label-text">이메일</span>
          </label>
          <div className="flex justify-between">
            <input
              id="userEmail"
              type="text"
              placeholder="이메일을 입력해주세요"
              className="input input-bordered w-[80%] "
              value={userEmail}
              onChange={onEmailChange}
              required
            />
            <button className="btn btn-primary">인증 요청</button>
          </div>
          <label>
            {userEmail.length > 0 && (
              <span
                className={`message text-xs ${
                  isEmail ? "text-secondary" : "text-error"
                }`}
              >
                {emailMessage}
              </span>
            )}
          </label>
        </div>
        <div className="flex justify-between mt-[1rem]">
          <input
            id="userEmail"
            type="text"
            placeholder="인증번호를 입력해주세요"
            className="input input-bordered w-[80%] "
            value={certifiedEmailCode}
            onChange={(e) => setCertifiedEmailCode(e.target.value)}
            required
          />
          <button className="btn btn-secondary text-white">인증 확인</button>
        </div>
        <div className="form-control w-full">
          <label className="label" htmlFor="userNickname">
            <span className="label-text">닉네임</span>
          </label>
          <input
            id="userNickname"
            type="text"
            placeholder="닉네임을 입력해주세요"
            className="input input-bordered w-full "
            value={userNickname}
            onChange={onNicknameChange}
            required
          />
          <label>
            {userNickname.length > 0 && (
              <span
                className={`message text-xs 
                ${isNickname ? "text-secondary" : "text-error"}`}
              >
                {nicknameMessage}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label" htmlFor="userNickname">
            <span className="label-text">이름</span>
          </label>
          <input
            id="userName"
            type="text"
            placeholder="이름을 입력해주세요"
            className="input input-bordered w-full "
            value={userName}
            onChange={onNameChange}
            required
          />
          <label>
            {userNickname.length > 0 && (
              <span
                className={`message text-xs 
                ${isNickname ? "text-secondary" : "text-error"}`}
              >
                {nicknameMessage}
              </span>
            )}
          </label>
        </div>
        {/* 생년월일 */}
        <div className="form-control w-full">
          <label className="label" htmlFor="userPhoneNumber">
            <span className="label-text">생년월일</span>
          </label>
          <div className="flex justify-between items-center">
            <div className="dropdown w-full">
              <input
                id="userPhoneNumber"
                type="text"
                placeholder="1995"
                className="input input-bordered  w-2/3"
                value={userBirthYear}
                required
              />
              년
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 h-[200px] overflow-auto"
              >
                <BirthYear setUserBirthYear={setUserBirthYear} />
              </ul>
            </div>
            <div className="dropdown w-full">
              <input
                id="userPhoneNumber"
                type="text"
                placeholder="12"
                className="input input-bordered w-2/3"
                value={userBirthMonth}
                required
              />
              월
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 h-[200px] overflow-auto"
              >
                <BirthMonth setUserBirthMonth={setUserBirthMonth} />
              </ul>
            </div>
            <div className="dropdown w-full">
              <input
                id="userPhoneNumber"
                type="text"
                placeholder="25"
                className="input input-bordered w-2/3"
                value={userBirthDay}
                required
              />
              일
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 h-[200px] overflow-auto"
              >
                <BirthDay
                  birthMonth={userBirthMonth}
                  birthYear={userBirthDay}
                  setUserBirthDay={setUserBirthDay}
                />
              </ul>
            </div>
          </div>
          <label></label>
        </div>
        {/* 성별 */}
        <div className="form-control w-full ">
          <label className="label" htmlFor="userGender">
            <span className="label-text">성별</span>
          </label>
          <div className="flex justify-around btn-group">
            <button
              className="btn btn-secondary text-primary w-1/2"
              onClick={onClickFemaleButtonHandler}
            >
              여자
            </button>
            <button
              className="btn btn-secondary text-primary w-1/2"
              onClick={onClickMaleButtonHandler}
            >
              남자
            </button>
          </div>
          <label></label>
        </div>
        {/* 전화번호 */}
        <div className="form-control w-full">
          <label className="label" htmlFor="userPhoneNumber">
            <span className="label-text">전화번호</span>
          </label>
          <div className="flex justify-between items-center">
            <input
              id="userPhoneNumber"
              type="number"
              placeholder="010"
              className="input input-bordered  w-2/3"
              value={userPhoneAreaCode}
              onChange={onChangeUserPhoneAreaCodeInputHandler}
              required
            />
            -
            <input
              id="userPhoneNumber"
              type="text"
              placeholder="0000"
              className="input input-bordered w-2/3"
              value={userPhoneExchangeCode}
              onChange={onChangeUserPhoneExchangeCodeInputHandler}
              required
            />
            -
            <input
              id="userPhoneNumber"
              type="text"
              placeholder="0000"
              className="input input-bordered w-2/3"
              value={userPhoneSubscriberNumber}
              onChange={onchangeUserPhoneSubscriberNumberInputHandler}
              required
            />
          </div>

          <label></label>
        </div>
        <button
          className="btn btn-block btn-success mt-8"
          onClick={SignUpClickHandle}
          disabled={
            !(
              isID &&
              isPW &&
              isPWConfirm &&
              isEmail &&
              
              isNickname 
            )
          }
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignUp;
