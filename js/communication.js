document.addEventListener("DOMContentLoaded", () => {
  // Initialize communication tabs
  initCommunicationTabs()

  // Initialize chat functionality
  initChat()

  // Initialize AI chatbot
  initAIChatbot()
})

function initCommunicationTabs() {
  const commTabs = document.querySelectorAll(".comm-tab")
  const aiChatbotCard = document.querySelector(".ai-chatbot-card")
  const chatArea = document.querySelector(".chat-area")

  commTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      commTabs.forEach((t) => t.classList.remove("active"))

      // Add active class to clicked tab
      this.classList.add("active")

      // Handle tab content
      const tabType = this.getAttribute("data-tab")

      if (tabType === "chatbot") {
        // Show AI chatbot, hide chat area
        aiChatbotCard.style.display = "block"
        chatArea.style.display = "none"
      } else {
        // Hide AI chatbot, show chat area
        aiChatbotCard.style.display = "none"
        chatArea.style.display = "flex"

        // Filter communication items based on tab
        filterCommunicationItems(tabType)
      }
    })
  })

  // Initialize communication item click handlers
  const commItems = document.querySelectorAll(".comm-item")
  commItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class from all items
      commItems.forEach((i) => i.classList.remove("active"))

      // Add active class to clicked item
      this.classList.add("active")

      // Update chat header and messages
      updateChatContent(this)
    })
  })
}

function filterCommunicationItems(tabType) {
  const commItems = document.querySelectorAll(".comm-item")

  commItems.forEach((item) => {
    if (tabType === "messages" && !item.classList.contains("announcement")) {
      item.style.display = "flex"
    } else if (tabType === "announcements" && item.classList.contains("announcement")) {
      item.style.display = "flex"
    } else {
      item.style.display = "none"
    }
  })
}

function updateChatContent(selectedItem) {
  const chatHeader = document.querySelector(".chat-header")
  const chatMessages = document.querySelector(".chat-messages")

  // Get details from selected item
  const avatar = selectedItem.querySelector(".comm-avatar").innerHTML
  const title = selectedItem.querySelector(".comm-details h4").textContent
  const isAnnouncement = selectedItem.classList.contains("announcement")

  // Update chat header
  if (isAnnouncement) {
    chatHeader.innerHTML = `
            <div class="chat-user">
                <div class="chat-avatar">
                    <i class="fas fa-bullhorn"></i>
                </div>
                <div class="chat-user-details">
                    <h3>${title}</h3>
                    <p>Announcement</p>
                </div>
            </div>
            <div class="chat-actions">
                <button class="btn btn-sm btn-outline-secondary"><i class="fas fa-share"></i></button>
                <button class="btn btn-sm btn-outline-secondary"><i class="fas fa-info-circle"></i></button>
            </div>
        `

    // Update chat messages for announcement
    if (title === "Registration Open!") {
      chatMessages.innerHTML = `
                <div class="message-date-divider">
                    <span>September 18, 2023</span>
                </div>
                
                <div class="message received">
                    <div class="message-avatar">
                        <i class="fas fa-bullhorn"></i>
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <span class="message-sender">Admin</span>
                            <span class="message-time">10:00 AM</span>
                        </div>
                        <div class="message-body">
                            <p>🚀 <strong>Tech Fest 2023 registrations are now open!</strong> 🚀</p>
                            <p>We're excited to announce that registrations for Tech Fest 2023 are now open. The event will take place from October 15-17, 2023, at the Main Auditorium.</p>
                            <p>Early bird registrations are available until September 30, 2023. Register now to secure your spot!</p>
                            <div class="message-attachment">
                                <i class="fas fa-link"></i>
                                <span>Registration Link</span>
                                <a href="#" class="download-btn"><i class="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            `
    } else if (title === "Venue Change") {
      chatMessages.innerHTML = `
                <div class="message-date-divider">
                    <span>September 15, 2023</span>
                </div>
                
                <div class="message received">
                    <div class="message-avatar">
                        <i class="fas fa-bullhorn"></i>
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <span class="message-sender">Admin</span>
                            <span class="message-time">2:30 PM</span>
                        </div>
                        <div class="message-body">
                            <p>📢 <strong>Important Announcement: Venue Change for Cultural Festival</strong> 📢</p>
                            <p>Due to renovation work at the original venue, the Cultural Festival has been moved to the College Grounds. All other details remain the same.</p>
                            <p>We apologize for any inconvenience caused and look forward to your participation.</p>
                            <div class="message-attachment">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>New Venue Map</span>
                                <a href="#" class="download-btn"><i class="fas fa-download"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            `
    }
  } else {
    // Regular chat
    chatHeader.innerHTML = `
            <div class="chat-user">
                <div class="chat-avatar">
                    ${avatar}
                </div>
                <div class="chat-user-details">
                    <h3>${title}</h3>
                    <p>${
                      title === "Tech Fest Team"
                        ? "5 members • 3 online"
                        : title === "Cultural Committee"
                          ? "4 members • 0 online"
                          : "3 members • 1 online"
                    }</p>
                </div>
            </div>
            <div class="chat-actions">
                <button class="btn btn-sm btn-outline-secondary"><i class="fas fa-phone"></i></button>
                <button class="btn btn-sm btn-outline-secondary"><i class="fas fa-video"></i></button>
                <button class="btn btn-sm btn-outline-secondary"><i class="fas fa-info-circle"></i></button>
            </div>
        `

    // Update chat messages based on selected chat
    if (title === "Tech Fest Team") {
      // Keep the default chat messages
    } else if (title === "Cultural Committee") {
      chatMessages.innerHTML = `
                <div class="message-date-divider">
                    <span>Yesterday</span>
                </div>
                
                <div class="message received">
                    <div class="message-avatar">
                        <img src="../images/user-avatar.png" alt="User">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <span class="message-sender">Sarah Williams</span>
                            <span class="message-time">3:45 PM</span>
                        </div>
                        <div class="message-body">
                            <p>Good news everyone! The venue for the Cultural Festival has been confirmed. We'll be using the College Grounds.</p>
                        </div>
                    </div>
                </div>
                
                <div class="message received">
                    <div class="message-avatar">
                        <img src="../images/user-avatar.png" alt="User">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <span class="message-sender">Sarah Williams</span>
                            <span class="message-time">3:47 PM</span>
                        </div>
                        <div class="message-body">
                            <p>Here's the layout plan for the event:</p>
                            <div class="message-attachment">
                                <i class="fas fa-file-pdf"></i>
                                <span>Cultural_Festival_Layout.pdf</span>
                                <a href="#" class="download-btn"><i class="fas fa-download"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="message sent">
                    <div class="message-content">
                        <div class="message-header">
                            <span class="message-time">4:00 PM</span>
                        </div>
                        <div class="message-body">
                            <p>That's great news! Have we finalized the list of performances and their time slots?</p>
                        </div>
                    </div>
                </div>
                
                <div class="message received">
                    <div class="message-avatar">
                        <img src="../images/user-avatar.png" alt="User">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <span class="message-sender">Michael Chen</span>
                            <span class="message-time">4:05 PM</span>
                        </div>
                        <div class="message-body">
                            <p>We're still working on the final schedule. Should be ready by tomorrow.</p>
                        </div>
                    </div>
                </div>
            `
    } else if (title === "Workshop Coordinators") {
      chatMessages.innerHTML = `
                <div class="message-date-divider">
                    <span>September 20, 2023</span>
                </div>
                
                <div class="message received">
                    <div class="message-avatar">
                        <img src="../images/user-avatar.png" alt="User">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <span class="message-sender">Alex Johnson</span>
                            <span class="message-time">11:30 AM</span>
                        </div>
                        <div class="message-body">
                            <p>Update on the AI Workshop: All speakers have confirmed their participation.</p>
                        </div>
                    </div>
                </div>
                
                <div class="message received">
                    <div class="message-avatar">
                        <img src="../images/user-avatar.png" alt="User">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <span class="message-sender">Alex Johnson</span>
                            <span class="message-time">11:32 AM</span>
                        </div>
                        <div class="message-body">
                            <p>Here's the final list of speakers and their topics:</p>
                            <div class="message-attachment">
                                <i class="fas fa-file-excel"></i>
                                <span>AI_Workshop_Speakers.xlsx</span>
                                <a href="#" class="download-btn"><i class="fas fa-download"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="message sent">
                    <div class="message-content">
                        <div class="message-header">
                            <span class="message-time">11:45 AM</span>
                        </div>
                        <div class="message-body">
                            <p>This looks great! Do we have their presentation slides yet?</p>
                        </div>
                    </div>
                </div>
                
                <div class="message received">
                    <div class="message-avatar">
                        <img src="../images/user-avatar.png" alt="User">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <span class="message-sender">Alex Johnson</span>
                            <span class="message-time">11:50 AM</span>
                        </div>
                        <div class="message-body">
                            <p>We've received slides from 3 out of 5 speakers. I'll follow up with the remaining two.</p>
                        </div>
                    </div>
                </div>
                
                <div class="message sent">
                    <div class="message-content">
                        <div class="message-header">
                            <span class="message-time">11:55 AM</span>
                        </div>
                        <div class="message-body">
                            <p>Perfect. Let's also make sure the computer lab is properly set up for the workshop.</p>
                        </div>
                    </div>
                </div>
            `
    }
  }
}

