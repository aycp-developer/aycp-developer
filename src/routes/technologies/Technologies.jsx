import React, { useContext, useState } from 'react';
import './Technologies.css';
import { ThemeContext, TitleParagraph, TechStackName, TechStack } from '../../exports/exports';

const Technologies = () => {

    const context = useContext(ThemeContext);
    const themeState = context.themeState.themeState;
    const technologiesParagraph = `Actualmente programo en el sistema operativo Ubuntu que es una distribución de GNU Linux, dicho esto,
    he depurado, testeado y trabajado con muchas tecnologías, pero me siento más cómodo desarrollando con las siguientes:`;
    const [isASelectedStack, setIsASelectedStack] = useState('programmingLanguages');
    const borderStyle = { border: ((themeState == 'dark') ? '0.15rem solid white' : '0.15rem solid black') };

    const programmingLanguages = [
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />,
            name: 'HTML5'
        },
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />,
            name: 'CSS3'
        },
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />,
            name: 'JAVA'
        },
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" />,
            name: 'KOTLIN'
        },
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />,
            name: 'JAVASCRIPT'
        },
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />,
            name: 'TYPESCRIPT'
        },
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />,
            name: 'SQL'
        },
        {
            icon: ((themeState == 'dark') ? <i className="devicon-bash-plain icon font-icon" /> : <i className="devicon-bash-plain colored font-icon" />),
            name: 'BASH'
        }
    ];

    const frameworksAndLibraries = [
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />,
            name: 'SPRING'
        },
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />,
            name: 'REACTJS'
        },
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />,
            name: 'NODEJS'
        },
        {
            icon: ((themeState == 'dark') ? <i className="devicon-express-original font-icon" /> : <i className="devicon-express-original colored font-icon" />),
            name: 'EXPRESSJS'
        }
    ];

    const databasesAndOrms = [
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />,
            name: 'POSTGRESQL'
        },
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />,
            name: 'MONGODB'
        },
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" />,
            name: 'HIBERNATE'
        },
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" style={{ height: '94%', width: '100%' }} />,
            name: 'MONGOOSE'
        }
    ];

    const vcsAndProjectHosting = [
        {
            icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />,
            name: 'GIT'
        },
        {
            icon: ((themeState == 'dark') ? <i className="devicon-github-original font-icon" /> : <i className="devicon-github-original colored font-icon" />),
            name: 'GITHUB'
        }
    ];

    const getBorderStyle = (stackName) => {
        return (
            (stackName == isASelectedStack) ? { border: ((themeState == 'dark') ? '0.15rem solid white' : '0.15rem solid black') } : { border: '' }
        );
    };

    return (
        <div className={`technologies ${themeState}`}>
            <div className='technologies-title-paragraph-container'>
                <TitleParagraph
                    title='Tecnologías'
                    paragraph={technologiesParagraph}
                />
            </div>
            <div className='tech-stack-names-tech-stacks-container'>
                <div className='tech-stack-names-container'>
                    <TechStackName
                        onClick={() => setIsASelectedStack('programmingLanguages')}
                        borderStyle={getBorderStyle('programmingLanguages')}
                        name='LENGUAJES DE PROGRAMACIÓN'
                    />
                    <TechStackName
                        onClick={() => setIsASelectedStack('frameworksAndLibraries')}
                        borderStyle={getBorderStyle('frameworksAndLibraries')}
                        name='FRAMEWORKS Y LIBRERÍAS'
                    />
                    <TechStackName
                        onClick={() => setIsASelectedStack('databasesAndOrms')}
                        borderStyle={getBorderStyle('databasesAndOrms')}
                        name='BASES DE DATOS Y ORMs'
                    />
                    <TechStackName
                        onClick={() => setIsASelectedStack('vcsAndProjectHosting')}
                        borderStyle={getBorderStyle('vcsAndProjectHosting')}
                        name='VCS Y ALOJADOR DE PROYECTOS'
                    />
                </div>
                <div
                    className='tech-stacks-container'
                    style={borderStyle}
                >
                    {(isASelectedStack == 'programmingLanguages') && <TechStack icons={programmingLanguages} gap='10%' />}
                    {(isASelectedStack == 'frameworksAndLibraries') && <TechStack icons={frameworksAndLibraries} gap='10%' />}
                    {(isASelectedStack == 'databasesAndOrms') && <TechStack icons={databasesAndOrms} gap='10%' />}
                    {(isASelectedStack == 'vcsAndProjectHosting') && <TechStack icons={vcsAndProjectHosting} gap='20%' />}
                </div>
            </div>
        </div>
    );

};

export default Technologies;