import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { ShareNumbersContextProvider } from './context/ShareContext';

export function App() {
  return (
    <BrowserRouter>
      <ShareNumbersContextProvider>
        <Router />
      </ShareNumbersContextProvider>
    </BrowserRouter>
  );
}
