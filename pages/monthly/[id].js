import { useRouter } from "next/router";
import { useContext } from "react";
import Monthly from "../../src/components/monthly";
import { AppContext } from "../../src/context/AppContext";

const MonthlyId = () => {
  const contextId = useContext(AppContext).id;
  const router = useRouter();
  let { id } = router.query;
  if (!id && !router.pathname.endsWith("]")) id = contextId;

  return <Monthly id={id} />;
};

export default MonthlyId;
