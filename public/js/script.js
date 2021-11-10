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

// ページ読み込み時の処理（ページ内スムーススクロールとアコーディオンメニューで使用）
window.addEventListener('DOMContentLoaded', () => {
  /*---------------------------------
（header）ページ内スムーススクロール
----------------------------------*/
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchouLinksArr = Array.prototype.slice.call(anchorLinks);

  anchouLinksArr.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });

/*----------------------------------------------
(なぜ、Shopify?)(よくあるご質問)アコーディオンメニュー
-----------------------------------------------*/
[].slice.call(document.getElementsByClassName("js-accordion-trigger"))
  .map( elm => elm.addEventListener("click", () => {
      elm.classList.toggle("is-active");
      elm.querySelector(".accordion__content").classList.toggle("is-open");
    }
    )
  );
});

/*---------------------------------
(料金)コースタブ切り替え
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
