//public/Items.json
const ITEMS = {
  items: {
    bootstrap: [],
    elastic: [],
    responsive: [
      {
        id: 1,
        title: "Swiper Carousel Example",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        imageUrl:
          "https://res.cloudinary.com/kizmelvin/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1597364662/kizmelvin/ussama-azam-hlg-ltdCoI0-unsplash_ttfjib.jpg",
      },
      {
        id: 2,
        title: "Swiper Carousel Example",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        imageUrl:
          "https://res.cloudinary.com/kizmelvin/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1645530199/kizmelvin/Carousel%20assets/slim-emcee-jzdOX0XkXr8-unsplash_zocsdq.jpg",
      },
      {
        id: 3,
        title: "Swiper Carousel Example",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        imageUrl:
          "https://res.cloudinary.com/kizmelvin/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1645534321/kizmelvin/Carousel%20assets/luwadlin-bosman-J1oObe7WWjk-unsplash_f56oh3.jpg",
      },
      {
        id: 3,
        title: "Swiper Carousel Example",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        imageUrl:
          "https://res.cloudinary.com/kizmelvin/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1645534321/kizmelvin/Carousel%20assets/luwadlin-bosman-J1oObe7WWjk-unsplash_f56oh3.jpg",
      },
      {
        id: 3,
        title: "Swiper Carousel Example",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        imageUrl:
          "https://res.cloudinary.com/kizmelvin/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1645534321/kizmelvin/Carousel%20assets/luwadlin-bosman-J1oObe7WWjk-unsplash_f56oh3.jpg",
      },
    ],
  },
};
//carousels/Responsive.js
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/test.module.scss";


