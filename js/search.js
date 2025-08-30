document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("monatSuche");
  input.addEventListener("keyup", function () {
    const filter = input.value.toLowerCase();
    const monate = document.querySelectorAll(".link-container");

    monate.forEach(monat => {
      const title = monat.querySelector("h2").textContent.toLowerCase();
      const links = monat.querySelectorAll(".link-link");

      // check ob entweder Monatsname oder eines der Datums passt
      let match = title.includes(filter);

      links.forEach(link => {
        if (link.textContent.toLowerCase().includes(filter)) {
          match = true;
        }
      });

      // Anzeige ein/ausblenden
      monat.style.display = match ? "" : "none";
    });
  });
});