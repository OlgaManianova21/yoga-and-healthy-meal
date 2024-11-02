
import React from "react";
import './Home.css';
import '../Footer/Footer.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => (
<div className="main-content">
<Carousel>
      <Carousel.Item >
        < img src="https://img.freepik.com/free-photo/portrait-woman-training-home_23-2148896483.jpg?t=st=1723548568~exp=1723552168~hmac=05b9dcfe0d9c83e9569b12ddef972091d92d0f3f003ed95f77737fb4bf2b7436&w=1480" width="100%" alt="foto"/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        < img src="https://img.freepik.com/free-photo/portrait-woman-training-home-mat_23-2148896487.jpg?t=st=1723548596~exp=1723552196~hmac=9c50b2a8ba582904655015fd865eee82d6e0763c6f6c3d5ecd36d0522805e552&w=1800" width="100%" alt="foto"/>

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        < img src="https://img.freepik.com/free-photo/portrait-woman-training-home_23-2148896495.jpg?t=st=1723548635~exp=1723552235~hmac=ba8078332ec006d6ca722fda4b1e90a4fe45293aa84de55dc86fc4e2e2ef5a15&w=1480" width="100%" alt="foto"/>
        
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

</div>
);
   

//ReactDOM.render(<Home />, document.getElementById('root'));*/
export default Home;