import { useContext, createContext } from "react";
import { createClient } from "pexels";
import { useState, useEffect } from "react";

export const DataContext = createContext({ number: 0, enabled: false, data: [] });

export function useVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const client = createClient(process.env.NEXT_PUBLIC_PEXELS_URL);

      try {
        const videosRaw = await client.videos.popular({ per_page: 24 });
        const videosData = videosRaw.videos.map((video) => ({
          id: video.id,
          url: video.url,
          image: video.image,
          duration: video.duration,
          user: video.user,
          width: video.width,
          height: video.height,
        }));

        setVideos(videosData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVideos();
  }, []);

  return videos;
}

export function DataProvider({ children }) {
  const videos = useVideos();

  return (
    <DataContext.Provider value={{ number: 0, enabled: true, data: videos }}>
      {children}
    </DataContext.Provider>
  );
}


// import { useContext, createContext } from "react";

// const DataContext = createContext(
//     {
//         number: 0,
//         enabled: false,
//     }

// );

// export async function useData(){
//     return useContext(videosData)
// }

// export function DataProvider({ children }){
//     return <DataContext.Provider value={{ number: 0, enabled: true}}>{children}</DataContext.Provider>
// }
