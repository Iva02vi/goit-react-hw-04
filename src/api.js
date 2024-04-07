import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const KEY = "M1U1dyK5RqXi6ekNGXCcKRVGsUTDuMWboAmdhEVj37c";
const https = `/search/photos/?client_id=${KEY}`;

export default async function fetchPhotos(query, page) {
  const response = await axios.get(https, {
    params: {
      query,
      per_page: 12,
      page,
    },
  });

  return {
    imageData: response.data.results,
    totalPages: response.data.total_pages};
}