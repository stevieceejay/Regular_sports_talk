const feedbackForm = document.querySelector("#feedback-form");
const feedbackInput = document.querySelector("#feedback");
const characterCount = document.querySelector("#character-count");
const feedbackStatus = document.querySelector("#feedback-status");

if (feedbackForm && feedbackInput && characterCount && feedbackStatus) {
  function updateCharacterCount() {
    characterCount.textContent = `${feedbackInput.value.length} / 500`;
  }

  feedbackInput.addEventListener("input", () => {
    updateCharacterCount();
    feedbackStatus.textContent = "";
  });

  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const feedback = feedbackInput.value.trim();

    if (!feedback) {
      feedbackStatus.textContent = "Add a comment first.";
      feedbackInput.focus();
      return;
    }

    feedbackStatus.textContent = "Thanks — your feedback was received.";

    feedbackForm.reset();
    updateCharacterCount();
  });

  updateCharacterCount();
}