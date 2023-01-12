
// insertBefore
function insertBefore(node, text) {
  if (typeof node === 'string') node = getNode(node);
  
  if (node.nodeType !== document.ELEMENT_NODE) typeError('insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  node.insertAdjacentHTML('beforebegin', text);
}

// insertFirst
function insertFirst (node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) typeError('insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  node.insertAdjacentHTML('afterbegin', text);
}

// insertLast
function insertLast (node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) typeError('insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  node.insertAdjacentHTML('beforeend', text);
}

// insertAfter
function insertAfter (node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) typeError('insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  node.insertAdjacentHTML('afterend', text);
}