const $ = (selector) => document.querySelector(selector);

const cartList = $('ul.cart__list');

const totalAmount = $('#cart__amount__total');

const orderBtn = $('.cart__order');
const cancelBtn = $('.cart__cancel');

//취소하기 버튼 클릭
function cancelClick() {
  cancelBtn.addEventListener('click', (e) => {
    totalAmount.innerText = 0;
  })
}

//장바구니에 추가.
function order({burgerCard, cartList}) {
  burgerCard.addEventListener('click', (e) => {
    //"선택된 "버거 카드.
    const selectedCard = e.target.closest('.burger__card');

    //"선택한 버거"에서 원하는 정보 변수로 선언.
    const burgerName = selectedCard.children[1].firstElementChild;
    const burgerPrice = selectedCard.children[1].firstElementChild.nextElementSibling;
   
    //카드가 아닌 부분 선택시 오류 생김. 

    //장바구니에 list 추가.
    function addOrder(burgerName, burgerPrice) {
      const burgerLi = document.createElement('li');
      burgerLi.className = 'cart__list__list';

      const span = document.createElement('span');
      span.className = 'cart__list__name';
      span.innerText = burgerName.innerText;

      const input = document.createElement('input');
      input.className = 'cart__list__number';
      input.type = "number";
      input.value = 1;

      const div = document.createElement('div');
      div.className = 'cart__list__price';
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
      }

    //선택한 버거가 이미 카트에 있는지 확인.
    function checkCart(burgerName) {
      //현재 카트에 있는 리스트 변수 선언. htmlcollection(유사배열)
      const nameList = document.getElementsByClassName("cart__list__name");

      for (let i = 0; i < nameList.length - 1; i++)
        if (burgerName.innerText === nameList[i].innerText){
          return true;
        }
      return false;
      }

    addOrder(burgerName, burgerPrice);
    if (checkCart(burgerName) !== false) {
      cartList.lastElementChild.classList.add('hide')
    }
    

    // if (checkCart(burgerName)) {
    //   burgerLi.parentElement.remove();

    // }

  
    })

  }



function burgerPriceNumber(burgerPrice) {
	const removedComma = burgerPrice.slice(0, -1).replace(/\D/g, "");
  return +removedComma;
};

function cartManager(burgerInfo) {
  order(burgerInfo);
}

window.onload = () => {
  cartManager({
    cartList: $('ul.cart__list'),
    burgerCard: $('section.burger'),
  });
}