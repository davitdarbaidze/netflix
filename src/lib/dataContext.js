import { useContext, createContext } from "react";
import { createClient } from "pexels";
import { useState, useEffect } from "react";

const CATEGORIES = [
  {
    id: 1,
    title: "You",
    imageUrl: "https://placeimg.com/640/480/animals?v=1",
  },
  {
    id: 2,
    title: "Movies",
    imageUrl: "https://placeimg.com/640/480/animals?v=2",
  },
  {
    id: 3,
    title: "Treanding Now",
    imageUrl: "https://placeimg.com/640/480/animals?v=3",
  },
  {
    id: 4,
    title: "Satires",
    imageUrl: "https://placeimg.com/640/480/animals?v=4",
  },
  {
    id: 5,
    title: "Abstract",
    imageUrl: "https://placeimg.com/640/480/animals?v=5",
  },
  {
    id: 6,
    title: "Landscape",
    imageUrl: "https://placeimg.com/640/480/animals?v=6",
  },
  {
    id: 7,
    title: "Dark",
    imageUrl: "https://placeimg.com/640/480/animals?v=7",
  },
  {
    id: 8,
    title: "Thriller",
    imageUrl: "https://placeimg.com/640/480/animals?v=8",
  },
  {
    id: 9,
    title: "Documentaries",
    imageUrl: "https://placeimg.com/640/480/animals?v=9",
  },
  {
    id: 10,
    title: "Disasters",
    imageUrl: "https://placeimg.com/640/480/animals?v=10",
  },
];

export const DataContext = createContext({ number: 0, enabled: false, data: [] });

export function useAllVideos() {

  const [allVideos, setAllVideos] = useState([]);
  const client = createClient(process.env.NEXT_PUBLIC_PEXELS_URL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = CATEGORIES.map(async (item) => {
          const searchVideos = await client.videos.search({ query: item.title, per_page: 24 });
          const searchVideosData = searchVideos.videos.map((video) => ({
            id: video.id,
            url: video.url,
            image: video.image,
            duration: video.duration,
            user: video.user,
            width: video.width,
            height: video.height,
            video_files: video.video_files[0],
          }));
  
          return { queryName: item.title, data: searchVideosData };
        });
  
        const results = await Promise.all(promises);
  
        const updatedArray = [...allVideos, ...results];
        setAllVideos(updatedArray);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  return allVideos;
}

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
          video_files: video.video_files[0],
          
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
  const allVideos = useAllVideos()

  return (
    <DataContext.Provider value={{ number: 0, enabled: true, data: videos, allData: allVideos }}>
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
