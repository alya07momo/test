import img1 from './Logo.png';
import img2 from './social-communication-3654546-3049735.png';
import img3 from './rocket 1.png';
import img4 from './customer 1.png';
import img5 from './feedback 1.png';

function App() {
  return (
    <>

      <div className="Appp">

        <img src={img1} />

        <div className="mom">
          <p> Home</p>
          <p>Service</p>
          <p>Portfolio</p>
          <p> Blog</p>
        </div>

        <button > Contact us</button>

      </div>

      <div className="mom1">
        <div className='mom2'>
          <h1> Smart Web
            Design Agency</h1>
          <p>We will provide best web design and business devlopment
            service clients expectation and satisfaction guarantee.</p>
          <button>Free consultation</button>
        </div>
        <div className='mom3'>
          <img src={img2} />
        </div>
      </div>

      <div className='mom4'>
        <h2>We Provide the Best Web services</h2>
      </div>

      <div className='mom5'>
        <div className='mom9'>
          <div className='mom6'>
            <img src={img3} />
          </div>
          <div className='mom7'>
            <img src={img4} />
          </div>
          <div className='mom8'>
            <img src={img5} />
          </div>
        </div>
        <div className='mom10'>
          <h3>5200+ </h3>
          <h3>500+ </h3>
          <h3>4500+ </h3>
        </div>
        <div className='mom11'>
          <p>Projects completed</p>
          <p> Active clients</p>
          <p>Happy clients</p>
        </div>
      </div>

      <div className='mom12'>
        <h2>What Service We’re Offering</h2>
      </div>
      <div className='mom13'>

        <div className='mom14'>

        </div>
        <div className='mom15'>

        </div>
        <div className='mom16'>

        </div>


      </div>















    </>
  );

}

export default App;
