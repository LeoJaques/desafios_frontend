const likeIcons = document.querySelectorAll(".like-icon");

likeIcons.forEach((iconDiv) => {
  iconDiv.onclick = () => {
    const icon = iconDiv.querySelector("#icon");

    if (icon) {
      icon.classList.toggle("filled");
    } else {
      console.warn("Nenhum ícone SVG encontrado nesta div.");
    }
  };
});
