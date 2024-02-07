//import './Projects.css';

import WateredDownIcon from '../images/WateredDownIcon.png';
import CheckersIcon from '../images/CheckersIcon.png';
import PacMoonIcon from '../images/PacMoonIcon.png';

import WDGif from '../gifs/WateredDown.gif';
import CheckersGif from '../gifs/Checkers.gif';
import PacmoonGif from '../gifs/PacMoon.gif';

function Projects() {
    return (
        <div id='projects'>
            <h1 class='title'>Projects</h1>
            <section className='projects-container'>
                <div className='project-row'>
                    <article id='WateredDownBlock' className='block'>
                        <div className='project-header'>
                            <img src={WateredDownIcon} className='project-image' />
                            <h2>Watered Down</h2>
                        </div>
                        <p className='description'>
                        Artillery-like video game created using Godot.
                        Tanks fire water. Water is implemented using smoothed-particle hydrodynamics.
                        Performance is optimized through thread-pooling and a spatial hash grid.
                        </p>
                        <form action='https://github.com/Shmupo/WateredDown' target='_blank' class='project-link'>
                            <input type='submit' value='View Project' className='project-button' />
                        </form>
                    </article>
                    <img src={WDGif} className='project-gif' />
                </div>
                
                <div className='project-row hide-left' >
                    <img src={CheckersGif} className='project-gif hug-right' />
                    <article id='CheckersBlock' className='reverse block'>
                        <div className='project-header'>
                            <img src={CheckersIcon} className='project-image' />
                            <h2>Checkers</h2>
                        </div>
                        <p className='description'>
                        Checkers game written in python and played through the terminal. Includes all the
                        thrilling features of checkers, such as the queen piece and chain-jumping.
                        </p>
                        <form action='https://github.com/Shmupo/CheckersPVPTerminal' target='_blank' class='project-link'>
                            <input type='submit' value='View Project' className='project-button' />
                        </form>
                    </article>
                </div>

                <div className='project-row'>
                    <article id='PacMoonBlock' className='block'>
                    <div className='project-header'>
                            <img src={PacMoonIcon} className='project-image' />
                            <h2>PacMoon</h2>
                        </div>
                        <p className='description'>
                        Pacman written in python using pygame. The ghosts navigate using A* search algorithms. The map
                        is represented as a grid that contains pellets and a power up consumable.
                        </p>
                        <form action='https://github.com/Shmupo/PacManPygame' target='_blank' class='project-link'>
                            <input type='submit' value='View Project' className='project-button' />
                        </form>
                    </article>
                    <img src={PacmoonGif} className='project-gif' />
                </div>
            </section>
        </div>
    );
}

export default Projects;