// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");
export default function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com/",
    params: { id: "bnVUHWCynig" },
    headers: {
      "X-RapidAPI-Key": "0bcbaa6dd4msh4810b7238bffe5dp10d58djsn5fec94fe1161",
      "X-RapidAPI-Host": "coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
