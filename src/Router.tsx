import { Routes, Route } from 'react-router-dom';
import { About } from './About';
import { Home } from './Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
