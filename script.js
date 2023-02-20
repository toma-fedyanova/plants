let menu = document.querySelector('.header__navigation');
let children = menu.querySelectorAll('li');
let burgerMenu = document.querySelector('.burger__menu');
let section = document.querySelector('main');
let div = document.querySelector('.service__buttons');
let clickedButton = document.getElementsByClassName('clicked');
let cards = document.querySelector('.layout-3-column');
let prisesBlock = document.querySelector('.prices_buttons');
let links = document.querySelectorAll('.order');
let contactsSelect = document.querySelector('.contacts__castom_select');
let citiesList = document.querySelector('.contacs__castom_choice');
let cityInfo = document.querySelector('.choice_item')
let infoCardText = document.querySelector('.contacts_right');
let phoneCall = document.querySelector('#phone');

//section service 2 buttons click
div.addEventListener('click', function(event) {
  for (let card of cards.children) {
    card.classList.remove('blur');
  }
  if (event.target.tagName == 'BUTTON') {
    event.target.classList.toggle('clicked');
     if(clickedButton.length == 2) {
        for (let button of div.children) {
           if (!button.classList.contains('clicked')) button.disabled = true;
         }
       }
      else {
        for (let button of div.children) {
          button.disabled = false;
        }
      }
   }
   let arr = [];
   for (let button of div.children) {
      if (!button.classList.contains('clicked')) {
      arr.push(button.classList[0]);
      if (arr.length == 3) {
        for (let card of cards.children) {
          card.classList.remove('blur');
        }
      }
      else {
        for (let i = 0; i < arr.length; i++) {
          for (let card of cards.children) {
            if (card.classList.contains(arr[i])) {
              card.classList.add('blur');
            }
         }
       }
     }
   }
  }
})

//prises summury do disabled if one opened
prisesBlock.addEventListener('click', function(event) {
  let button;
  if(event.target.tagName == 'SUMMARY' || event.target.tagName == 'SPAN') {
    button = event.target.closest('details');
}
  for (let child of prisesBlock.children) {
    if (child != button && child.tagName == 'DETAILS') {
    child.open = false;
    }
  }
})
// prises button order clicked, prices button stay open
for (let button of links) {
  button.addEventListener('click', function (event) {
    event.stopPropagation();
    event.target.closest('details').open = true;
  }, true);
}

//section Contacts add select choice
contactsSelect.addEventListener('click', function() {
  citiesList.classList.toggle('visible');
  this.classList.toggle('colored_background');
  cityInfo.classList.add('visible');
})
//section Contacts choose one city
let contactsInfoCity = {
  'first': {
          'city': 'Canandaigua, NY',
          'telephone': '+1 585 393 0001',
          'address': '151 Charlotte Street',
          },
  'second': {
          'city': 'New York City',
          'telephone': '+1 212 456 000',
          'address': '9 East 91st Street',
          },
  'third': {
          'city': 'Yonkers, NY',
          'telephone': '+1 914 678 0003',
          'address': '511 Warburton Ave',
          },
  'fourth': {
          'city': 'Sherrill, NY',
          'telephone': '+1 315 908 0004',
          'address': '14 WEST Noyeg BLVD',
          },
}
for (let city of citiesList.children) {
  city.addEventListener('click', (event) => {
    contactsSelect.firstElementChild.innerHTML = `${city.textContent}<span class="ico" id = "select_arrow">`;
    citiesList.classList.add('visible');
    cityInfo.classList.remove('visible');
    let key = event.target.classList[0];
    let elem = infoCardText.firstElementChild;
    let phone = elem.nextElementSibling;
    let address = phone.nextElementSibling;
    elem.textContent = contactsInfoCity[key]['city'];
    phone.textContent = contactsInfoCity[key]['telephone'];
    address.textContent = contactsInfoCity[key]['address'];
    phoneCall.href = `tel:${contactsInfoCity[key]['telephone']}`;
  })
}

//burger menu responsive 380px
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('change');
  menu.classList.toggle('active');
})
for (let elem of children) {
  elem.addEventListener('click', () => {
    menu.classList.remove('active');
    burgerMenu.classList.remove('change');
  })
}
section.addEventListener('click', () => {
  burgerMenu.classList.remove('change');
  menu.classList.remove('active');
})


console.log(`Ваша оценка - 125 баллов
Выполненные пункты:
1) При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной
2) Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг
3) Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur
4) При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым
5) Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается
6) В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе
7) При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу`)