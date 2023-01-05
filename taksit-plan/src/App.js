import './App.css';
import InstallmentForm from './components/Form/InstallmentInput';

function App() {
  return (
    <div>
      <div className="container mx-auto justify-center">
        <h1 className="text-4xl text-slate-800 drop-shadow-lg text-center font-bold py-5">Taksit Planı Hesaplayıcısı</h1>
        <InstallmentForm />
      </div>
    </div>

  );
}

export default App;
