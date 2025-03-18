// import axios from 'axios';
//
// const API_KEY = '49393685-3ee93529131780612454ef79e';
// const BASE_URL = 'https://pixabay.com/api/';
// export async function getPictures(query) {
//   try {
//     const response = await axios.get(BASE_URL, {
//       params: {
//         key: API_KEY,
//         q: query,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || 'Failed to fetch images');
//   }
// }
// // const apiPixabay=(value) => {
// //   let findFile=[];
// //   const url="https://pixabay.com/api/"
// //   const apiKey="49393685-3ee93529131780612454ef79e"
// // options= {
// //   params: {
// //     key: apiKey,
// //     q: value,
// //     image_type: "photo",
// //     per_page: 10,
// //     orientation: "horizontal",
// //     safesearch: true,
// //   }
// // };
// //
// //   axios({
// //     method: 'get',
// //     url: url,
// //   }).then((response) => {
// //     findFile=response;
// //     c
// //   })
//
//
//
//
//
// // }
// export default apiPixabay;
import axios from "axios";

const API_KEY = "49393685-3ee93529131780612454ef79e";
const BASE_URL = "https://pixabay.com/api/";

export async function getPictures(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  });
  return response.data;
}
