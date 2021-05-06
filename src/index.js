


/*

//Esto es sin usar al React

const element = document.createElement('h1');
element.innerText = 'Saludos jairo , por el inicio en el curso de react';


const container = document.getElementById('app');

container.appendChild(element);
*/












// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);
/*
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, Platzi Badges!</h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
*/


/*Usando react */

import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './components/Badge';

import App from './components/App';
/*
const element = <h1>Hola jairo sigue asi y conseguiras camba</h1>;

const container= document.getElementById('app');
//              que     y el donde 
ReactDom.render(element,container);
*/




/*jsx es mas sencillo que usar React.createElement */
const jsx=(
    <div>
        <h1>Hola ,soy jairo</h1>
        <p>Soy ingeniero frontend</p>
    </div>
);
const container = document.getElementById('app');
//ReactDom.render(jsx,container);
/*
ReactDom.render(
<Badge 
    apellido="Cabello" 
    nombre="Ronal Jairo"
    perfil="https://2.gravatar.com/avatar/8a71787d12c0e8606b7c4eff6d50cb04?s=400&d=mm"
    carrera="Ingeniero de Sistemas"
    insta="Hiro23"
/>,container);
*/



//ReactDom.render(<BadgeNew />,container);

//Nota : badges es pagina como badgesNew ... 
ReactDom.render(<App />,container);









