import React, { useContext } from 'react';
import './Projects.css';
import { Context, TitleParagraph, Carousel, Image, Button } from '../../exports/exports';
import { EyeFill } from 'react-bootstrap-icons';

const Projects = () => {

    const context = useContext(Context);
    const themeState = context.state.themeState;
    const projectsParagraph = 'Aquí puedes ver algunos de los proyectos que he realizado:';
    const carouselContainerStyles = { display: 'flex', justifyContent: 'center', alignItems: 'center' };

    let projectCovers
        // = [
        //     { imageLink: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F004%2F725%2F616%2Foriginal%2Fai-artificial-intelligence-development-concept-with-programmer-develop-robot-for-website-template-or-landing-homepage-free-vector.jpg&f=1&nofb=1&ipt=f5d5354779ab2134a81c3439716673ead356ee0ec8da5eaf954fa48fece78342&ipo=images' },
        //     { imageLink: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2F2fd33491955009.5e3efde5d47d1.jpg&f=1&nofb=1&ipt=fa276cac07e2d6f2156f907376437b153fa5c4f4f7d171212cfed3d5c9dc9aad&ipo=images' },
        //     { imageLink: 'https://img.freepik.com/free-vector/landing-page-web-poster-design-with-3d-text-ai-processor-chip-human-robotic-face-artificial-intelligence-ai-concept_1302-19652.jpg?size=626&ext=jpg' },
        //     { imageLink: 'https://i.ytimg.com/vi/Mu4xZAE3FTg/maxresdefault.jpg' }
        // ]
        ;

    return (
        <div className={`projects ${themeState}`}>
            <div className='projects-title-paragraph-container'>
                <TitleParagraph
                    title='Proyectos'
                    paragraph={projectsParagraph}
                />
            </div>
            <div
                className='carousel-container'
                style={(projectCovers) ? carouselContainerStyles : {}}
            >
                {
                    (projectCovers) ?
                        (
                            <Carousel projectCovers={projectCovers} />
                        ) :
                        (
                            <div className='no-projects-yet-loading-view-source-code-container'>
                                <p className='no-projects-yet-paragraph'>
                                    Aún no hay proyectos para mostrar, pero muy pronto los añadiré,
                                    en cualquier caso, puedes ver el código fuente de este proyecto.
                                </p>
                                <div className='loading-gif-container'>
                                    <Image
                                        boxShadow={true}
                                        image='https://media.tenor.com/Cjh_A7l7oeUAAAAM/loading-now-loading.gif'
                                        alt='Loading GIF'
                                    />
                                </div>
                                <a
                                    className='view-source-code-link'
                                    href='https://github.com/aycp-developer/aycp-developer'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button
                                        backgroundColor={(themeState == 'dark') ? 'white' : 'black'}
                                        color={(themeState == 'dark') ? 'black' : 'white'}
                                        icon={<EyeFill height='100%' width='100%' />}
                                        text='VER CÓDIGO FUENTE'
                                    />
                                </a>
                            </div>
                        )
                }
            </div>
        </div>
    );

};

export default Projects;