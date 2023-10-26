'use client';

import styles from './page.module.css';
import { EnvironmentForm } from '@/app/component/EnvironmentForm';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <EnvironmentForm/>
      </div>
    </main>
  );
}
