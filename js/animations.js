// Мой вариант тоже работает
// const INCREASE_NUMBER_ANIMATION_SPEED = 50; 

// function increaseNumberAnimationStep(i, element, endNumber) {
//     if (i <= endNumber) {
//         if (i === endNumber) {
//           element = i + '+';
//         } else {
//           element = i;
//         }
//         i += 100;
//         setTimeout(
//             function(){increaseNumberAnimationStep(i, element, endNumber);},
//             INCREASE_NUMBER_ANIMATION_SPEED
//             ); 
//       }
//       document.querySelector(".features__clients-count").innerHTML = element;
//   }
  
// function initIncreaseNumberAnimation(element) {
//   increaseNumberAnimationStep (0, element, 5000);
// }

// initIncreaseNumberAnimation();

// Анна посоветовала и больше соответствует инструкции в задании

const INCREASE_NUMBER_ANIMATION_SPEED = 50; 

function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
          element.innerText = i + '+';
        } else {
          element.innerText = i;
        }
        i += 100;
        setTimeout(
            function(){increaseNumberAnimationStep(i, element, endNumber);},
            INCREASE_NUMBER_ANIMATION_SPEED
            ); 
      }

  }

  function initIncreaseNumberAnimation() {
    let element = document.querySelector(".features__clients-count");
    increaseNumberAnimationStep (0, element, 5000);
    }

  // initIncreaseNumberAnimation(); // Запуск функции перенесен в раздел Запуск анимации увеличения числа клиентов

// Добавление поля для ввода по событию выбор опции "Другое"
document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
  if (event.target.value === 'other') {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form__group');
    formContainer.classList.add('form__other-input'); // Задание 1
 
    const input = document.createElement('input');
    input.placeholder = "Введите ваш вариант";
    input.type = "text"; // Задание 2
      
    formContainer.appendChild(input);
    document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit')); // Задание 3
  }
 
  const otherInput = document.querySelector('.form__other-input');
  if (event.target.value !== 'other' && otherInput) { // Задание 5
  document.querySelector('#form form').removeChild(otherInput); // Задание 4
  }
});

// Добавление анимации шапки по скроллу
let animationInited = false;
function updateScroll() {
  if (window.scrollY > 0) {
    document.querySelector('header').classList.add('header__scrolled');
  } else {
    document.querySelector('header').classList.remove('header__scrolled');
  }
  // Запуск анимации увеличения числа клиентов
  let windowBottomPosition = window.scrollY + window.innerHeight;
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop; // 1518
  if (windowBottomPosition => countElementPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation(); 
  }
}
window.addEventListener("scroll", updateScroll);

// Добавить плавный скролл к нужному элементу страницы

function addSmoothScroll(anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // чтобы функция не вела себя как положено по дефолту
 
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}
//Вызвать функцию addSmoothScroll для всех элементов с href
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  addSmoothScroll(anchor);
});
//Вызвать функцию addSmoothScroll для элемента кнопки
addSmoothScroll(document.querySelector('.more-button')); 