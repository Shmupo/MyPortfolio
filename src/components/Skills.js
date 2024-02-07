//import './Skills.css'

import { ReactComponent as CsSvg } from '../images/c#.svg';
import { ReactComponent as CppIcon } from '../images/c++_icon.svg';
import { ReactComponent as DjangoIcon } from '../images/django_icon.svg';
import { ReactComponent as PythonIcon } from '../images/python_icon.svg';
import { ReactComponent as ReactIcon } from '../images/react_icon.svg';

import GodotIcon from '../images/Godot_icon.png';
import HtmlIcon from '../images/html5_icon.png';
import CssIcon from '../images/css5_icon.png';

function Skills() {
    return (
        <div id='skills'>
            <h1 className='title'>Skills</h1>
            <section className='icons'>
                    <CsSvg title='C#' />
                    <CppIcon title='C++' />
                    <PythonIcon title='Python' class='python' />
                    <DjangoIcon title='Django' />
                    <ReactIcon title='React' />
                <img src={GodotIcon} title='Godot' />
                <img src={HtmlIcon} title='Html 5' />
                <img src={CssIcon} title='CSS 3' />
            </section>
        </div>
    )
}

export default Skills;