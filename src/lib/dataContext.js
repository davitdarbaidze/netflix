import { useContext, createContext } from "react";
import { createClient } from "pexels";
import { useState, useEffect } from "react";

export const DataContext = createContext({ number: 0, enabled: false, data: [] });

export async function useData() {
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

    return videosData;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function DataProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    useData().then((videosData) => setData(videosData));
  }, []);

  return (
    <DataContext.Provider value={{ number: 0, enabled: true, data }}>
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
