import _ from 'lodash';
import '../assets/styles/main.css'

function createHead() {
    const head = document.createElement('div');
    head.id = 'header';
    const title = document.createElement('div');
    const buttons = document.createElement('div');
    buttons.classList.add('button');

    const Title_name = document.createElement('h1');
    Title_name.textContent = 'CodeCafe';
    title.appendChild(Title_name);
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('button');
    homeButton.id = 'Home';
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('button');
    menuButton.id = 'Menu';
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('button');
    contactButton.id = 'Contact';

    buttons.appendChild(homeButton);
    buttons.appendChild(menuButton);
    buttons.appendChild(contactButton);

    head.appendChild(title);
    head.appendChild(buttons);
    return head;
}


function createBody() {
    const body = document.createElement('div');
    body.id = 'content';


    const description = document.createElement('p');
    description.classList.add('desc');
    description.textContent = "Welcome to CodeCafe! We serve the best coffee and pastries while providing a cozy coding environment for developers.";


    body.appendChild(description);

    return body;
}
function createFooter() {
    const footer = document.createElement('div');
    footer.id = 'footer';


    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/Shree-77';
    githubLink.innerHTML = '&copy; Shree-77';


    footer.appendChild(githubLink);

    return footer;
}



function loadHome() {
    const Webpage = document.createElement('div');
    Webpage.appendChild(createHead());
    Webpage.appendChild(createBody());
    Webpage.appendChild(createFooter());
    return Webpage;
}
export { loadHome, createHead }