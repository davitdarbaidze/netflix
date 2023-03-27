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
            {ITEMS.items.responsive.map((item) => (
              <div>
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
