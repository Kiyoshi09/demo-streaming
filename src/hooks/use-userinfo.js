import { useContext } from "react";
import UserInfoContext from "../context/userInfo";

function useUserInfo() {
  return useContext(UserInfoContext);
}

export default useUserInfo;
