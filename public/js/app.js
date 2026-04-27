(function () {
  const message = document.getElementById("message");
  const button = document.getElementById("action");

  if (!message || !button) return;

  let n = 0;
  button.addEventListener("click", function () {
    n += 1;
    message.textContent =
      "Button clicked " + n + " time" + (n === 1 ? "" : "s") + " (all in the browser).";
  });
})();
