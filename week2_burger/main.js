const $ = (selector) => document.querySelector(selector);

let totalAmount = $('#cart__amount__total');

const orderBtn = $('.cart__order');
const cancelBtn = $('.cart__cancel');

//주문하기 버튼 누르면 모달 보여주기.
function orderClick() {
  orderBtn.addEventListener('click', (e) => {
    const modal = $('.modal')
    modal.classList.remove('hidden')

    //아니요 누르면 모달 숨기기.
    const noBtn = $('.modal__button__no');
    console.log(noBtn);
    noBtn.addEventListener('click', (e) => {
    modal.classList.add('hidden');
  })
    
  })
}

//취소하기 버튼 클릭하면 장바구니 비우기.
function cancelClick() {
  cancelBtn.addEventListener('click', (e) => {
    //.cart__list__list class 가진 요소 모두 제거.
    const lists = document.querySelectorAll('.cart__list__list')
    lists.forEach(function(list){
      list.remove();
    })
    totalAmount.innerText = 0;
  })
}

//누적금액 계산
function calcTotalAmount(cartList) {
  let total = 0;
  for (let i = 0; i < cartList.children.length; i++) {
    let howMany = cartList.children[i].querySelector('.cart__list__number').value;
    let howMuch = toNumber(cartList.children[i].querySelector('.cart__list__price').innerText);
    total += howMany * howMuch;
  }
  totalAmount.innerText = total;
}

//장바구니에 추가.
function order({burgerCard, cartList}) {
  burgerCard.addEventListener('click', (e) => {
    //"선택된 "버거 카드.
    const selectedCard = e.target.closest('.burger__card');

    //"선택한 버거"에서 원하는 정보 변수로 선언.
    const burgerName = selectedCard.children[1].firstElementChild;
    const burgerPrice = selectedCard.children[1].firstElementChild.nextElementSibling;

    //장바구니에 list 추가.
    function addOrder(burgerName, burgerPrice) {
      const burgerLi = document.createElement('li');
      burgerLi.className = 'cart__list__list';

      //장바구니 list 내 버거 이름.
      const span = document.createElement('span');
      span.className = 'cart__list__name';
      span.innerText = burgerName.innerText;

      //장바구니 list 내 버거 개수.
      const input = document.createElement('input');
      input.className = 'cart__list__number';
      input.type = "number";
      input.value = 1;
      //장바구니 양 변경 감지 후 누적금액 계산.
      input.addEventListener('input', (e) => {
        calcTotalAmount(cartList);
      })

      //장바구니 list 내 버거 가격.
      const div = document.createElement('div');
      div.className = 'cart__list__price';
      div.innerText = burgerPrice.innerText;

      //장바구니 list 내 취소 버튼
      const button = document.createElement('button');
      button.innerText = 'X';
      button.onclick = () => {
        burgerLi.remove();
        calcTotalAmount(cartList);
      }

      const addList = [span, input, div, button];
      addList.forEach(function(tag){
        burgerLi.appendChild(tag);
      })

      cartList.appendChild(burgerLi);

      calcTotalAmount(cartList);
      }

    //선택한 버거가 이미 카트에 있는지 확인.
    function checkCart(burgerName) {
      //현재 카트에 있는 리스트 변수 선언. htmlcollection(유사배열)
      const nameList = document.getElementsByClassName("cart__list__name");

      for (let i = 0; i < nameList.length - 1; i++)
        if (burgerName.innerText === nameList[i].innerText){
          nameList[i].parentElement.querySelector(".cart__list__number").value++;
          return true;
        }
      return false;
    }

    addOrder(burgerName, burgerPrice);
    if (checkCart(burgerName)) {
      cartList.lastElementChild.remove();
      calcTotalAmount(cartList);
    }

  
    

    // if (checkCart(burgerName)) {
    //   burgerLi.parentElement.remove();

    // }

  
    })

  }

function toNumber(burgerPrice) {
	const removedComma = burgerPrice.slice(0, -1).replace(/\D/g, "");
  return +removedComma;
};

function cartManager(burgerInfo) {
  order(burgerInfo);
  cancelClick();
  orderClick();
}

window.onload = () => {
  cartManager({
    cartList: $('ul.cart__list'),
    burgerCard: $('section.burger'),
  });
}