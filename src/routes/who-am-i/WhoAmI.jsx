import React, { useContext } from 'react';
import './WhoAmI.css';
import { Context, TitleParagraph, Image } from '../../exports/exports';
import { programmer } from '../../assets/gifs/gifs';

const WhoAmI = () => {

    const context = useContext(Context);
    const themeState = context.state.themeState;
    const whoAmIParagraph = `Autodidacta, cortés y muy entusiasta por aprender. Estoy interesado en las Ciencias de la Computación
    y todo lo que gira en su órbita. Me siento fascinado con todo lo que engloba la programación web y
    el desarrollo de aplicaciones, como esta área complementa mis estudios, estoy ansioso por adquirir
    más experiencia en este campo. Por esta razón estoy buscando una compañía dispuesta a ofrecerme
    una ubicación entre sus desarrolladores, a cambio ofrecería mi todo compromiso y sería una adición
    agradable y amigable para su equipo. Por lo tanto, actualmente estoy en busca de un puesto como
    desarrollador Frontend, Backend o Fullstack.`;

    return (
        <div className={`who-am-i ${themeState}`}>
            <div className='who-am-i-title-paragraph-container'>
                <TitleParagraph
                    title='¿Quién soy?'
                    paragraph={whoAmIParagraph}
                />
            </div>
            <div className='programmer-image-container'>
                <Image
                    boxShadow={true}
                    image={programmer}
                    alt='Programmer GIF'
                />
            </div>
        </div>
    );

};

export default WhoAmI;