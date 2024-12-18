import { datadogRum } from '@datadog/browser-rum';
import React from "react";
import QuoteGenerator from "./components/QuoteGenerator";
import './App.css';

require('dotenv').config();
const app_id = process.env.REACT_APP_APPID;
const client_token = process.env.REACT_APP_CLIENT_TOKEN;

datadogRum.init({
  applicationId: `${app_id}`,
  clientToken: `${client_token}`,
  site: 'datadoghq.com',
  service: 'quotes-generator',
  env: 'dev',
  version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
});

function App() {
  return (
    <div>
      <QuoteGenerator />
    </div>
  );
}

export default App;
