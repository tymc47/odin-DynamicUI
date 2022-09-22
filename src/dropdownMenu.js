const createDropdown = () => {
  const container = document.querySelector(".dropdown-menu");
  const menuitems = container.querySelector(".menu-item");

  container.style.position = "relative";
  container.style.display = "inline-block";
  menuitems.style.display = "none";
  menuitems.style.display = "absolute";

  container.addEventListener("mouseover", () => {
    menuitems.style.display = "block";
  });

  container.addEventListener("mouseout", () => {
    menuitems.style.display = "none";
  });
};

export default createDropdown;
