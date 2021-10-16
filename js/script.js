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
  アコーディオンメニュー: 使用する関数の定義
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