export default function ResponsiveCarousel() {
  //   const { responsive } = ITEMS;


  return (
    <div className={styles.container}>
      <Carousel
        showArrows={true}
        showIndicators={false}
        infiniteLoop={true}
        dynamicHeight={false}
        className={styles.mySwiper}
      >
        {ITEMS.items.responsive.map((item) => (
          <div key={item.id} className={styles.swipItem}>
            {ITEMS.items.responsive.map((item,index) => (
              <div key={index}>
                <div className={styles.imgBox}>
                  <img src={item.imageUrl} alt="slides" />
                </div>
                <div className={styles.detail}>
                  <h2>{item.title}</h2>
                  {/* <p>{item.text}</p> */}
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}


// //public/Items.json

// import MobileCarousel from "@/components/mobileCarousel";
// import styles from "../styles/test.module.scss";
// import { useState } from "react";


// export default function ResponsiveCarousel() {
//   //   const { responsive } = ITEMS;

//   const [data, setData] = useState([]);
  
//   const some = () => (fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_UNRESTRICTED_API_KEY}&part=snippet&type=video&maxResults=10&q=random`)
//     .then(response => response.json())
//     .then(data => {
//       const videoLinks = data.items.map(item => `https://www.youtube.com/watch?v=${item.id.videoId}`);
//       console.log(videoLinks); // log the array of video links to the console
//       setData(videoLinks)
//     })
//     .catch(error => {
//       console.log(error);
//     }))

    
//   return (
//     <div className={styles.container}>
//       {data.length > 0 ? <MobileCarousel data={data}/> : <div>loading...</div>}
      

//     </div>
//   );
// }

// import React from 'react';
// import MobileCarousel from "@/components/mobileCarousel";


// function MyComponent({ videoLinks }) {
//   return (
//     <div>
//       {/* {videoLinks.map((link, index) => (
//         <div key={index}>
//           <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
//         </div>
//       ))} */}
//       <MobileCarousel data={videoLinks}/>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   try {
//     const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_UNRESTRICTED_API_KEY2}&part=snippet&type=video&maxResults=10&q=random`);
//     const data = await response.json();
//     const videoLinks = data.items ? data.items.map(item => `https://www.youtube.com/watch?v=${item.id.videoId}`) : [];
//     console.log(data)

//     return {
//       props: {
//         videoLinks
//       }
//     };
//   } catch (error) {
//     console.log(error);

//     return {
//       props: {
//         videoLinks: []
//       }
//     };
//   }
// }

// export default MyComponent;




// import React, {useState, useRef} from "react";
// import styles from "../styles/carousel.module.scss";
// import { createClient } from 'pexels';


// const MOVIES = [
//   {
//     id: 1,
//     title: "Movie 1",
//     imageUrl: "https://placeimg.com/640/480/animals?v=1",
//   },
//   {
//     id: 2,
//     title: "Movie 2",
//     imageUrl: "https://placeimg.com/640/480/animals?v=2",
//   },
//   {
//     id: 3,
//     title: "Movie 3",
//     imageUrl: "https://placeimg.com/640/480/animals?v=3",
//   },
//   {
//     id: 4,
//     title: "Movie 4",
//     imageUrl: "https://placeimg.com/640/480/animals?v=4",
//   },
//   {
//     id: 5,
//     title: "Movie 5",
//     imageUrl: "https://placeimg.com/640/480/animals?v=5",
//   },
//   {
//     id: 6,
//     title: "Movie 6",
//     imageUrl: "https://placeimg.com/640/480/animals?v=6",
//   },
//   {
//     id: 7,
//     title: "Movie 7",
//     imageUrl: "https://placeimg.com/640/480/animals?v=7",
//   },
//   {
//     id: 8,
//     title: "Movie 8",
//     imageUrl: "https://placeimg.com/640/480/animals?v=8",
//   },
//   {
//     id: 9,
//     title: "Movie 9",
//     imageUrl: "https://placeimg.com/640/480/animals?v=9",
//   },
//   {
//     id: 10,
//     title: "Movie 10",
//     imageUrl: "https://placeimg.com/640/480/animals?v=10",
//   },
//   {
//     id: 11,
//     title: "Movie 11",
//     imageUrl: "https://placeimg.com/640/480/animals?v=11",
//   },
//   {
//     id: 12,
//     title: "Movie 12",
//     imageUrl: "https://placeimg.com/640/480/animals?v=12",
//   },
//   {
//     id: 13,
//     title: "Movie 13",
//     imageUrl: "https://placeimg.com/640/480/animals?v=13",
//   },
//   {
//     id: 14,
//     title: "Movie 14",
//     imageUrl: "https://placeimg.com/640/480/animals?v=14",
//   },
//   {
//     id: 15,
//     title: "Movie 15",
//     imageUrl: "https://placeimg.com/640/480/animals?v=15",
//   },
//   {
//     id: 16,
//     title: "Movie 16",
//     imageUrl: "https://placeimg.com/640/480/animals?v=16",
//   },
//   {
//     id: 17,
//     title: "Movie 17",
//     imageUrl: "https://placeimg.com/640/480/animals?v=17",
//   },
//   {
//     id: 18,
//     title: "Movie 18",
//     imageUrl: "https://placeimg.com/640/480/animals?v=18",
//   },
//   {
//     id: 19,
//     title: "Movie 19",
//     imageUrl: "https://placeimg.com/640/480/animals?v=19",
//   },
//   {
//     id: 20,
//     title: "Movie 20",
//     imageUrl: "https://placeimg.com/640/480/animals?v=20",
//   },
//   {
//     id: 21,
//     title: "Movie 21",
//     imageUrl: "https://placeimg.com/640/480/animals?v=21",
//   },
//   {
//     id: 22,
//     title: "Movie 22",
//     imageUrl: "https://placeimg.com/640/480/animals?v=22",
//   },
//   {
//     id: 23,
//     title: "Movie 23",
//     imageUrl: "https://placeimg.com/640/480/animals?v=23",
//   },
//   {
//     id: 24,
//     title: "Movie 24",
//     imageUrl: "https://placeimg.com/640/480/animals?v=24",
//   },
// ];

// const MobileCarousel1 = (props) => {
//   const itemsPerPage = MOVIES.length;
//   const [videoCollection, setVideoCollection] = useState(null);
//   const videoRefs = [
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null)
//   ];

//   const handleVideoGenerate = (e) => {
    

//     client.videos.popular({ per_page: 15 }).then(videos => {
      
//       const filteredVideos = videos.videos.filter((video) => {
//         console.log(video)
//         const { width, height } = video.video_files[0];
//         return width / height >= 1.5; // filter out videos with aspect ratio less than 1.5
//       });
//       console.log(filteredVideos)
//       localStorage.setItem('videos', JSON.stringify(filteredVideos));
//     });

    

//   }

//   const handlePlay = (event) => {
//     const index = event.target.id;
//     if (videoRefs[index] && videoRefs[index].current) {
//       videoRefs[index].current.play();
//     }
//     // console.log(index.target.id)
//   };
//   const handlePause = (event) => {
//     const index = event.target.id;
//     if (videoRefs[index] && videoRefs[index].current) {
//       videoRefs[index].current.pause();
//       // Reset the videoRef to null
//       videoRefs[index].current = null;
//     }
//   };
  
//   console.log(videoCollection)


//   const tempVideoSetter = () => {
//     setVideoCollection(JSON.parse(localStorage.getItem('videos')))
//     console.log(videoCollection)
//   }
//   // console.log(videoCollection.videos[0].video_files[0].link)
  

  

//   return (
//     <div className={styles.mobile_movies_carousel}>
//       <div className={styles.mobile_movies_carousel__container}>
//         {props.movies ? props.movies.slice(0, itemsPerPage).map((movie, index) => {
//           console.log(index)
//           return(
//           <div
//             key={index}
//             id={index}
//             className={`${styles.mobile_movies_carousel__movie} `}
//             style={{ backgroundImage: `url(${movie.image})` }}
//             onMouseEnter={handlePlay}
//             onMouseLeave={handlePause}
//           >
//             <video ref={videoRefs[index]} className={styles.video} width="160px" height="100%"><source src={movie.video_files[0].link} type="video/mp4"/></video>
//           </div>
//         )
//         }) : <div>Error loading video</div>}

//       </div>
//     </div>
//   );
// };

// export async function getStaticProps() {
  // try {
  //   const response = await fetch('https://api.pexels.com/videos/search?query=example&per_page=10', {
  //     headers: {
  //       Authorization: process.env.NEXT_PUBLIC_PEXELS_URL,
  //     },
  //   });

  //   const { videos } = await response.json();
  //   const {some} = 'hello`'

  //   return {
  //     props: {
  //       videos,
  //       some
  //     },
  //   };
  // } catch (error) {
  //   console.error(error);
  //   return {
  //     props: {
  //       videos: [],
  //       some
  //     },
  //   };
  // }
//   const text = 'Hello, world!';

//   return {
//     props: {
//       text
//     }
//   };
// }

// export default MobileCarousel1;


