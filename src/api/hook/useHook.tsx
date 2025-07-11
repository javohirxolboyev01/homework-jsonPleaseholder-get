import { useEffect, useState } from "react";
import { api } from "..";

const useHook = (enpoint: any) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    api
      .get(enpoint)
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  }, []);
  if (err) {
    <div className="text-center text-red-500">
      <p>Xato qildingiz</p>
    </div>;
  }
  return { data, loading, err };
};
export default useHook
