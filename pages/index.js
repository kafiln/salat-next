import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { Spinner } from "../src/common/spinner/styles";
import { AppContext } from "../src/context/AppContext";
import { INITIAL_INIT } from "../src/context/types";

const Index = () => {
  const { dispatch } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem("id") || 80;
    const theme = localStorage.getItem("theme") || "light";
    const lang = localStorage.getItem("lang") || "ar-ar";
    const periodicity = localStorage.getItem("periodicity") || "daily";

    dispatch({ type: INITIAL_INIT, payload: { id, theme, lang, periodicity } });
    const redirect = `/${periodicity}/${id}`;
    console.log(redirect);
    router.push(redirect);
  }, []);

  return <Spinner></Spinner>;
};

export default Index;
