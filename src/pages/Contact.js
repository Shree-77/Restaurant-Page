import _ from 'lodash';
import { createHead, createFooter } from './homePage';


function contact() {
    const Content = document.createElement('div');
    Content.classList.add('ContactLines');

    const details = document.createElement('ul');
    const emailItem = document.createElement('li');
    emailItem.textContent = 'Email: example@example.com';

    const addressItem = document.createElement('li');
    addressItem.textContent = 'Address: 123 Street, City, Country';

    const hoursItem = document.createElement('li');
    hoursItem.textContent = 'Opening Hours: Mon-Fri 9:00 AM - 6:00 PM';


    details.appendChild(emailItem);
    details.appendChild(addressItem);
    details.appendChild(hoursItem);

    Content.appendChild(createHead());
    Content.appendChild(details);
    Content.appendChild(createFooter());


    return Content;
}
export { contact };