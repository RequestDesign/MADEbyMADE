/*  
  Для быстрого поиска скрипта в поле поиска вводите : SCRIPT-НАЗВАНИЕ СТРАНИЦЫ
  Для быстрого поиска свайпера в поле поиска вводите : SWIPERS-НАЗВАНИЕ СТРАНИЦЫ
*/

wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 0,
  mobile: true,
  live: true,
});

wow.init();

function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  // Добавлние класса _webp или _no-webp для HTML
  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
}

isWebp();

document.addEventListener('DOMContentLoaded', function () {
  //////////////////////////////// SCRIPT-POPUP //////////////////////////////////
  if (document.querySelector('.popup')) {
    const popupArray = document.querySelectorAll('.popup');
    popupArray.forEach(function (element) {
      element
        .querySelector('.popup-overlay')
        .addEventListener('click', function () {
          element.style.display = 'none';
          document.body.style.overflow = 'visible';
        });
    });
  }
  //////////////////////////////// SCRIPT-HEADER //////////////////////////////////
  if (document.querySelector('.header')) {
    const header = document.querySelector('.header');
    const headerContainer = header.querySelector('.header__container');
    const headerButton = header.querySelector('.header__button');
    const headerButtonNavigate = header.querySelectorAll('.header__popup-item');
    const headerPopup = header.querySelector('.header__popup');
    const headerPopupContainer = headerPopup.querySelector(
      '.header__popup-container'
    );
    const headerPopupClose = headerPopupContainer.querySelector(
      '.header__popup-close'
    );

    headerButton.addEventListener('click', () => {});
    // Событие если нажимают на элемент меню
    headerButtonNavigate.forEach((element) => {
      element.addEventListener('click', () => {
        headerButtonNavigate.forEach((element) => {
          element.classList.remove('active');
        });
        element.classList.add('active');
      });
    });
    // Событие для открытия меню
    headerButton.addEventListener('click', () => {
      headerPopup.style.display = 'block';
      headerContainer.classList.add('zIndex');
      document.body.style.overflow = 'hidden';
    });
    // Событие для закрытия меню
    headerPopupClose.addEventListener('click', () => {
      headerPopup.style.display = 'none';
      headerContainer.classList.remove('zIndex');
      document.body.style.overflow = 'visible';
    });
  }
  //////////////////////////////// SCRIPT-REALTY //////////////////////////////////
  if (document.querySelector('.realty')) {
    const realty = document.querySelector('.realty');
    const realtyTypeComponents = realty.querySelectorAll(
      '.realty-type__component'
    );
    let timer;

    realtyTypeComponents[0].classList.add('active');
    // Cобытие если нажимают на плашку с подвидом недвижимости
    realtyTypeComponents.forEach((component) => {
      component
        .querySelector('.type-component--disactive')
        .addEventListener('mouseover', () => {
          timer = setTimeout(() => {
            realtyTypeComponents.forEach((component) => {
              component.classList.remove('active');
            });
            component.classList.add('active');
          }, 500);
        });
      component.addEventListener('mouseout', () => {
        clearTimeout(timer);
      });
    });
  }
  //////////////////////////////// SCRIPT-SUBCATEGORIES //////////////////////////////////
  if (document.querySelector('.subcategories')) {
    const subcategories = document.querySelector('.subcategories');
    const subcategoriesProjectsButton =
      subcategories.querySelectorAll('.filters__button');
    // Событие при нажатии на элемент хлебной крошки
    subcategoriesProjectsButton.forEach((button) => {
      button.addEventListener('click', () => {
        subcategoriesProjectsButton.forEach((button) => {
          button.classList.remove('active');
        });
        button.classList.add('active');
      });
    });
  }
});
//////////////////////////////// SCRIPT-PARTNERS //////////////////////////////////
if (document.querySelector('.partners')) {
  const partners = document.querySelector('.partners');
  const partnersContent = partners.querySelector('.content-right');
  const partnersArray = partners.querySelectorAll('.partners-box');

  const partnersElement = document.createElement('div');
  partnersElement.classList.add('partners-box', 'disactive');

  setInterval(() => {
    partnersContent.classList.add('animationLight');
    setTimeout(() => {
      partnersContent.classList.remove('animationLight');
    }, 5000);
  }, 8000);

  if (screen.width > 768) {
    updateGrid();
  }

  function updateGrid() {
    let partnersBoxesCount = 0;

    partnersArray.forEach((el) => {
      if (!el.classList.contains('disactive')) {
        partnersBoxesCount++;
      }
    });
    console.log(partnersBoxesCount);  

    if (partnersBoxesCount < 9) {
      console.log('2');
      partnersContent.classList.remove('_4x3');
      while (partnersBoxesCount < 9) {
        let newElement = document.createElement('div');
        newElement.classList.add('partners-box', 'disactive');
        partnersContent.appendChild(newElement);
        partnersBoxesCount++;
      }
    }

    if (partnersBoxesCount > 9) {
      partnersContent.classList.add('_4x3');

      while (partnersBoxesCount < 12) {
        let newElement = document.createElement('div');
        newElement.classList.add('partners-box', 'disactive');
        partnersContent.appendChild(newElement);
        partnersBoxesCount++;
      }
      console.log(partnersBoxesCount)
    } else {
      partnersContent.classList.remove('_4x3');
      console.log('3');
    }
  }
}

