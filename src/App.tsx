import * as elements from 'typed-html';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      {Counter()}
    </div>
  );
}

export default App;