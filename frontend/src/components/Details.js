import React from 'react';
import { useParams } from 'react-router-dom';



export default function Details() {
    const { id } = useParams()

    return (
        <div className='mainCardContainer'>
            <div className="container">
                <div className="front side">
                    <div className="content">
                        <h1>Hakkam Abdullah</h1>
                        <p>I am a graphic designer and art director. I am as well specialised in front end web design, user experience and creating identities. Throughout my career, I have worked with companies of all shapes and sizes that enriched my experience
                        </p>
                    </div>
                </div>
                <div className="back side">
                    <div className="content">
                        <h1>Contact Me</h1>
                        <form></form>

                    </div>
                </div>
            </div>
        </div>
    )

}