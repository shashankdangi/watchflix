import { useEffect, useState } from "react";

export const useGetMovie = (id: number | null, source: string) => {
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    if (!id || !source) return;

    const fetchVideo = async () => {
      const res = await fetch(`/api/video?id=${id}&source=${source}`);
      const data = await res.json();
      setLink(data.link);
    };

    fetchVideo();
  }, [id, source]);

  return { link };
};
