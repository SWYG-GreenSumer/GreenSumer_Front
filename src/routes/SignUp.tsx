import React, {
  FunctionComponent,
  ReactEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useNavigate } from "react-router-dom";
const { kakao } = window;

interface SignUpProps {}

const SignUp: FunctionComponent<SignUpProps> = () => {
  // 판매자인지, 소비자인지 판별
  const [isSeller, setIsSeller] = React.useState<boolean>(false);
  // 주소 검색창이 열렸는지, 닫혔는지 판별
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);

  // 회원 정보
  const [userID, setUserID] = React.useState<string>("");
  const [userPW, setUserPW] = React.useState<string>("");
  const [userPWConfirm, setUserPWConfirm] = React.useState<string>("");
  const [userEmail, setUserEmail] = React.useState<string>("");
  const [certifiedEmailCode, setCertifiedEmailCode] =
    React.useState<string>("");
  const [userNickname, setUserNickname] = React.useState<string>("");
  const [userAddress, setUserAddress] = React.useState<string>("");
  const [lat, setLat] = React.useState<string>("");
  const [lng, setLng] = React.useState<string>("");

  // 유효성 검사를 위한 boolean
  const [isID, setIsID] = React.useState<boolean>(false);
  const [isPW, setIsPW] = React.useState<boolean>(false);
  const [isPWConfirm, setIsPWConfirm] = React.useState<boolean>(false);
  const [isEmail, setIsEmail] = React.useState<boolean>(false);
  const [isCertifiedEmail, setIsCertifiedEmail] =
    React.useState<boolean>(false);
  const [isNickname, setIsNickname] = React.useState<boolean>(false);
  const [isAddress, setIsAddress] = React.useState<boolean>(false);

  //오류메시지 상태저장
  const [IDMessage, setIDMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>("");
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [nicknameMessage, setNicknameMessage] = useState<string>("");

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

  const SignUpClickHandle = () => {
    const fetchSignUp = async () => {
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userID,
          password: userPW,
          email: userEmail,
          nickname: userNickname,
          grade: isSeller ? 1 : 0,
          address: isSeller ? userAddress : "",
          lat: isSeller ? lat : "",
          lng: isSeller ? lng : "",
        }),
      };

      try {
        const fetchResponse = await fetch(`/api/sign-up`, settings);
        const data = await fetchResponse.json();
        return data;
      } catch (e) {
        alert("회원가입 에러가 발생하였습니다. " + e);
        return e;
      }
    };

    fetchSignUp();

    // alert(`${userID}
    // ${userPW}
    // ${userEmail}
    // ${userNickname}
    // ${userAddress}
    // ${lat}
    // ${lng}
    // 회원가입이 완료되었습니다.
    // `);
    navigate("/");
  };

  // 이메일 인증 확인 버튼
  const isCertifiedEmailClickHandle = () => {
    alert("이메일 인증이 확인되었습니다.");
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

  return (
    <div className="m-auto w-[100%] sm:w-fit">
      {/* Seller Consumer 버튼 */}
      <div className="flex my-5 justify-between">
        <button
          className="btn btn-primary text-2xl font-bold text-white w-[35%] sm:w-fit h-10 sm:mr-60"
          onClick={onSellerClick}
        >
          Seller
        </button>
        <button
          className="btn btn-secondary text-2xl font-bold text-white w-[55%] sm:w-fit  h-10"
          onClick={onConsumerClick}
        >
          Consumer
        </button>
      </div>
      {/* 회원가입 input */}
      <div className="SignupInputContainer flex-col justify-center max-w-xl">
        <div className="form-control w-full">
          <label className="label" htmlFor="userID">
            <span className="label-text">ID</span>
          </label>
          <input
            id="userID"
            type="text"
            placeholder="ID를 입력해주세요"
            className="input input-bordered w-full max-w-xl"
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
        <div className="form-control w-full max-w-xl">
          <label className="label" htmlFor="userPW">
            <span className="label-text">Password</span>
          </label>
          <input
            id="userPW"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className="input input-bordered w-full max-w-xl"
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
        <div className="form-control w-full max-w-xl">
          <label className="label" htmlFor="userPWConfirm">
            <span className="label-text">Password Confirm</span>
          </label>
          <input
            id="userPWConfirm"
            type="password"
            placeholder="비밀번호 확인를 입력해주세요"
            className="input input-bordered w-full max-w-xl"
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
        <div className="form-control w-full max-w-xl">
          <label className="label" htmlFor="userEmail">
            <span className="label-text">이메일</span>
          </label>
          <div className="flex justify-between">
            <input
              id="userEmail"
              type="text"
              placeholder="이메일을 입력해주세요"
              className="input input-bordered w-[80%] max-w-xl"
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
            className="input input-bordered w-[80%] max-w-xl"
            value={certifiedEmailCode}
            onChange={(e) => setCertifiedEmailCode(e.target.value)}
            required
          />
          <button className="btn btn-secondary text-white">인증 확인</button>
        </div>
        <div className="form-control w-full max-w-xl">
          <label className="label" htmlFor="userNickname">
            <span className="label-text">닉네임</span>
          </label>
          <input
            id="userNickname"
            type="text"
            placeholder="닉네임을 입력해주세요"
            className="input input-bordered w-full max-w-xl"
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
        {/* Seller 일 때, 지점 등록 가능 */}
        {isSeller && (
          <div className="form-control w-full max-w-xl">
            <label className="label" htmlFor="userAddress">
              <span className="label-text">가게 주소</span>
            </label>
            <input
              id="userAddress"
              type="text"
              placeholder="가게 주소를 입력해주세요"
              className="input input-bordered w-full max-w-xl"
              value={userAddress}
              onClick={handle.onAddressSearchClick}
              // onFocus={handle.onAddressSearchClick}
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
            defaultQuery="판교역로 235"
            className="mt-2 border-4 "
          />
        )}
        <button
          className="btn btn-block btn-success mt-8"
          onClick={SignUpClickHandle}
          disabled={
            isSeller
              ? !(
                  isID &&
                  isPW &&
                  isPWConfirm &&
                  isEmail &&
                  isCertifiedEmail &&
                  isNickname &&
                  isAddress
                )
              : !(
                  isID &&
                  isPW &&
                  isPWConfirm &&
                  isEmail &&
                  isCertifiedEmail &&
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
