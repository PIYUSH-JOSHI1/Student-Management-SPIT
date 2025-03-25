document.addEventListener("DOMContentLoaded", () => {
  // Mobile sidebar toggle
  const sidebarToggle = document.createElement("button")
  sidebarToggle.classList.add("sidebar-toggle")
  sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>'
  document.querySelector(".top-header").prepend(sidebarToggle)

  sidebarToggle.addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("active")
  })

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", (event) => {
    const sidebar = document.querySelector(".sidebar")
    const sidebarToggle = document.querySelector(".sidebar-toggle")

    if (
      sidebar.classList.contains("active") &&
      !sidebar.contains(event.target) &&
      !sidebarToggle.contains(event.target)
    ) {
      sidebar.classList.remove("active")
    }
  })

  // Task checkboxes
  const taskCheckboxes = document.querySelectorAll(".task-item .form-check-input")
  taskCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const taskItem = this.closest(".task-item")
      if (this.checked) {
        taskItem.style.opacity = "0.6"
        taskItem.querySelector(".form-check-label").style.textDecoration = "line-through"
      } else {
        taskItem.style.opacity = "1"
        taskItem.querySelector(".form-check-label").style.textDecoration = "none"
      }
    })
  })

  // Notifications dropdown
  const notificationsBtn = document.querySelector(".notifications")
  if (notificationsBtn) {
    notificationsBtn.addEventListener("click", () => {
      // Implement notifications dropdown
      console.log("Notifications clicked")
    })
  }

  // User profile dropdown
  const userProfileBtn = document.querySelector(".user-profile")
  if (userProfileBtn) {
    userProfileBtn.addEventListener("click", () => {
      // Implement user profile dropdown
      console.log("User profile clicked")
    })
  }
})

