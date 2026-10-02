let completed = 0;

function completeWorkout(button) {
  if (button.classList.contains("done")) return;

  button.classList.add("done");
  button.textContent = "✓ Completed";

  completed++;
  document.getElementById("completed").textContent = completed;
}