if (document.querySelector('.partners-box')) {
  const partnersBoxes = document.querySelectorAll('.partners-box');
  partnersBoxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
      box.querySelector('.icon').classList.remove('_white');
    });
    box.addEventListener('mouseout', () => {
      box.querySelector('.icon').classList.add('_white');
    });
  });
}

//////////////////////////////// SWIPERS //////////////////////////////////

const rem = function (rem) {
  if (window.innerWidth > 768) {
    return 0.005208335 * window.innerWidth * rem;
  } else {
    // где 375 это ширина моб версии макета
    return (100 / 375) * (0.1 * window.innerWidth) * rem;
  }
};

//////////////////////////////// SWIPERS-MAIN //////////////////////////////////

const swiperMainFirst = new Swiper('.swiper-main-second', {
  pagination: {
    el: '.swiper-main-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  loop: true,
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  speed: 1000,
  slidersPerView: 1,
  effect: 'fade',
});

//////////////////////////////// SWIPERS-PROJECT //////////////////////////////////

const swiperProjectFirst = new Swiper('.swiper-project', {
  pagination: {
    el: '.swiper-project-pagination',
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: true,
  // },
  loop: true,
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  speed: 1000,
  slidersPerView: 1,
  effect: 'fade',
});

//////////////////////////////// SWIPERS-REALTY //////////////////////////////////

const swiperRealtyFirst = new Swiper('.swiper-realty', {
  pagination: {
    el: '.swiper-realty-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  loop: true,
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  speed: 1000,
  slidersPerView: 1,
  effect: 'fade',
});

//////////////////////////////// CURSOR //////////////////////////////////

if (document.querySelector('.custom-cursor')) {
  const customCursorBlocks = document.querySelectorAll(
    '.content-custom-cursor'
  );
  const customCursor = document.querySelector('.custom-cursor');
  const circle = customCursor.querySelector('.circle');
  const cursor = customCursor.querySelector('.cursor');
  const effect = customCursor.querySelector('.effects');

  document.addEventListener('mousemove', (e) => {
    // Обновляем позицию кастомного курсора в соответствии с позицией указателя мыши.
    customCursor.style.left = e.pageX - 16 + 'px';
    customCursor.style.top = e.pageY - 12 + 'px';
  });

  // Добавляем слушатель события окончания анимации .circle
  circle.addEventListener('animationend', () => {
    // Удаляем класс .hide для отображения .cursor после окончания анимации .circle
    cursor.classList.add('show');
  });

  customCursorBlocks.forEach(function (element) {
    element.addEventListener('mouseenter', (e) => {
      customCursor.style.display = 'block';
      setTimeout(() => {
        cursor.classList.add('click');
        setTimeout(() => {
          cursor.classList.remove('click');
          effect.style.display = 'block';
          setTimeout(() => {
            effect.style.display = 'none';
          }, 2000);
        }, 250);
      }, 1000);
      document.body.style.cursor = 'none';
      e.stopPropagation(); // Предотвращаем распространение события на родительский customCursor
    });
    element.addEventListener('mouseleave', (e) => {
      customCursor.style.display = 'none';
      document.body.style.cursor = 'auto';
      e.stopPropagation(); // Предотвращаем распространение события на родительский customCursor
    });
    element.addEventListener('click', () => {});
  });
}

//////////////////////////////// CHART //////////////////////////////////

if (document.querySelector('.chart')) {
  const chart = document.querySelector('.chart');
  const chartElementAxisY = chart.querySelectorAll('.chart-axisY-data-element'),
    chartElementAxisX = chart.querySelectorAll('.chart-axisX-data-element'),
    chartLineAxisY = chart.querySelector('.chart-axisY-line'),
    chartLineAxisX = chart.querySelector('.chart-axisX-line'),
    chartLines = chart.querySelectorAll('.chart-area .line'),
    chartArea = chart.querySelector('.chart-area .chart-area-points');

  const arrayPercent = [23, 61, 98];

  for (let i = 0; i < arrayPercent.length; i++) {
    // Добавление точек с указателями (количество зависит от размера массива arrayPercent)
    const chartPointBox = document.createElement('div');
    chartPointBox.classList.add('chart-point-box');

    const chartAnimationBlock = document.createElement('div');
    chartAnimationBlock.classList.add('chart-animation-block', 'tooltip');

    const chartAnimationBox = document.createElement('div');
    chartAnimationBox.classList.add('chart-animation-box', 'tooltip');

    const chartTooltip = document.createElement('div');
    chartTooltip.textContent = `${arrayPercent[i]}%`;
    chartTooltip.classList.add('chart-tooltip');

    chartAnimationBox.appendChild(chartTooltip);
    chartAnimationBlock.appendChild(chartAnimationBox);

    const chartPoint = document.createElement('div');
    chartPoint.classList.add('chart-point');

    chartPointBox.appendChild(chartAnimationBlock);
    chartPointBox.appendChild(chartPoint);

    // Выставление позиции для каждого блока с точкой
    chartPointBox.style.bottom = `${arrayPercent[i] - 1.5}%`;
    // chartPointBox.style.top = `${100 - (arrayPercent[i] + 16)}%`;
    if (window.screen.width > 768) {
      chartPointBox.style.left = `${
        (i / (arrayPercent.length - 1)) * 100 - 1
      }%`;
    } else {
      chartPointBox.style.left = `${
        (i / (arrayPercent.length - 1)) * 100 - 8
      }%`;
    }

    // Добавление на график
    chartArea.appendChild(chartPointBox);
  }

  // canvas chart

  const canvas = chart.querySelector('.chart-area-canvas');
  const ctx = canvas.getContext('2d');
  const chartPoints = chart.querySelectorAll('.chart-point-box');

  const size = 100;
  if (window.screen.width > 768) {
    canvas.style.width = `77.7rem`;
    canvas.style.height = `25.7rem`;
  } else {
    canvas.style.width = `54.2rem`;
    canvas.style.height = `46.4rem`;
  }

  const scale = window.devicePixelRatio;
  console.log(scale);
  canvas.width = Math.floor(size * scale);
  canvas.height = Math.floor(size * scale);

  ctx.scale(scale, scale);

  ctx.beginPath();

  ctx.strokeStyle = '#f8eb00';
  ctx.lineWidth = 1.25;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.miterLimit = 2;
  ctx.imageSmoothingEnabled = false;

  for (let i = 0; i < chartPoints.length; i++) {
    let chartPoint = chartPoints[i];

    let x, y;

    if (window.screen.width > 768) {
      x = 0.5 + parseFloat(chartPoint.style.left);
      y = 98 - parseFloat(chartPoint.style.bottom);
    } else {
      x =
        parseFloat(chartPoint.style.left) +
        chartPoint.clientWidth / 2 +
        16 -
        29;
      y =
        121 -
        (parseFloat(chartPoint.style.bottom) + chartPoint.clientHeight / 2);
    }

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.stroke();
  ctx.closePath();

  // animation chart

  var chartAnimation = anime.timeline({
    autoplay: true,
  });

  anime({
    targets: '.chart .chart-axisY-line',
    height: ['0%', '100%'],
    duration: 1000,
    easing: 'linear',
  });
  anime({
    targets: '.chart .chart-axisX-line',
    width: ['0%', '100%'],
    duration: 1000,
    easing: 'linear',
  });
  anime({
    targets: '.chart-area .line',
    width: ['0%', '100%'],
    duration: 1000,
    easing: 'linear',
  });

  chartAnimation
    .add({
      targets: '.chart-point',
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      delay: 1500,
    })
    .add({
      targets: '.chart-canvas-box',
      width: [
        { value: '50%', duration: 1000, delay: 1000 },
        { value: '100%', duration: 1000, delay: 1000 },
      ],
      duration: 3000,
      easing: 'linear',
    })
    .add({
      targets: ['.chart-animation-box'],
      width: ['0', '100%'],
      duration: 1000,
      easing: 'linear',
    });
}
