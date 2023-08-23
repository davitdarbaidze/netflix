import { useContext, createContext } from "react";
import { createClient } from "pexels";
import { useState, useEffect } from "react";

export const CATEGORIES = [
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
  {
    id: 11,
    title: "Drama"
  },
  {
    id: 12,
    title: "Science Fiction"
  },
  {
    id: 13,
    title: "Horror"
  },
  {
    id: 14,
    title: "Romance"
  },
  {
    id: 15,
    title: "Thriller"
  },
  {
    id: 16,
    title: "Adventure"
  },
  {
    id: 17,
    title: "Fantasy"
  },
  {
    id: 18,
    title: "Animation"
  },
  {
    id: 19,
    title: "Family"
  },
  {
    id: 20,
    title: "Mystery"
  },
  {
    id: 21,
    title: "Crime"
  },
  {
    id: 22,
    title: "Documentary"
  },
  {
    id: 23,
    title: "History"
  },
  {
    id: 24,
    title: "War"
  },
  {
    id: 25,
    title: "Western"
  },
  {
    id: 26,
    title: "Musical"
  },
  {
    id: 27,
    title: "Sci-Fi"
  },
  {
    id: 28,
    title: "Superhero"
  }
];

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June']
export const DataContext = createContext({ number: 0, enabled: false, data: [] });

function getRandomCategories(categoriesList, count) {
  // Shuffle the categories list to get a random order
  const shuffledCategories = categoriesList.sort(() => Math.random() - 0.5);

  // Return the first 'count' categories from the shuffled list
  return shuffledCategories.slice(0, count);
}

async function getRandomWord () {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORD_URL}`,
    {
      method: "GET",
    }
    );
  const responseData = await response.json();

  return responseData
}

export function useAllVideos() {

  const [allVideos, setAllVideos] = useState([]);
  const [allVideoTitles, setAllVideoTitles] = useState([]);
  const client = createClient(process.env.NEXT_PUBLIC_PEXELS_URL);
  const randomCategories = getRandomCategories(CATEGORIES, 28);

  useEffect(() => {
    const fetchData = async () => {
      let videoTitles = []
      try {
        const promises = randomCategories.map(async (item) => {
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

export function useSingleVideo() {
  const [singleVideo, setSingleVideo] = useState([]);

  //select random title from categories and below make a search query
  //for single video
  const randomIndex = Math.floor(Math.random() * CATEGORIES.length);
  const randomTitle = CATEGORIES[randomIndex].title;


  useEffect(() => {
    async function fetchVideos() {
      const client = createClient(process.env.NEXT_PUBLIC_PEXELS_URL);

      try {
        const videosRaw = await client.videos.search({ query:  randomTitle,per_page: 1 });
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

        setSingleVideo(videosData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVideos();
  }, []);

  return singleVideo;
}

export function DataProvider({ children }) {
  const videos = useVideos();
  const allVideos = useAllVideos()
  const singleVideo = useSingleVideo()

  return (
    <DataContext.Provider value={{ number: 0, enabled: true, data: videos, allData: allVideos, singleVideo: singleVideo }}>
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
