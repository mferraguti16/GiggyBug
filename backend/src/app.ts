import dotenv from 'dotenv';
import { link } from 'fs';

dotenv.config();                         /* charger les var. d'env */

console.log(process.env.DB_USER);
console.log(process.env.DB_HOST);
console.log(process.env.DB_NAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_PORT);

const headerLinks = document.getElementsByClassName('a__header');
const linkArray = Array.from(headerLinks);
linkArray.forEach((link) => {
    link.addEventListener('click', () =>{
        console.log('clicked');
        if (link.classList.contains('a__header_inactive')) {
            link.classList.remove('a__header_inactive');
        }
    })
})

launchPong(function () {
    function color-random() {
    }
    var num = Math.floor(Math.random() * Math.pow(2,24));
return '#' + ('00000' + num.toString(16)).substring(-6);
}

pongSettings.ball.size = 15;
pongSettings.ball.color = color-random;
pongSettings.ball.velocity[0] = 15;
pongSettings.ball.velocity[0] = 15;

})