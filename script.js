const endDate = "15 August 2023 12:00";

document.getElementById("endDate").innerHTML = endDate;

// const hide = document.getElementById("invsibal1");

function Clock() {
  const end = new Date(endDate);

  const now = new Date();

  const deff = (end - now) / 1000;

  if (deff < 0) {
    document.getElementById("imgIndipendens").style.backgroundImage =
      "url(./ind.webp)";
    document.getElementById("invsibal1").style.display = "none";
    return;
  }

  document.getElementById("inPut1").value = Math.floor(deff / 3600 / 24);

  document.getElementById("inPut2").value = Math.floor(deff / 3600) % 24;

  document.getElementById("inPut3").value = Math.floor(deff / 60) % 60;

  document.getElementById("inPut4").value = Math.floor(deff) % 60;
}

setInterval(() => {
  Clock();
}, 1000);
// counting notes

// 1 divas 24 hours

// 1 hours 60 minute
