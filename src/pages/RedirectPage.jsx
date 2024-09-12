import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { accessTokenGet, selectAccessToken} from "../features/slices/accessTokenSlice";

const RedirectPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const access_token = useSelector(selectAccessToken).accessTokenString;
  useEffect(() => {
    // 解析 URL fragment (hash)
    const hash = window.location.hash.substring(1); // 去掉 '#' 開頭
    const params = new URLSearchParams(hash);

    const accessToken = params.get('access_token');
    if (accessToken) {
      //localStorage.setItem('accessToken', accessToken);
      console.log('登入成功');
      dispatch(accessTokenGet(accessToken));
      console.log('access_token:', access_token);
      navigate('/home');
    } 
  }, [navigate,dispatch]);

  return (
    <div >
      <h2 >驗證取得中...</h2>
    </div>
  );
};

export default RedirectPage;
