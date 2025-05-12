import axios from "axios";

const ACCESS_KEY = "dhtOVxmu7cu8PZgWuDAWjUcuIGInl6fXWobQbH4YkWM";
axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (topic) => {
    const response = await axios.get(`/search/photos`, {
          params: {
            client_id: ACCESS_KEY,
            page: 1,
            query: topic,
            per_page: 12
          }
    })
    return response.data.results
}   