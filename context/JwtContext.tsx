import React, { useEffect } from "react";
import { getLocalStorage } from "@/utils";
import { useDispatch, useSelector } from "@/store";
import Loading from "@/components/common/Loading";
import { userLoginSuccess } from "@/store/slices/auth";

const JwtContext = ({ children }: { children: React.JSX.Element }) => {
  const dispatch = useDispatch();
  const { isInitialized } = useSelector((state) => state.authReducer);
  useEffect(() => {
    const init = async () => {
      const session = await getLocalStorage("accessToken");
      console.log(session);
      dispatch(userLoginSuccess({}));
    };
    init();
  }, []);
  //   if (!isInitialized) return <Loading />;
  return <>{children}</>;
};

export default JwtContext;
