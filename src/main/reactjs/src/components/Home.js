import React from 'react';
import '../App.css';
import img from '../2.gif';
import img1 from '../1.gif';
import img2 from '../3.gif';
import img3 from '../4.gif';

function Home(props) {
    return (
        <div>
            <div className="App">
                <img alt='' src={img} width={300} height={300} border="1" className=''/>
                <img alt='' src={img1} width={300} height={300} border="1" className=''/>
                <img alt='' src={img2} width={300} height={300} border="1" className=''/>
                <img alt='' src={img3} width={300} height={300} border="1" className=''/>
                <br></br>
                <br></br>
                <h1 className='bb2'>당신의 방문을 환영합니다!</h1>
            </div>
        </div>
    );
}

export default Home;