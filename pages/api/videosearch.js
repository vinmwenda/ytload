const ytsr = require("ytsr");

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("recieved");
    try {
      let searchString = await req.body.data;
      const filters1 = await ytsr.getFilters(searchString);
      const f1 = filters1.get("Type").get("Video");
      // const fs2 = await ytsr.getFilters(f1.url);
      // const f2 = fs2.get("Upload date").get("Today");
      const data = await ytsr(f1.url, { limit: 20 });

      console.log(data);
      res.send(data);
    } catch (err) {
      res.status(500).json({
        message:
          err.message === "read ECONNRESET"
            ? "Connection Not available Check your internet!!"
            : err.message,
      });
    }
  }

  // console.log(items);
  // console.log(`Executed in ${(d2 - d1) / 1000}`);
  // res.json(items);
}
