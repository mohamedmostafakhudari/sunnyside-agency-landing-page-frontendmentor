import React from "react";

export default function SocialLink({ imgSrc, url }) {
  return (
    <li>
      <a href={url}>
        <img src={`./assets/images/${imgSrc}`} alt="" />
      </a>
    </li>
  );
}
