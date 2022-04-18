const $ = (selector) => document.querySelector(selector);

const cartList = $('ul.cart__list');

const totalPrice = $('#cart__amount__total');
const orderBtn = $('.cart__order');
const cancelBtn = $('.cart__cancel');

//취소하기 클릭
function cancelClick() {
  cancelBtn.addEventListener('click', (e) => {
    totalPrice.innerText = 0;
  })
}

//장바구니에 추가.
function addOrder({burgerCard, burgerPrice}) {
  burgerCard.addEventListener('click', (e) => {
    //선택된 버거 카드.
    const selectedCard = e.target.closest('.burger__card');

    //선택한 버거에서 원하는 정보 변수로 선언.
    const burgerName = selectedCard.children[1].firstElementChild;
    const burgerPrice = selectedCard.children[1].firstElementChild.nextElementSibling;

    //카드가 아닌 부분 선택시 오류 생김.
    //if (burgerName === null ||burgerPrice === null) {
    //  return null;
    //}

    //장바구니에 추가.
    const burgerLi = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = burgerName.innerText;

    const input = document.createElement('input');
    input.type = "number";
    input.value = 1;

    const div = document.createElement('div');
    div.innerText = burgerPrice.innerText;

    //취소 버튼
    const button = document.createElement('button');
    button.innerText = 'X';
    button.onclick = () => {
      burgerLi.remove();
    }
    
    burgerLi.appendChild(span);
    burgerLi.appendChild(input);
    burgerLi.appendChild(div);
    burgerLi.appendChild(button);

    cartList.appendChild(burgerLi);
  })
}

function cartManager(burgerInfo) {
  addOrder(burgerInfo);
}

window.onload = () => {
  cartManager({
    burgerCard : $('section.burger')
  });
}