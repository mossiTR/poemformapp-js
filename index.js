(() => {
  const $doc = document;
  const $main = $doc.getElementById("js-main");
  const $tab = $main.querySelectorAll("[data-tab]");
  const $content = $main.querySelectorAll("[data-content]");
  const button = document.getElementById("addBtn");

  const init = () => {
    $content[0].style.display = "block";
  };
  init();

  const tabClick = (e) => {
    e.preventDefault();
    const $this = e.target;
    const targetVal = $this.dataset.tab;

    let index = 0;
    while (index < $tab.length) {
      $content[index].style.display = "none";
      $tab[index].classList.remove("is-active");
      index++;
    }
    $main.querySelectorAll(
      '[data-content="' + targetVal + '"]'
    )[0].style.display = "block";
    $tab[targetVal].classList.add("is-active");
  };

  let index = 0;
  while (index < $tab.length) {
    $tab[index].addEventListener("click", (e) => tabClick(e));
    index++;
  }

  const buttonClick = () => {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    const a = document.createElement("a");
    const $text = document.getElementById("text-in");
    const $name = document.getElementById("userName");

    confirm("投稿しますか？");
    a.innerText = $name.value;
    li.innerText = $text.value;
    li.appendChild(a);
    ul.appendChild(li);
    $text.value = "";
  };

  button.addEventListener("click", buttonClick);
})();
