import 'bulma/css/bulma.css'; // if not a js file, need to specify extension

import ProfileCard from './ProfileCard';

// import images - must include extension in relative path import for images
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <div className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </div>

            <div className="container">
                <div className="section">   
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                                title='Alexa' 
                                handle='@alexa99' 
                                image={AlexaImage}
                                description="Alexa was created by Amazon and helps you buy things."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title='Cortana' 
                                handle='@cortana32' 
                                image={CortanaImage}
                                description="Cortana was created by Microsoft and helps you find things on your computer."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title='Siri' 
                                handle='@siri01' 
                                image={SiriImage}
                                description="Siri was created by Apple and helps you find things on your phone."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;