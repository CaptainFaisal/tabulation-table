const toggleTheme = () => {
  const rows = [...document.getElementsByTagName("tr")];
  const checkbox = document.getElementById("checkbox");
  const paginatorItems = document.querySelectorAll(".pgn div");
  const leftHeader = document.querySelectorAll(".responsive-table tbody tr th");
  const toggle = () => {
    if (checkbox.checked) {
      document.getElementById("root").classList.add("dark");
      rows.forEach((elem) => elem.classList.add("dark-row"));
      paginatorItems.forEach((elem) => elem.classList.add("dark-paginator"));
      leftHeader.forEach((elem) => elem.classList.add("dark-left-header"));
    } else if (!checkbox.checked) {
      document.getElementById("root").classList.remove("dark");
      rows.forEach((elem) => elem.classList.remove("dark-row"));
      rows.forEach((elem) => elem.classList.add("white"));
      leftHeader.forEach((elem) => elem.classList.remove("dark-left-header"));
      leftHeader.forEach((elem) => elem.classList.add("white-left-header"));
      paginatorItems.forEach((elem) => elem.classList.remove("dark-paginator"));
    }
  };
  toggle();
  checkbox.addEventListener("change", () => toggle());
};

export default toggleTheme;
