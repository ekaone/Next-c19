/*
 * fetcher
 * @params: URL
 */

import useSWR from "swr";

export default async function fetcherSwr(...args) {
  const response = await fetch(...args);
  const data = await response.json();

  return data;
}

function Country(p) {
  const { data, error } = useSWR(
    `https://covid19.mathdro.id/api/countries/${p}/`,
    fetcherSwr
  );
  if (error) return "failed to load";
  if (!data) return "loading...";

  return { data };
}
