function addClass (node, value) {
  if(typeof node === 'string') node = getNode(node);
  if(typeof value !== 'string') typeError('addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  node.classList.add(value);
}

// removeClass 함수 만들기, 입력할 클래스명을 입력하지 않으면 선택한 클래스에 있는 걸 다 지우기
function removeClass (node, className) {
  if(typeof node === 'string') node = getNode(node);
  if(!className) {
    node.className = '';
    return;
  }
  if (typeof className !== 'string') typeError('removeClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  node.classList.remove(className);
}

//toggleClass 함수 만들기
function toggleClass (node, className) {
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string') typeError('toggleClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  node.classList.toggle(className);
}

//css정보를 가져오는 getCss 함수
function getCss (node, cssattr) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof cssattr !== 'string') typeError('getCss 함수의 두 번째 인자는 문자 타입이어야 합니다') ;
  if(!(cssattr in document.body.style)){
    syntaxError('getCSS 함수의 두 번째 인자인 cssattr은 유효한 css 속성이어야 합니다.');
  }
  return getComputedStyle(node)[cssattr];
}


// setCss 함수 만들기
function setCss (node, cssattr, value) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof cssattr !== 'string') typeError('setCss 함수의 두 번째 인자는 문자 타입이어야 합니다') ;
  if(!(cssattr in document.body.style)){
    syntaxError('setCSS 함수의 두 번째 인자인 cssattr은 유효한 css 속성이어야 합니다.');
  }
  if(!value) syntaxError('setCss 함수의 세 번째 인자는 필수값 입니다.');
  node.style[cssattr] = value;
}
// setCss('.first', 'color', 'red');

// get과 set을 한 번에 쓰는 함수 만들기
function css (node, cssattr, value) {
  if(!value) return getCss(node, cssattr);
  else setCss(node, cssattr, value);
}