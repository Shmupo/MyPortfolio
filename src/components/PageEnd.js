import './PageEnd.css'

function PageEnd() {
    return (
        <div className='EndPage' id='ContactInfo'>
            <div className='end-contents'>
                <div className='contact-box'>
                    <h2 className='contact-head'>Contact Info</h2>
                    <a className='git' href='https://github.com/Shmupo' target='_blank'>Github</a>
                    <div className='contact-info'>
                        <p class='email-header'>Get in touch</p>
                        <p class='email'>andrewdoan8b@gmail.com</p>
                    </div>
                </div>
                <div className='creation-info'>
                    <h2>Made by <span>me</span> using <a className='react-link' href='https://react.dev/' target='_blank'>React</a></h2>
                </div>
            </div>
        </div>
    );
}

export default PageEnd;