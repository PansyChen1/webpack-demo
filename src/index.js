function component() {
  const element = document.createElement('div');

  // Lodash ( 目前通过一个script 脚本引入)，对于执行这一行是必须的
  element.innerHTML = _.join(['Hello', 'webpack'], '');

  return element;
}
document.body.appendChild(component());
