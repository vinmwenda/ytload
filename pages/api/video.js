const ytdl = require("ytdl-core");
export default async function handler(req, res) {
  if (req.method === "POST") {
    let url = await req.body;
    let data = {
      format: [],
    };
    const URL = `http://www.youtube.com/watch?v=${url.data}`;
    const info = await ytdl.getInfo(URL);
    let hd360 = ytdl.chooseFormat(info.formats, { quality: "18" });
    let fmt360 = ytdl.chooseFormat(info.formats, { quality: "135" });
    let lw360 = ytdl.chooseFormat(info.formats, { quality: "134" });
    data.format = [hd360, fmt360, lw360];
    data.title = info.videoDetails.title;
    data.image = info.videoDetails.thumbnails[0];
    data.url = info.videoDetails.video_url;
    console.log("post sent");
    res.send(data);
  }
  if (req.method === "GET") {
    const { url, tag, name, size } = req.query;
    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { quality: tag });
    // res.setHeader("Content-Length", `${format.contentLength}`);
    // res.header(
    //   "Content-Disposition",

    //   `attachment; filename="${info.title}.${format.container}"`
    // );
    (res.headers = [
      {
        key: "content-type",
        value: "video/mp4",
      },
      {
        key: "content-length",
        value: size,
      },
      {
        key: "content-disposition",
        value: `attachment; filename="${name}.mp4"`,
      },
    ]),
      // (res.header = {
      //   "content-type": "video/mp4",
      //   "content-length": size,
      //   "content-disposition": `attachment; filename="${name}.mp4"`,
      // }),
      ytdl(url, {
        format,
      }).pipe(res);
    console.log("download");
  }
  // if (data) {
  //   return data;
  // }
}
