export const fetchApi = async (url) => {
  const res = await fetch(url);
  const { hits } = await res.json();
  return hits;
};
