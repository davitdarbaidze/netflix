import { createClient } from "pexels";

export const checkPasswordMatch = (current, newPassword) => {
  if (current === newPassword) {
    return true;
  }
  return false;
};

export default checkPasswordMatch;

export async function fetchData(url, token) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const responseData = await response.json();
  return responseData;
}

export async function fetchDataFromPexels(wordToSearch) {
  let fetchVideos = []

  
    const client = createClient(process.env.NEXT_PUBLIC_PEXELS_URL);
    //This variable will be a word which is extracted from link passed by parent
    //then removing domain of pexels and choosing random word

    try {
      const videosRaw = await client.videos.search({
        query: wordToSearch,
        per_page: 10,
      });
      const videosData = videosRaw.videos.map((video) => ({
        id: video.id,
        url: video.url,
        image: video.image,
        duration: video.duration,
        user: video.user,
        width: video.width,
        height: video.height,
        video_files: video.video_files[0],
      }));

      fetchVideos = [...videosData]
    } catch (error) {
      console.error(error);
    }

  

  return fetchVideos;
}

export function randomNumberGenerator(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function zoomOutHTMLBodyLevel(){
  window.document.body.style.zoom = 1;  
}