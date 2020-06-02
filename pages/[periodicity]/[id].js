import { useRouter } from "next/router";
import fetch from "node-fetch";
import { useContext, useEffect } from "react";
import cities from "../../public/data/cities.json";
import Daily from "../../src/components/daily";
import Monthly from "../../src/components/monthly";
import { updateCity, updatePeriodicity } from "../../src/context/actions";
import { AppContext } from "../../src/context/AppContext";
import { API_URL } from "../../src/settings";

const PeriodicitySwitch = ({ prayers }) => {
  const router = useRouter();

  let { periodicity, id } = router.query;
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    updateCity(dispatch, id);
  }, [id]);

  useEffect(() => {
    updatePeriodicity(dispatch, periodicity);
  }, [periodicity]);

  return periodicity === "daily" ? (
    <Daily id={id} prayers={prayers} />
  ) : (
    <Monthly id={id} prayers={prayers} />
  );
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
    fallback: true,
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
  console.log("Getting new data", URL);
  // Load initial values from API
  const prayers = await fetch(URL).then((res) => res.json());

  return prayers;
};

export async function getStaticProps({ params }) {
  const prayers = await getPrayers(
    parseInt(params.id),
    params.periodicity === "daily"
  );

  return { unstable_revalidate: 1, props: { prayers } };
}

export default PeriodicitySwitch;
