import './Home.css';

import Projects from '../components/Projects' 
import Skills from '../components/Skills'

function Home() {
    return (
        <div>
            <div className='intro'>
                <div className='intro-content'>
                    <p className='greeting intro-text'>My name is</p>
                    <h1 className='home-name'>Andrew Doan</h1>
                    <div>
                        <p className='in-line intro-text'>I am a</p>
                        <h2 className='in-line role'> &lt;Developer&gt;</h2>
                    </div>
                    <p className='intro-text welcome'>Welcome to my portfolio</p>
                </div>
            </div>
            <div>
                <Skills />
                <Projects />
            </div>
        </div>
    );
}

export default Home;