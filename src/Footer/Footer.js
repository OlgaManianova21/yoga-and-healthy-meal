import imageOne from '../Footer/youtube.png';
import imageTwo from '../Footer/instagram.png';
import imageThree from '../Footer/facebook.png';
import './Footer.css';

function Footer () {
    return(
<div className="end">
  
   <div className='icons'>
   <p className="follow">Follow us</p>
    <img src={imageOne} width="30px" alt='youtube'/>
    <img src={imageTwo} width="30px" alt='instagram'/>
    <img src={imageThree} width="30px" alt='facebook'/>
 </div>

<div>
    <p className="follow">Our website s content for informational and eduction purposes only.</p>
    <p className="follow">All rights reserved</p>
    <p className="follow">2024</p>

</div>
</div>
    )
}
export default Footer;