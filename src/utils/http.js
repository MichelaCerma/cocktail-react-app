const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

export const GET = async (endPoint) => {
  const res = await fetch(BASE_URL + endPoint);
  const data = res.json();
  return data;
};
