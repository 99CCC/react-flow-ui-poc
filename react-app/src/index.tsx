import { createRoot } from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

import MainComponent from './comp/MainComponent';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Root element not found. Ensure you have <div id='root'></div> in index.html");
}

const root = createRoot(rootElement);

root.render(
  <FluentProvider theme={webLightTheme}>
    <MainComponent />
  </FluentProvider>
);
