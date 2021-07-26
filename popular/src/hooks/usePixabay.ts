import axios from "axios";
import { useCallback, useState } from "react";

import { useMessage } from "./useMessage";

export const usePixabay = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<string>>([]);
	const pixabayKey = process.env.REACT_APP_PIXABAY_KEY;

  const getPixabay = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<string>>(`https://pixabay.comss/api/?key=${pixabayKey}&q=テスト&per_page=`+ 200)
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pixabayKey,setLoading,showMessage]);
  return { getPixabay, loading, users };
};
