import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import "../styles/footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className='icons'>
        <FacebookIcon className='icon'/>
        <InstagramIcon className='icon'/>
        <TwitterIcon className='icon'/>
      </div>
      <p>All rights deserved. | g4</p>
    </div>
  )
}

export default Footer