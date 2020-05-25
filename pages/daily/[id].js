import { useRouter } from "next/router";
import { useContext } from "react";
import Daily from "../../src/components/daily";
import { AppContext } from "../../src/context/AppContext";

const DailyId = () => {
  const contextId = useContext(AppContext).id;
  const router = useRouter();
  let { id } = router.query;

  if (!id && !router.pathname.endsWith("]")) id = contextId;

  return <Daily id={id} />;
};

export default DailyId;
