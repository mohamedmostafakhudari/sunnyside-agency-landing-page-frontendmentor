import React from "react";

export default function Gallery() {
  return (
    <>
      <div className="basis-1/2 md:flex-1">
        <picture>
          <source
            srcSet="./assets/images/desktop/image-gallery-milkbottles.jpg"
            media="(min-width: 768px)"
          />
          <img
            src="./assets/images/mobile/image-gallery-milkbottles.jpg"
            alt="milkbottles"
          />
        </picture>
      </div>
      <div className="basis-1/2 md:flex-1">
        <picture>
          <source
            srcSet="./assets/images/desktop/image-gallery-orange.jpg"
            media="(min-width: 768px)"
          />
          <img
            src="./assets/images/mobile/image-gallery-orange.jpg"
            alt="orange"
          />
        </picture>
      </div>
      <div className="basis-1/2 md:flex-1">
        <picture>
          <source
            srcSet="./assets/images/desktop/image-gallery-cone.jpg"
            media="(min-width: 768px)"
          />
          <img src="./assets/images/mobile/image-gallery-cone.jpg" alt="cone" />
        </picture>
      </div>
      <div className="basis-1/2 md:flex-1">
        <picture>
          <source
            srcSet="./assets/images/desktop/image-gallery-sugarcubes.jpg"
            media="(min-width: 768px)"
          />
          <img
            src="./assets/images/mobile/image-gallery-sugar-cubes.jpg"
            alt="sugarcubes"
          />
        </picture>
      </div>
    </>
  );
}
