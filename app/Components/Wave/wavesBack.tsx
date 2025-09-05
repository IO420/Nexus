'use client';
import styles from './wave.module.css';

export default function WavesBackground() {
  return (
    <div className={styles.ocean}>
      <div className={styles.wave}></div>
      <div className={styles.wave}></div>
      <div className={styles.wave}></div>
    </div>
  );
}
