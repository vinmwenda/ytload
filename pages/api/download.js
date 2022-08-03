const ytdl = require("ytdl-core");
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      let url = await req.body;
      let data = {
        videoFormats: [],
        audioFormat: [],
      };
      const URL = url.data;
      const info = await ytdl.getInfo(URL);

      data.videoFormats = ytdl.filterFormats(info.formats, "videoandaudio");
      data.audioFormat = ytdl.filterFormats(info.formats, "audioonly");
      data.title = info.videoDetails.title;
      data.image = info.videoDetails.thumbnails[0];
      data.url = info.videoDetails.video_url;
      console.log("post sent");
      res.status(200).send(data);
    } catch (err) {
      res.status(500).json({
        message:
          err.message === "read ECONNRESET"
            ? "Connection Not available Check your internet!!"
            : err.message,
      });

      console.log(err.message);
    }
  }
  if (req.method === "GET") {
    const { url, tag, name, size, type } = req.query;
    try {
      const info = await ytdl.getInfo(url);
      const format = ytdl.chooseFormat(info.formats, { quality: tag });
      res.setHeader("Content-Type", "video/mp4");
      res.setHeader("Content-Length", `${size}`);
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${name}.${type}"`
      );

      ytdl(url, {
        format,
      }).pipe(res);

      console.log("download started");
    } catch (err) {
      const error = {};
      error.message = err.message;
      res.send(error);
      console.log(err.message);
    }
  }
}
export const config = {
  api: {
    responseLimit: false,
  },
};
