
const createElement = {
    type : 'a',
    props :{
           href : 'https://www.google.com',
           target : '_blank'
    },
    children : 'click me to go to google'
}

const root = document.querySelector("#root");

reactElement(createElement,root);

function reactElement(elem,root){
  const createdElement = document.createElement(elem.type);
  createdElement.innerHTML = elem.children;

 /* createdElement.setAttribute('href',elem.props.href);
  createdElement.setAttribute('target',elem.props.target);
  root.appendChild(createdElement); */
  
  for(let prop in elem.props){
    
   createdElement.setAttribute(prop,elem.props[prop]);
    }
    root.appendChild(createdElement); 
}