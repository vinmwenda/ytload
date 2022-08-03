import Image from "next/image";
import React from "react";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const NextImage = ({ imageUrl, title }) => {
  console.log(imageUrl);
  return (
    <Image
      loader={myLoader}
      src={imageUrl[0]}
      alt={title}
      width={300}
      height={300}
      layout="responsive"
    />
  );
};

export default NextImage;
