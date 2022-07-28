import axios from "axios";

export async function getLinkInfo() {
  const res = await axios.get("http://localhost:3000/api/video");

  console.log("jjj", res.data);
  return JSON.stringify(res.data);
}
