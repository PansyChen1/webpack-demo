import _ from 'lodash';
import './style.css'

function component() {
  const element = document.createElement('div');

  // Lodash ( 目前通过一个script 脚本引入)，对于执行这一行是必须的
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', ' webpack'], ' ');
  element.classList.add('hello');

  return element;
}
document.body.appendChild(component());
