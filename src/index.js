import _ from 'lodash';
import './style.css';
import Icon from './image.png';

function component() {
  const element = document.createElement('div');

  // Lodash ( 目前通过一个script 脚本引入)，对于执行这一行是必须的
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', ' webpack'], ' ');
  element.classList.add('hello');

  // 将图片添加至现有的 div
  let myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}
document.body.appendChild(component());
