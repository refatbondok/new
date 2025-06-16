document.addEventListener("DOMContentLoaded", () => {
  // Show loader
  const loader = document.getElementById("loader");
  setTimeout(() => loader.style.display = "none", 1200);

  // Handle registration form dynamic dropdown
  const collegeSelect = document.getElementById("college");
  const levelSelect = document.getElementById("level");
  const levelOptions = {
    "Nursing": ["Level 1", "Level 2", "Level 3", "Level 4"],
    "Medicine": ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6"],
    "Pharmacy": ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"],
    "Dentistry": ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"],
    "Engineering": ["Level 1", "Level 2", "Level 3", "Level 4"],
    "Business": ["Level 1", "Level 2", "Level 3", "Level 4"],
    "Applied Science": ["Level 1", "Level 2", "Level 3", "Level 4"]
  };

  collegeSelect.addEventListener("change", () => {
    const selected = collegeSelect.value;
    levelSelect.innerHTML = "<option value=''>Select Level</option>";
    if (levelOptions[selected]) {
      levelOptions[selected].forEach(level => {
        const opt = document.createElement("option");
        opt.value = level;
        opt.textContent = level;
        levelSelect.appendChild(opt);
      });
    }
  });

  // Form submit action
  document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    navigateTo("checklist");
  });

  // Payment simulation
  document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Payment Successful! Welcome to Study Boss.");
    navigateTo("home");
  });
});

// Navigation function (SPA behavior)
function navigateTo(sectionId) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });
  const target = document.getElementById(sectionId);
  if (target) target.classList.add("active");
}

// Checklist logic
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = \`\${taskText} <button onclick="this.parentElement.remove()">❌</button>\`;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
