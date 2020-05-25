import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Daily from "../../src/components/daily";
import Monthly from "../../src/components/monthly";
import { AppContext } from "../../src/context/AppContext";

const PeriodicitySwitch = () => {
  const router = useRouter();
  let { periodicity, id } = router.query;
  const { dispatch, id: contextID } = useContext(AppContext);

  useEffect(() => {
    if (periodicity) {
      if (!id) id = contextID;
      const redirect = `/${periodicity}/${id}`;
      router.push(`/[periodicity]/[id]`, redirect);
    }
  }, [periodicity]);

  useEffect(() => {}, []);

  return periodicity === "daily" ? <Daily id={id} /> : <Monthly id={id} />;
};

export default PeriodicitySwitch;
