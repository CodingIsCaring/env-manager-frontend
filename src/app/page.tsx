'use client';

import styles from './page.module.css';
import { Button } from '@/app/component/Button';
import { API } from '@/api/API';

export default function Home() {
  const handleOnClick = () => {
    console.log('You have clicked me!!');
    const request = {
      name: 'pruebita',
      description: 'chachi'
    };
    API.environment.create(request).then(() => console.log('Environment created'));
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Button title="Create env" onClick={handleOnClick}/>
      </div>
    </main>
  );
}
