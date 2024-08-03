import './index.css';

import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';

// createRoot를 사용하여 새로운 방식으로 설정
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
