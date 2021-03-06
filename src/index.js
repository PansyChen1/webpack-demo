import _ from 'lodash';
import printMe from "./print";
import './style.css';
import { cube } from "./math";

function component() {
  // const element = document.createElement('div');

  var btn = document.createElement('button');

  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  // Lodash ( 目前通过一个script 脚本引入)，对于执行这一行是必须的
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', ' webpack'], ' ');

  btn.innerHTML = 'Click me';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}
document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
