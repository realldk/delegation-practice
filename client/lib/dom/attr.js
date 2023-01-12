
function getAttr(node, prop) {
  if (typeof node === 'string') {
    node = getNode(node);
    console.log(node);
  }
  return node.getAttribute(prop);
}
// getAttr('.first','class') // first

// const second = getNode('.second');

//set 함수 만들기

function setAttr(node, prop, value) {
  if (typeof node === 'string') node = getNode(node);
  if(typeof prop !== 'string') throw new TypeError('setAttr 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  // dataset으로 처리한 것 처럼 만들기 위해서
  if(prop.includes('data')) {
    let rest = prop.slice(5);
    node.dataset[rest] = value;  //[]를 쓰는 이유 복습
  }
  if(!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.');
  node.setAttribute(prop, value);
}

//get, set 한 번에 다 쓸 수 있는 attr 함수

function attr(node, prop, value) {
  // if(!value){
  //   return getAttr(node, prop);
  // } else {
  //   setAttr(node, prop, value);
  // }
  return !value ? getAttr(node,prop) : setAttr(node,prop,value);
}