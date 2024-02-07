import './PortfolioNavBar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Pdf from '../images/Resume.pdf'

function PortfolioNavBar() {
  return (
    <div className='bar'>
      <a href='/' className='home-link'><h1 className='nav-title'>Portfolio</h1></a>
      <nav className='bar-contents'>
        <AnchorLink offset='50' href='#skills'><span>.01</span> Skills</AnchorLink>
        <AnchorLink offset='50' href='#projects' ><span>.02</span> Projects</AnchorLink>
        <AnchorLink offset='50' href='#ContactInfo' ><span>.03</span> Contact</AnchorLink>
        <a href= {Pdf}>Resume</a>
      </nav>
      <div className='spacer'></div>
    </div>
  );
}

export default PortfolioNavBar;
