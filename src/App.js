import './App.css';
import { CardSection } from './pages/CardSection/CardSection';
import { Intro } from './pages/Intro/Intro';
import { Navbar } from './pages/Navbar/Navbar';
import { Section_1 } from './pages/Section_1/Section_1';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <CardSection />
      <Section_1 />
    </div>
  );
}

export default App;
