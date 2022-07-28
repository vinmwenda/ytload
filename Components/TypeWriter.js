import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Paste your youtube Video link in the search box below 👇️",
          "Click the search button to view the availabe formats for download",
          "Click the download button to download your Video",
          "Enjoy watching 📺️",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default TypeWriter;
