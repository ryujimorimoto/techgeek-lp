window.addEventListener("load", loaded => {
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
  [].slice.call(document.getElementsByClassName("js-accordion-trigger"))
    .map( elm => elm.addEventListener("click", () => {
        elm.querySelector(".accordion__content").classList.toggle("is-open");
        console.log(elm)
      }
      )
    );
});
