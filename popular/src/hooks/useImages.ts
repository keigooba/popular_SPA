import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useImages = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getPixabay = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users") //https://pixabay.com/api/?key={{.PixabayKey}}
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading,showMessage]);
  return { getPixabay, loading, users };
};
