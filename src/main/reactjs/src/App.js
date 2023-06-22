import './App.css';
import img from './2.gif';
import img1 from './1.gif';
import img2 from './3.gif';
import img3 from './4.gif';

function App() {
  return (
    <div className="App">
      <img alt='' src={img} width={300} border="1" className=''/>
      <img alt='' src={img1} width={300} border="1" className=''/>
      <img alt='' src={img2} width={300} border="1" className=''/>
      <img alt='' src={img3} width={300} border="1" className=''/>
      <br></br><br></br>
      <h1 className='bb2'>Docker 배포 성공했기 때문에 이제 숨 쉰다!</h1>
    </div>
  );
}

export default App;
