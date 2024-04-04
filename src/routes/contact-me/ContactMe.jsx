import React, { useContext } from 'react';
import './ContactMe.css';
import { Context, TitleParagraph, Button } from '../../exports/exports';
import { ChatRightDotsFill, Linkedin, Whatsapp, Github, ChatLeftTextFill } from 'react-bootstrap-icons';
import ReactWhatsapp from 'react-whatsapp';

const ContactMe = () => {

    const context = useContext(Context);
    const themeState = context.state.themeState;
    const contactMeParagraph = 'Puedes contactarme a través de los siguientes medios:';

    return (
        <div className={`contact-me ${themeState}`}>
            <div className='contact-me-title-paragraph-container'>
                <TitleParagraph
                    title='Contáctame'
                    paragraph={contactMeParagraph}
                />
            </div>
            <div className='icons-buttons-container'>
                <div className='chat-right-dots-fill-icon-container'>
                    <ChatRightDotsFill
                        color={(themeState == 'dark') ? 'white' : 'black'}
                        height='100%'
                        width='100%'
                    />
                </div>
                <div className='buttons-container'>
                    <a
                        className='linkedin-link'
                        href='https://www.linkedin.com/in/yosimar-pineda-472862210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Button
                            className='linkedin-button'
                            backgroundColor='rgb(10,102,194)'
                            color='white'
                            icon={<Linkedin height='100%' width='100%' />}
                            text='LINKEDIN'
                        />
                    </a>
                    <ReactWhatsapp
                        className='react-whatsapp'
                        number='5617831603'
                        message='¡Hola, AYCP Developer!'
                    >
                        <div className='whatsapp-icon-container'>
                            <Whatsapp height='100%' width='100%' />
                        </div>
                        WHATSAPP
                    </ReactWhatsapp>
                    <a
                        className='github-link'
                        href='https://github.com/aycp-developer'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Button
                            className='github-button'
                            backgroundColor={(themeState == 'dark') ? 'white' : 'black'}
                            color={(themeState == 'dark') ? 'black' : 'white'}
                            icon={<Github height='100%' width='100%' />}
                            text='GITHUB'
                        />
                    </a>
                </div>
                <div className='chat-left-text-fill-icon-container'>
                    <ChatLeftTextFill
                        color={(themeState == 'dark') ? 'white' : 'black'}
                        height='100%'
                        width='100%'
                    />
                </div>
            </div>
        </div>
    );

};

export default ContactMe;
