import React from "react";
import Image from "./Image";
import Pagination from "./Pagination";

export default function Result(props) {
  const showImages = () => {
    const images = props.images;

    if (images.length === 0) return null;

    return (
      <React.Fragment>
        <div className="col-12 p5 row">
          {images.map((img) => (
            <Image key={img.id} image={img} />
          ))}
        </div>
        <Pagination previusPage={props.previusPage} nextPage={props.nextPage} />
      </React.Fragment>
    );
  };
  return <React.Fragment>{showImages()}</React.Fragment>;
}
