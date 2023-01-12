


const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]

// 1. 네비게이션에게 이벤트를 건다.
// 2. 핸들러를 연결한다.
// 3. 이벤트 객체에서 타겟을 찾는다.

const navigation = getNode('.navigation');
// const list = getNodes('.navigation > li'); // ?'navigation > li'는 안될까, forEach가능
function handler(e) {
  // target에서 가장 가까운 li를 찾는다.
  let target = e.target.closest('li');
  if(!target) return; 
  let index = getAttr(target, 'data-index');
  // 선택한 li에게 is-active 클래스 넣어주기
  // 선택하지 않은 li의 is-active 클래스 제거하기
  let list = navigation.children; // 유사배열이라 forEach없음
  list = Array.from(list); // forEach쓰려고 배열로 만들어줌
  list.forEach(item => item.classList.remove('is-active'));
  target.classList.add('is-active');
  console.log(target);
  
  // 내가 선택한 li의 index를 찾기
  // getAttr이용해서 target의 index 알아내기
  // console.log(getAttr(target, 'data-index'));
  // dataset 이용해서 target의 index 알아내기
  // console.log(target.dataset.index);
  
  // 비주얼 안에있는 이미지를 가져온다.
  let visualImage = getNode('.visual img');
  // 이미지의 src 속성에 접근해서 src의 값을 index로 바꾼다.
  // attr(visualImage, 'src', `./assets/part01/visual${index}.jpg`); // 주소를 알고 있고, 순차적으로 정렬되어서 숫자 하나만 바꾸면 될 때
  attr(visualImage, 'src', `./assets/part01/${data[index-1].src}`); // data로 주어진 주소를 참조하는 방법
  // 이미지의 alt 바꾸기
  attr(visualImage, 'alt', data[index - 1].alt);
}
navigation.addEventListener('click', handler);
console.log(navigation);

















