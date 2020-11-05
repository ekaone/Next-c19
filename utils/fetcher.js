/*
 * fetcher
 * @params: URL
 */

export default async function fetcher(...args) {
  const response = await fetch(...args);
  const data = await response.json();

  return data;
}
