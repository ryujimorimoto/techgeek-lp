  /*--------------------------
  ナビゲーションメニュー開閉
  ----------------------------*/

  function navToggle() {
    document.querySelector('html').classList.toggle('open');
    document.getElementById('modal-gray').classList.toggle('modal-open');
  }

  function closeNav() {
    document.querySelector('html').classList.remove('open');
    document.getElementById('modal-gray').classList.toggle('modal-open');
  }

  /*---------------------------------
  アコーディオンメニュー
  ----------------------------------*/
  window.addEventListener("load", loaded => {
  [].slice.call(document.getElementsByClassName("js-accordion-trigger"))
    .map( elm => elm.addEventListener("click", () => {
        elm.classList.toggle("is-active");
        elm.querySelector(".accordion__content").classList.toggle("is-open");
      }
      )
    );
});

/*---------------------------------
  コースタブ切り替え
  ----------------------------------*/
function tabSwitch(selectTab) {
  document.getElementsByClassName('course-active')[0].classList.remove('course-active');
  document.getElementsByClassName('course-show')[0].classList.remove('course-show');

  if (selectTab == 'light') {
    document.getElementById('light').classList.add('course-active');
    document.getElementById('light-course').classList.add('course-show');
  } else if (selectTab == 'standard') {
    document.getElementById('standard').classList.add('course-active');
    document.getElementById('standard-course').classList.add('course-show');
  } else if (selectTab == 'premium') {
    document.getElementById('premium').classList.add('course-active');
    document.getElementById('premium-course').classList.add('course-show');
  };
};
