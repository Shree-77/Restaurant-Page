import { loadHome } from "./pages/homePage";
import { contact } from "./pages/Contact";

const ContentDiv = document.getElementById('content');
const home = document.getElementById('Home');
const cont = document.getElementById('Contact');

home.addEventListener('click', init);
cont.addEventListener = ('click', loadContact);

ContentDiv.appendChild(init());



function init() {
    ContentDiv.innerHTML = '';
    return loadHome();
}

function loadContact() {
    ContentDiv.innerHTML = '';
    return contact();
}

