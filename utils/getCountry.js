import useSWR from "swr";
import fetcher from "./fetcher";

export default function getCountry(country) {
  const { data, error } = useSWR(
    `https://covid19.mathdro.id/api/countries/${country}/`,
    fetcher
  );
  if (error) return "failed to load";
  if (!data) return "loading...";
  // render data
  return { data };
}
