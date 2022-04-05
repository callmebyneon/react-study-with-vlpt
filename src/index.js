import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as Sentry from '@sentry/browser';
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: 'https://0905f3be6c9e447b9a43f18ab613d7d7@o1189419.ingest.sentry.io/6309807',
  integrations: [new BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

