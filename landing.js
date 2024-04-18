// Accordion functionality
document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// Lazy loading for featured works
document.getElementById("show-more-btn").addEventListener("click", () => {
  const additionalWorks = document.createElement("div");
  additionalWorks.innerHTML = `
        <div class="work-item">
            <img src="work2.jpg" alt="Work 2">
            <p>Description of Work 2</p>
        </div>
        <div class="work-item">
            <img src="work3.jpg" alt="Work 3">
            <p>Description of Work 3</p>
        </div>
        <!-- Add more work items -->
    `;
  document.querySelector(".works-gallery").appendChild(additionalWorks);
});
document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.elements.name.value = "";
  e.target.elements.email.value = "";
  e.target.elements.message.value = "";
});
