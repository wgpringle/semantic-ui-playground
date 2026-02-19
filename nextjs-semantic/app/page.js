import React from 'react';
import { Button } from 'semantic-ui-react';
import styles from './page.module.css';
import 'semantic-ui-css/semantic.min.css';

export default function Home() {
  return (
    <main className={styles.main}>something<Button primary>Click Me!</Button>
    </main>
  )
}
