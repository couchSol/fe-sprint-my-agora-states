// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  
  //img 정보 불러와서 avataWrapper에 붙이기
  const avatarImg = document.createElement('img');
    avatarImg.className = 'discussion__avatar--image';
    avatarImg.src = obj.avatarUrl;
    avatarImg.alt = 'avatar of ' + obj.author;
    avatarWrapper.append(avatarImg);

  //h2와 a, information 불러와서 discussionContent에 붙이기
  const contentTitle = document.createElement('h2');
    contentTitle.className = 'discussion__title';
  const contentA = document.createElement('a');
    contentA.href = obj.url;
    contentA.innerText = obj.title;
    contentTitle.append(contentA);
  const contentInfo = document.createElement('div');
    contentInfo.className = 'discussion__information';
    contentInfo.textContent = `${obj.author} / ${obj.createdAt}`
  discussionContent.append(contentTitle, contentInfo);

  //p태그 가져와서 answered에 붙이기
  const answered = document.createElement('p');
    answered.textContent = obj.answer === null ? '□' : '☑'
    discussionAnswered.append(answered);

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;

};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  element.innerHTML = '';
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);


//글쓰기 폼이 업데이트되면 해당 내용을 data.js에 넣어준다
//submit.onclick = update(e) 내용을 받아온다
// {배열 안에 형식 맞춰 적어준다}
//agoraStatesDiscussions에 push한다
//다시 render한다
let form = document.querySelector('.form');
form.addEventListener('submit', update);


let submit = document.querySelector('.form');
submit.addEventListener('submit', update);

function update(event) {
  event.preventDefault();

  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() +1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const hours = ('0' + today.getHours()).slice(-2);
  const minutes = ('0' + today.getMinutes()).slice(-2);
  const seconds = ('0' + today.getSeconds()).slice(-2);
  const timestamp = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`

  const newObj = {
    id: '',
    createdAt: timestamp,
    title: document.querySelector('.input--title').value,
    url: '/',
    author: document.querySelector('.input--name').value,
    answer: null,
    bodyHTML: document.querySelector('.input--story').value,
    bodyHTML: '',
    avatarUrl:
    "https://avatars.githubusercontent.com/u/90553688?s=64&u=3c4e4dc2053d4977ac12b9cfc2667582f986d3d8&v=4"
  }
  console.log(newObj)
  agoraStatesDiscussions.unshift(newObj);
  console.log(agoraStatesDiscussions);
  render(ul);
}

// function update(e) {
//   e.preventaDefault();

//   const today = new Date();
//   const year = today.getFullYear();
//   const month = ('0' + (today.getMonth() +1)).slice(-2);
//   const day = ('0' + today.getDate()).slice(-2);
//   const hours = ('0' + today.getHours()).slice(-2);
//   const minutes = ('0' + today.getMinutes()).slice(-2);
//   const seconds = ('0' + today.getSeconds()).slice(-2);
//   const timestamp = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`

//   const newObj = {
//     id: '',
//     createdAt: timestamp,
//     title: document.querySelector('.input--title').value,
//     url: '/',
//     author: document.querySelector('.input--name').value,
//     answer: null,
//     bodyHTML: document.querySelector('.input--story').value,
//     bodyHTML: '',
//     avatarUrl:
//     "https://avatars.githubusercontent.com/u/90553688?s=64&u=3c4e4dc2053d4977ac12b9cfc2667582f986d3d8&v=4"
//   }
//   console.log(newObj)
//   agoraStatesDiscussions.unshift(newObj);
//   console.log(agoraStatesDiscussions);
//   render(ul);
// }