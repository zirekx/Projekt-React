import Header from './components/Header'; 
import React from 'react';
import './Profile.css';

import { Tabs } from 'antd';

const App: React.FC = () => (
    <div>
        <Header></Header>
 

  <div className='profile-container'>
        <div className='column-one'>
            <h2>Personal Info</h2>
            <ul>
                <li>
                    <h3>Imię</h3>
                    <span>Patricia Lebsack</span>
                </li>
                <li>
                    <h3>Imię</h3>
                    <span>Patricia Lebsack</span>
                </li>
                <li>
                    <h3>Imię</h3>
                    <span>Patricia Lebsack</span>
                </li>
                <li>
                    <h3>Imię</h3>
                    <span>Patricia Lebsack</span>
                </li>
                <li>
                    <h3>Imię</h3>
                    <span>Patricia Lebsack</span>
                </li>
            </ul>
        </div>
        <div className='column-two'>
        <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: `Tab ${id}`,
        key: id,
        children: `Content of Tab Pane ${id}`,
      };
    })}
  />
        </div>
  </div>
  </div>
);

export default App;