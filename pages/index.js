import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { Spinner } from "../src/common/spinner/styles";
import { AppContext } from "../src/context/AppContext";

const Index = () => {
  const { id, periodicity } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (periodicity && id) {
      const redirect = `/${periodicity}/${id}`;
      router.push(`/[periodicity]/[id]`, redirect);
    }
  }, [periodicity, id]);

  return <Spinner></Spinner>;
};

export default Index;
