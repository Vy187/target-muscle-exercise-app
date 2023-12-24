import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ExerciseList from './pages/ExerciseDetail';
import Home         from './pages/Home';
import Nav          from './components/Nav'
import NoMatch      from './pages/NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/exercise/:id" element={<ExerciseList />}/>
          <Route path='*' element={<NoMatch />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
