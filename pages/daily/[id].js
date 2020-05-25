import { useRouter } from "next/router";
import { useContext } from "react";
import Daily from "../../src/components/daily";
import { AppContext } from "../../src/context/AppContext";

const DailyId = () => {
  const { id: contextId, dispatch } = useContext(AppContext);

  // useEffect(() => {
  //   const id = localStorage.getItem("id") || 80;
  //   const theme = localStorage.getItem("theme") || "light";
  //   const lang = localStorage.getItem("lang") || "ar-ar";
  //   const periodicity = localStorage.getItem("periodicity") || "daily";
  //   dispatch({ type: INITIAL_INIT, payload: { id, theme, lang, periodicity } });
  // }, []);

  const router = useRouter();
  let { id } = router.query;

  if (!id && !router.pathname.endsWith("]")) id = contextId;

  return <Daily id={id} />;
};

export default DailyId;
