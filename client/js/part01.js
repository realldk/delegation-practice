


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
  // 선택한 li에게 is-active 클래스 넣어주기
  // 선택하지 않은 li의 is-active 클래스 제거하기
  let list = navigation.children; // 유사배열이라 forEach없음
  list = Array.from(list); // forEach쓰려고 배열로 만들어줌
  list.forEach(item => item.classList.remove('is-active'));
  target.classList.add('is-active');
  console.log(target);
}

navigation.addEventListener('click', handler);


// // 내가 한거
// let selectedLi;
// navigation.onclick = function(event) {
//   let target = event.target;

//   if (target.tagName != 'LI') return;

//   carousel(target);
// }

// function carousel(li) {
//   if ()
// }
console.log(navigation);

















