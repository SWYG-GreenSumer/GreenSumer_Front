import { atom, selector } from "recoil";

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export const authState = atom<AuthTokens>({
  key: "authState",
  default: { accessToken: "", refreshToken: "" },
});
