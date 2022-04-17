import pic1 from "./assets/김규민.jpeg";
import pic2 from "./assets/전희선.jpeg";
import pic3 from "./assets/서혜은.jpg";
import pic4 from "./assets/황주희.jpeg";
import pic5 from "./assets/백지연.png";

const $ = (selector) => document.querySelector(selector);

let currentStep;

const quizList = [
  {
    src: pic1,
    answer: "김규민",
  },
  {
    src: pic2,
    answer: "전희선",
  },
  {
    src: pic3,
    answer: "서혜은",
  },
  {
    src: pic4,
    answer: "황주희",
  },
  {
    src: pic5,
    answer: "백지연",
  },
];

//게임 설정값 초기화
function initGame({score, answer, image}){
  currentStep = 0;
  score.innerText = 0;
  image.src = quizList[currentStep].src;
};

//Modal 보여주기
function showModal(modalContent, keepOpen) {
  const modal = $('div.modal');
  const modalBody = $('p.modal__body');
  modalBody.innerHTML = modalContent;

  modal.classList.remove('hide');

  //마지막 단계
  if (keepOpen) return;

  //Modal 500ms 뒤 사라지게 하기
  setTimeout(() => {
    modal.classList.add('hide');
  }, 500);

  
}

//다음 단계로
function goNextStep(score, image) {
  currentStep++;

  //score +1
  score.innerText = parseInt(score.innerText) + 1;

  //마지막 단계라면
  if (currentStep === quizList.length) {
    showModal(`
    <a href="/">메인 화면으로</a>`, true);
    return;
  }

  //img 다음으로
  image.src = quizList[currentStep].src;

  
}

//퀴즈 진행 로직
function attachEvent({score, answer, image}) {
  answer.addEventListener('click', (e) => {
    if (e.target instanceof HTMLLIElement) {
      const currentAnswer = e.target.innerText;
      const realAnswer = quizList[currentStep].answer;
      if (currentAnswer === realAnswer) {
        goNextStep(score, image);
      }
      else {
        showModal('틀렷엉')
      }
    }
  });
}

function gameManager(gameInfo) {
  initGame(gameInfo);
  attachEvent(gameInfo);
}

//onload 함수 : 웹브라우저 내 모든 요소 준비되어야 실행.
window.onload = () => {
  gameManager({
    score: $('.scoreBoard__score'),
    answer: $('.answer__list'),
    image: $('.imageBoard > img'),
  });
}

