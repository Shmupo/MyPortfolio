//import './Home.css';

import Projects from '../components/Projects' 
import Skills from '../components/Skills'

function Home() {
    return (
        <div>
            <div className='intro'>
                <div className='left-half'></div>
                <div className='right-half'>
                    <h1 className='name'>Andrew Doan</h1>
                    <h2 className='role'>&lt;Developer&gt;</h2>
                    <p className='description'></p>
                </div>
            </div>
            <section>
                <Skills />
                <Projects />
            </section>
        </div>
    );
}

export default Home;