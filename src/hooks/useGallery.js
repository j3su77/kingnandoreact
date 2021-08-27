import { useEffect, useState } from "react";
import axios from "axios";

export const useGallery = () => {
  const apiURL = "http://flowradio.tk";

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true)
      await axios
        .get(apiURL + "/api/gallery")
        .then((res) => setImages(res.data))
        .catch((err) => console.log(err));
      console.log(images);
      setIsLoading(false)
    };
    
    getImages();
  }, []);

 

  return {
    images,
    apiURL,
    isLoading
  };
};
