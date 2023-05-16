import { useRouter } from 'next/router';
import React from "react";
import SiteHeader from '@/components/SiteHeader';
import styles from '@/styles/videos.module.scss';


export default function Video() {

  const router = useRouter();
  const { videoUrl } = router.query;

  return (
    <div>
      <SiteHeader/>
      <div className={styles.container}>
      
      
      </div>
    </div>
  );
}
