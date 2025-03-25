import { Chart } from "@/components/ui/chart"
document.addEventListener("DOMContentLoaded", () => {
  // Initialize drag and drop for task cards
  initDragAndDrop()

  // Initialize task filters
  initTaskFilters()

  // Initialize new task modal
  initNewTaskModal()

  // Initialize task statistics charts
  initTaskCharts()
})

function initDragAndDrop() {
  const taskCards = document.querySelectorAll(".task-card")
  const taskLists = document.querySelectorAll(".task-list")

  taskCards.forEach((card) => {
    card.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("text/plain", this.innerHTML)
      this.classList.add("dragging")

      // Store the source column
      e.dataTransfer.setData(
        "source-column",
        this.closest(".task-column").querySelector(".column-header h3").textContent,
      )
    })

    card.addEventListener("dragend", function () {
      this.classList.remove("dragging")
    })
  })

  taskLists.forEach((list) => {
    list.addEventListener("dragover", (e) => {
      e.preventDefault()
      const afterElement = getDragAfterElement(list, e.clientY)
      const draggable = document.querySelector(".dragging")

      if (afterElement == null) {
        list.appendChild(draggable)
      } else {
        list.insertBefore(draggable, afterElement)
      }
    })

    list.addEventListener("drop", function (e) {
      e.preventDefault()

      // Update task counts
      updateTaskCounts()

      // Get source and target columns
      const sourceColumn = e.dataTransfer.getData("source-column")
      const targetColumn = this.closest(".task-column").querySelector(".column-header h3").textContent

      // Show notification
      if (sourceColumn !== targetColumn) {
        showNotification(`Task moved from ${sourceColumn} to ${targetColumn}`)
      }
    })
  })
}

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".task-card:not(.dragging)")]

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    },
    { offset: Number.NEGATIVE_INFINITY },
  ).element
}

function updateTaskCounts() {
  const taskColumns = document.querySelectorAll(".task-column")

  taskColumns.forEach((column) => {
    const taskCount = column.querySelectorAll(".task-card").length
    column.querySelector(".task-count").textContent = taskCount
  })
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div")
  notification.classList.add("notification")
  notification.textContent = message

  // Add to document
  document.body.appendChild(notification)

  // Show notification
  setTimeout(() => {
    notification.classList.add("show")
  }, 10)

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show")
    setTimeout(() => {
      notification.remove()
    }, 300)
  }, 3000)
}

function initTaskFilters() {
  const filters = document.querySelectorAll(".task-filters select")

  filters.forEach((filter) => {
    filter.addEventListener("change", function () {
      // In a real application, this would filter the tasks based on the selected values
      console.log("Filter changed:", this.id, this.value)

      // Show notification
      showNotification("Filters applied")
    })
  })
}

function initNewTaskModal() {
  const saveTaskBtn = document.getElementById("saveTaskBtn")

  if (saveTaskBtn) {
    saveTaskBtn.addEventListener("click", () => {
      const taskTitle = document.getElementById("taskTitle").value
      const taskDescription = document.getElementById("taskDescription").value
      const taskEvent = document.getElementById("taskEvent").value
      const taskPriority = document.getElementById("taskPriority").value
      const taskDueDate = document.getElementById("taskDueDate").value

      // Validate required fields
      if (!taskTitle || !taskEvent || !taskPriority || !taskDueDate) {
        alert("Please fill in all required fields")
        return
      }

      // In a real application, this would save the task to a database
      // For now, we'll just add it to the To Do column

      // Format the due date
      const dueDate = new Date(taskDueDate)
      const formattedDueDate = `${dueDate.toLocaleString("default", { month: "short" })} ${dueDate.getDate()}`

      // Create new task card
      const newTask = document.createElement("div")
      newTask.classList.add("task-card")
      newTask.setAttribute("draggable", "true")

      // Set priority class
      const priorityClass = taskPriority === "high" ? "high" : taskPriority === "medium" ? "medium" : "low"

      // Set event name
      const eventName =
        taskEvent === "tech" ? "Tech Fest 2023" : taskEvent === "cultural" ? "Cultural Festival" : "AI Workshop"

      // Set HTML content
      newTask.innerHTML = `
                <div class="task-priority ${priorityClass}"></div>
                <h4>${taskTitle}</h4>
                <p>${taskDescription}</p>
                <div class="task-meta">
                    <span class="task-event">${eventName}</span>
                    <span class="task-due">Due: ${formattedDueDate}</span>
                </div>
                <div class="task-footer">
                    <div class="task-assignee">
                        <span class="unassigned"><i class="fas fa-user-plus"></i></span>
                    </div>
                    <div class="task-actions">
                        <button class="btn btn-sm btn-outline-primary"><i class="fas fa-edit"></i></button>
                    </div>
                </div>
            `

      // Add drag and drop event listeners
      newTask.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", this.innerHTML)
        this.classList.add("dragging")
        e.dataTransfer.setData(
          "source-column",
          this.closest(".task-column").querySelector(".column-header h3").textContent,
        )
      })

      newTask.addEventListener("dragend", function () {
        this.classList.remove("dragging")
      })

      // Add to To Do column
      const toDoColumn = document.querySelector(".task-column:first-child .task-list")
      toDoColumn.appendChild(newTask)

      // Update task counts
      updateTaskCounts()

      // Close modal
      const modalElement = document.getElementById("newTaskModal")
      const modal = bootstrap.Modal.getInstance(modalElement)
      modal.hide()

      // Reset form
      document.getElementById("newTaskForm").reset()

      // Show notification
      showNotification("New task created")
    })
  }
}

function initTaskCharts() {
  // Task Status Chart
  const taskStatusCtx = document.getElementById("taskStatusChart")
  if (taskStatusCtx) {
    new Chart(taskStatusCtx, {
      type: "doughnut",
      data: {
        labels: ["To Do", "In Progress", "Completed"],
        datasets: [
          {
            data: [8, 5, 6],
            backgroundColor: ["#ef4444", "#f59e0b", "#10b981"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: "Task Status Distribution",
          },
        },
      },
    })
  }

  // Task By Event Chart
  const taskByEventCtx = document.getElementById("taskByEventChart")
  if (taskByEventCtx) {
    new Chart(taskByEventCtx, {
      type: "bar",
      data: {
        labels: ["Tech Fest", "Cultural Festival", "AI Workshop"],
        datasets: [
          {
            label: "Tasks",
            data: [8, 6, 5],
            backgroundColor: ["#3b82f6", "#f97316", "#8b5cf6"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Tasks by Event",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0,
            },
          },
        },
      },
    })
  }
}

