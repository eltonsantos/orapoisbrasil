"use client";

import { useEffect, useState } from "react";

export default function BackgroundImage() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function fetchImage() {
      const response = await fetch(
        "https://picsum.photos/800/600"
      );
      setImageUrl(response.url);
    }
    fetchImage();
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
}
