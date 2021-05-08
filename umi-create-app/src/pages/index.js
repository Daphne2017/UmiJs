import * as React from 'react';
import styles from './index.css';
import Link from 'umi/link';
import { DatePicker } from 'antd';
import { FormattedMessage } from 'umi-plugin-locale'
import axios from 'axios'
export default function() {
  const getTopisList = async () => {
  axios.get('/api/users').then((res)=>{
    console.log('res',res);

    });
   
  };

  React.useEffect(() => {
    getTopisList({});
  }, []);

  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
          <FormattedMessage id='WELCOME' values={{name: '小伙子'}}/>
          <DatePicker />
          <Link to="/user">Go to user page</Link>
        </li>
      </ul>
    </div>
  );
}