function initChat() {
  const chatInput = document.querySelector(".chat-input input")
  const sendBtn = document.querySelector(".send-btn")

  if (chatInput && sendBtn) {
    // Send message on button click
    sendBtn.addEventListener("click", () => {
      sendMessage(chatInput.value)
    })

    // Send message on Enter key
    chatInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        sendMessage(this.value)
      }
    })
  }
}

function sendMessage(message) {
  if (!message.trim()) return

  const chatMessages = document.querySelector(".chat-messages")
  const chatInput = document.querySelector(".chat-input input")

  // Create new message element
  const messageElement = document.createElement("div")
  messageElement.classList.add("message", "sent")

  // Set message content
  messageElement.innerHTML = `
        <div class="message-content">
            <div class="message-header">
                <span class="message-time">${getCurrentTime()}</span>
            </div>
            <div class="message-body">
                <p>${message}</p>
            </div>
        </div>
    `

  // Add message to chat
  chatMessages.appendChild(messageElement)

  // Clear input
  chatInput.value = ""

  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight

  // Simulate response after 1-2 seconds
  setTimeout(
    () => {
      simulateResponse(message)
    },
    Math.random() * 1000 + 1000,
  )
}

function simulateResponse(message) {
    const chatMessages = document.querySelector('.chat-messages');
    const activeChat = document.querySelector('.comm-item.active .comm-details h4').textContent;
    
    // Create response element
    const responseElement = document.createElement('div');
    responseElement.classList.add('message', 'received');
    
    // Generate response based on active chat
    let response = '';
    let sender = '';
    
    if (activeChat === 'Tech Fest Team') {
        sender = 'John Doe';
        
        if (message.toLowerCase().includes('budget')) {
            response = 'The budget spreadsheet has been updated. I\'ll share the latest version soon.';
        } else if (message.toLowerCase().includes('schedule')) {
            response = 'The schedule looks good. Let\'s finalize it in tomorrow's meeting.';\
        } else if (message.toLowerCase().includes('speaker') || message.toLowerCase().includes('speakers')) {
            response = 'All speakers have been confirmed. We're just waiting for their presentation materials

