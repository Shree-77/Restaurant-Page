import { loadHome } from "./pages/homePage";
import { contact } from "./pages/Contact";

const ContentDiv = document.getElementById('content');
ContentDiv.appendChild(loadHome());

const btn = document.querySelectorAll('.button');

btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id === 'Home') {
            ContentDiv.innerHTML = '';
            ContentDiv.appendChild(loadHome());
        } else if (e.target.id === 'Contact') {
            ContentDiv.innerHTML = '';
            ContentDiv.appendChild(contact());
        }
    });
});
