import pic1 from "./assets/touslesjours.jpeg";
import pic2 from "./assets/sibelhomme.jpeg";
import pic3 from "./assets/moncher.jpeg";
import pic4 from "./assets/enfant.jpeg";
import pic5 from "./assets/monami.jpeg";
import "animate.css";

const $ = (selector) => document.querySelector(selector);

let currentStep;

const quizList = [
  {
    src: pic1,
    answer: "매일매일",
  },
  {
    src: pic2,
    answer: "꽃미남",
  },
  {
    src: pic3,
    answer: "내 친애하는 삼촌",
  },
  {
    src: pic4,
    answer: "어린이",
  },
  {
    src: pic5,
    answer: "내 친구",
  },
];

const modal = $("div.modal");
const modalBody = $("p.modal__body");

//게임 설정값 초기화
function initGame({ score, image }) {
  currentStep = 0;
  score.innerText = 0;
  image.src = quizList[currentStep].src;
  loadModal();
}

//Modal 보여주기
function showModal(modalContent, keepOpen) {
  modalBody.innerHTML = modalContent;
  modal.classList.remove("hide");

  //마지막 단계
  if (keepOpen) return;

  //Modal 500ms 뒤 사라지게 하기
  setTimeout(() => {
    modal.classList.add("hide");
  }, 500);
}

//다음 단계로
function goNextStep(score, image) {
  currentStep++;

  //score +1
  score.innerText = parseInt(score.innerText) + 1;

  //마지막 단계라면
  if (currentStep === quizList.length) {
    showModal(
      `
    <a href="/">메인 화면으로</a>`,
      true
    );
    modal.addEventListener("click", () => {
      modal.classList.add("hide");
    });
    return;
  }

  //img 다음으로
  image.src = quizList[currentStep].src;
}

//퀴즈 진행 로직
function attachEvent({ score, answer, image }) {
  answer.addEventListener("click", (e) => {
    if (e.target instanceof HTMLLIElement) {
      loadModal();
      const currentAnswer = e.target.innerText;
      const realAnswer = quizList[currentStep].answer;
      if (currentAnswer === realAnswer) {
        goNextStep(score, image);
        //점수창 애니메이션.
        $("section.scoreBoard").classList.add("animate__heartBeat");
        setTimeout(() => {
          $("section.scoreBoard").classList.remove("animate__heartBeat");
        }, 2000);
      } else {
        showModal("틀렷엉");
      }
    }
  });

  //이미지 로딩 완료.
  image.addEventListener("load", () => {
    modal.classList.add("hide");
  });

  //다시하기 버튼 기능.
  const buttonRestart = $(".buttonList__restart");
  buttonRestart.addEventListener("click", (e) => {
    initGame({ score, answer, image });
  });
}

//이미지 로딩 모달.
function loadModal() {
  modalBody.innerHTML = "이미지 로딩중";
  modal.classList.remove("hide");
}

function gameManager(gameInfo) {
  initGame(gameInfo);
  attachEvent(gameInfo);
}

//onload 함수 : 웹브라우저 내 모든 요소 준비되어야 실행.
window.onload = () => {
  gameManager({
    score: $(".scoreBoard__score"),
    answer: $(".answer__list"),
    image: $(".imageBoard > img"),
  });
};
