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
