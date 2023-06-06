
{/* importation de stylesheet de boostrap */}
import 'bootstrap/dist/css/bootstrap.min.css';
{/* importation de nos composants */}
import Headerr from './composent/Headerr';
import Formilo from './composent/Formilo';

function App() {
  return (
    <div>
    {/* appelation de nos composants*/}
      <Headerr/>
      <Formilo/>
    </div>
  );
}

export default App;
