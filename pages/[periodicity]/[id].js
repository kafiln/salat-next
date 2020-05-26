import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import cities from "../../public/data/cities.json";
import Daily from "../../src/components/daily";
import Monthly from "../../src/components/monthly";
import { AppContext } from "../../src/context/AppContext";
import { API_URL } from "../../src/settings";

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

//

export async function getStaticPaths() {
  let paths = [];
  ["daily", "monthly"].forEach((p) =>
    cities.forEach((c) => {
      paths.push({
        params: {
          id: `${c.id}`,
          periodicity: p,
        },
      });
    })
  );

  return {
    paths,
    fallback: false,
  };
}

const getPrayers = async (id, daily) => {
  // Form the URL
  let URL = `${API_URL}prayer?lang=fr-fr&cityId=${id}&month=${
    new Date().getUTCMonth() + 1
  }`;

  if (daily) {
    URL += `&day=${new Date().getUTCDate()}`;
  }

  // Load initial values from API
  const prayers = (await axios.get(URL)).data;

  return daily ? prayers[0] : prayers;
};

export async function getStaticProps({ params }) {
  const prayers = await getPrayers(
    parseInt(params.id),
    params.periodicity === "daily"
  );

  return { props: { prayers } };
}

export default PeriodicitySwitch;
