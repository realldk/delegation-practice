function handler(){
  console.log('hit !');
  css('.second', 'display', 'none');
}

// 지우는 유틸함수? 여기 모르겠음 클로저가 자기가 살았던 환경을 기억하기 때문에 쓴다.
function bindEvent(node, type, handler){
  if(typeof node === 'string'){
    node = getNode(node);
  }
  // mouseenter 등 입력한 것을 찾는다. test는 includes와 같다
  if(!(/mouseenter|click|mousemove|mouseleave/g.test(type))){
    typeError('bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.');
  }
  node.addEventListener(type, handler);

  return ()=> node.removeEventListener(type, handler);
}
// 클
const off = bindEvent('.first', 'click', handler)

bindEvent('.second', 'click', off);