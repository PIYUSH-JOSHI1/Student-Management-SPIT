document.addEventListener("DOMContentLoaded", () => {
  // Generate Content Button
  const generateBtn = document.getElementById("generateBtn")
  if (generateBtn) {
    generateBtn.addEventListener("click", () => {
      const eventSelect = document.getElementById("eventSelect")
      const contentType = document.getElementById("contentType")
      const contentTone = document.getElementById("contentTone")
      const contentKeywords = document.getElementById("contentKeywords")

      // Validate inputs
      if (
        eventSelect.value === "Choose an event..." ||
        contentType.value === "Choose content type..." ||
        contentTone.value === "Choose tone..."
      ) {
        alert("Please select all required fields")
        return
      }

      // Show loading state
      const generatedContent = document.querySelector(".generated-content")
      generatedContent.innerHTML = `
                <div class="text-center">
                    <div class="spinner-border text-primary mb-3" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <p>Generating content with AI...</p>
                </div>
            `

      // Simulate AI content generation (would be replaced with actual API call)
      setTimeout(() => {
        let content = ""

        // Generate different content based on selections
        if (contentType.value === "social") {
          if (eventSelect.value === "1") {
            // Tech Fest
            content = `🚀 Exciting news! SPIT Tech Fest 2023 is just around the corner! Join us on October 15-17 for three days of innovation, learning, and networking.

Featured events include:
✅ Keynote speeches from industry leaders
✅ Hands-on workshops on emerging technologies
✅ Hackathon with attractive prizes
✅ Technical paper presentations

Register now at [link] to secure your spot! Early bird registrations closing soon. #SPITTechFest2023 #Innovation #Technology`
          } else if (eventSelect.value === "2") {
            // Cultural Festival
            content = `🎭 SPIT Cultural Festival is back and bigger than ever! Mark your calendars for November 5-7 and get ready for an unforgettable celebration of art, music, and culture.

What to expect:
✨ Music performances by talented artists
✨ Dance competitions
✨ Art exhibitions
✨ Food stalls with diverse cuisines

Registrations now open! Visit [link] to register and be part of this cultural extravaganza. #SPITCulturalFest #CelebrateCulture`
          } else {
            // AI Workshop
            content = `🤖 Dive into the world of Artificial Intelligence at our upcoming AI Workshop on October 25! Whether you're a beginner or have some experience, this workshop is designed for everyone interested in AI.

Learn about:
🔹 Machine Learning fundamentals
🔹 Neural Networks
🔹 Practical applications of AI
🔹 Hands-on projects

Limited seats available! Register now at [link]. #AIWorkshop #MachineLearning #SPIT`
          }
        } else if (contentType.value === "email") {
          if (eventSelect.value === "1") {
            // Tech Fest
            content = `Subject: Invitation to SPIT Tech Fest 2023 - October 15-17

Dear [Participant],

We are delighted to invite you to SPIT Tech Fest 2023, our annual technology festival that brings together students, faculty, and industry professionals for three days of innovation, learning, and networking.

Event Details:
- Date: October 15-17, 2023
- Venue: Main Auditorium, SPIT Campus
- Time: 9:00 AM - 6:00 PM daily

Highlights of the event include:
• Keynote speeches from industry leaders
• Hands-on workshops on emerging technologies
• Hackathon with attractive prizes
• Technical paper presentations
• Project exhibition
• Industry-academia networking sessions

Registration is now open! Early bird registrations close on September 30, 2023. To register, please visit our website [link].

We look forward to your participation in making SPIT Tech Fest 2023 a grand success.

Best regards,
The Tech Fest Team
SPIT College`
          } else if (eventSelect.value === "2") {
            // Cultural Festival
            content = `Subject: Join us for SPIT Cultural Festival 2023 - November 5-7

Dear [Participant],

It is with great pleasure that we invite you to be a part of SPIT Cultural Festival 2023, a celebration of art, music, dance, and creativity.

Event Details:
- Date: November 5-7, 2023
- Venue: College Grounds, SPIT Campus
- Time: 10:00 AM - 9:00 PM daily

The festival will feature:
• Music performances by talented artists
• Dance competitions
• Drama and theatrical performances
• Art exhibitions
• Food stalls with diverse cuisines
• Fun games and activities

Registration is now open! To register for the events or to book your stall, please visit our website [link].

We hope to see you there as we celebrate the rich cultural diversity of our community.

Warm regards,
The Cultural Committee
SPIT College`
          } else {
            // AI Workshop
            content = `Subject: Registration Open for AI Workshop - October 25, 2023

Dear [Participant],

We are excited to announce our upcoming AI Workshop, designed to provide hands-on experience with artificial intelligence and machine learning concepts.

Workshop Details:
- Date: October 25, 2023
- Venue: Computer Lab, SPIT Campus
- Time: 10:00 AM - 4:00 PM

The workshop will cover:
• Introduction to AI and Machine Learning
• Neural Networks and Deep Learning
• Practical applications of AI in various industries
• Hands-on projects and exercises

This workshop is suitable for beginners as well as those with some experience in programming. Basic knowledge of Python is recommended but not mandatory.

Limited seats available! To register, please visit our website [link]. Registration fee includes workshop materials, lunch, and refreshments.

We look forward to exploring the fascinating world of AI with you!

Best regards,
The AI Workshop Team
SPIT College`
          }
        } else if (contentType.value === "poster") {
          if (eventSelect.value === "1") {
            // Tech Fest
            content = `SPIT TECH FEST 2023
INNOVATE. CREATE. ELEVATE.

October 15-17, 2023
Main Auditorium, SPIT Campus
9:00 AM - 6:00 PM

FEATURING:
• Keynote Speeches
• Tech Workshops
• Hackathon
• Project Exhibition
• Networking Opportunities

SPECIAL GUESTS:
• Industry leaders from top tech companies
• Renowned researchers and innovators

REGISTRATION:
Early Bird: ₹500 (Until Sep 30)
Regular: ₹750

Register now at [website]
or scan the QR code

For queries: techfest@spit.edu
+91 98765 43210

#SPITTechFest2023`
          } else if (eventSelect.value === "2") {
            // Cultural Festival
            content = `SPIT CULTURAL FESTIVAL 2023
CELEBRATE. EXPERIENCE. INSPIRE.

November 5-7, 2023
College Grounds, SPIT Campus
10:00 AM - 9:00 PM

EVENTS:
• Music Performances
• Dance Competitions
• Theatrical Shows
• Art Exhibitions
• Food Festival

PRIZES WORTH ₹2,00,000 TO BE WON!

Entry Fee:
Students: ₹300
Others: ₹500

Register now at [website]
or scan the QR code

For queries: culturalfest@spit.edu
+91 98765 43210

#SPITCulturalFest2023`
          } else {
            // AI Workshop
            content = `AI WORKSHOP
UNLOCK THE FUTURE OF TECHNOLOGY

October 25, 2023
Computer Lab, SPIT Campus
10:00 AM - 4:00 PM

LEARN:
• Machine Learning Fundamentals
• Neural Networks
• Practical AI Applications
• Hands-on Projects

SUITABLE FOR:
Beginners and intermediate learners
Basic Python knowledge recommended

LIMITED TO 100 PARTICIPANTS!

Registration Fee: ₹1,000
(Includes workshop materials, lunch & certificate)

Register now at [website]
or scan the QR code

For queries: aiworkshop@spit.edu
+91 98765 43210

#AIWorkshop #MachineLearning`
          }
        } else {
          // Press Release
          if (eventSelect.value === "1") {
            // Tech Fest
            content = `FOR IMMEDIATE RELEASE

SPIT COLLEGE ANNOUNCES TECH FEST 2023: A CELEBRATION OF INNOVATION AND TECHNOLOGY

Mumbai, September 15, 2023 - Sardar Patel Institute of Technology (SPIT) is proud to announce its annual technology festival, Tech Fest 2023, scheduled to take place from October 15 to 17, 2023, at the college's main auditorium.

Tech Fest 2023 aims to bring together students, faculty, and industry professionals for three days of innovation, learning, and networking. The event will feature keynote speeches from industry leaders, hands-on workshops on emerging technologies, a hackathon with attractive prizes, technical paper presentations, and a project exhibition.

"Tech Fest has always been a platform for students to showcase their technical prowess and innovative ideas," said Dr. [Name], Principal of SPIT College. "This year, we are focusing on cutting-edge technologies that are shaping our future, providing students with opportunities to learn from industry experts and apply their knowledge in practical scenarios."

The festival will host speakers from leading technology companies who will share insights on artificial intelligence, blockchain, cybersecurity, and other emerging fields. The hackathon, a highlight of the event, will challenge participants to develop solutions for real-world problems within a 24-hour timeframe.

Registration for Tech Fest 2023 is now open, with early bird registrations closing on September 30, 2023. For more information and to register, please visit
 [website].

About SPIT College:
Sardar Patel Institute of Technology is a premier engineering college in Mumbai, known for its academic excellence and industry-relevant curriculum. The college is committed to providing quality education and fostering innovation among its students.

Media Contact:
[Name]
Public Relations Officer
SPIT College
Email: pr@spit.edu
Phone: +91 98765 43210`
          } else if (eventSelect.value === "2") {
            // Cultural Festival
            content = `FOR IMMEDIATE RELEASE

SPIT COLLEGE ANNOUNCES CULTURAL FESTIVAL 2023: A CELEBRATION OF ART, MUSIC, AND CREATIVITY

Mumbai, October 1, 2023 - Sardar Patel Institute of Technology (SPIT) is excited to announce its annual Cultural Festival 2023, scheduled to take place from November 5 to 7, 2023, at the college grounds.

The Cultural Festival is a celebration of art, music, dance, and creativity, bringing together students from various colleges across the city. The three-day extravaganza will feature music performances by talented artists, dance competitions, drama and theatrical performances, art exhibitions, and a food festival showcasing diverse cuisines.

"Our Cultural Festival is not just an event; it's a platform for students to express themselves creatively and celebrate the rich cultural diversity of our community," said Dr. [Name], Principal of SPIT College. "We are looking forward to three days of artistic expression, cultural exchange, and community building."

The festival will host various competitions with prizes worth ₹2,00,000 to be won. From solo singing and group dance to photography and short film making, there's something for everyone with a creative bent of mind.

Registration for the Cultural Festival 2023 is now open. For more information and to register, please visit [website].

About SPIT College:
Sardar Patel Institute of Technology is a premier engineering college in Mumbai, known for its academic excellence and holistic approach to education. The college believes in nurturing not just technical skills but also the artistic and creative abilities of its students.

Media Contact:
[Name]
Public Relations Officer
SPIT College
Email: pr@spit.edu
Phone: +91 98765 43210`
          } else {
            // AI Workshop
            content = `FOR IMMEDIATE RELEASE

SPIT COLLEGE TO HOST AI WORKSHOP: EMPOWERING STUDENTS WITH ARTIFICIAL INTELLIGENCE SKILLS

Mumbai, October 10, 2023 - Sardar Patel Institute of Technology (SPIT) is set to host an intensive AI Workshop on October 25, 2023, at the college's computer lab. The workshop aims to provide hands-on experience with artificial intelligence and machine learning concepts to students and technology enthusiasts.

The one-day workshop will cover introduction to AI and machine learning, neural networks and deep learning, practical applications of AI in various industries, and hands-on projects and exercises. The workshop is designed to be accessible to beginners as well as those with some experience in programming.

"Artificial Intelligence is revolutionizing industries across the board, and there is a growing demand for professionals skilled in this field," said Prof. [Name], Head of the Computer Science Department at SPIT College. "This workshop is our effort to bridge the gap between theoretical knowledge and practical application, equipping students with the skills needed in today's job market."

The workshop will be conducted by industry experts and faculty members with extensive experience in AI and machine learning. Participants will receive workshop materials, lunch, refreshments, and a certificate of participation.

Registration for the AI Workshop is now open, with limited seats available. For more information and to register, please visit [website].

About SPIT College:
Sardar Patel Institute of Technology is a premier engineering college in Mumbai, known for its academic excellence and industry-relevant curriculum. The college is committed to providing quality education and fostering innovation among its students.

Media Contact:
[Name]
Public Relations Officer
SPIT College
Email: pr@spit.edu
Phone: +91 98765 43210`
          }
        }

        // Display the generated content
        generatedContent.innerHTML = `<div class="generated-text">${content.replace(/\n/g, "<br>")}</div>`

        // Enable the buttons
        document.querySelector(".mt-3 button:first-child").disabled = false
        document.querySelector(".mt-3 button:last-child").disabled = false

        // Add event listeners to the buttons
        document.querySelector(".mt-3 button:first-child").addEventListener("click", function () {
          // Copy to clipboard
          navigator.clipboard.writeText(content).then(() => {
            this.textContent = "Copied!"
            setTimeout(() => {
              this.textContent = "Copy"
            }, 2000)
          })
        })

        document.querySelector(".mt-3 button:last-child").addEventListener("click", () => {
          // Use this content (would implement actual functionality)
          alert("Content has been saved and can now be used in your campaigns.")
        })
      }, 2000)
    })
  }

  // Tool card buttons
  const toolButtons = document.querySelectorAll(".tool-card button")
  toolButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const toolName = this.closest(".tool-card").querySelector("h3").textContent

      if (toolName === "AI Content Generator") {
        // Scroll to AI Content Generator section
        document.querySelector(".card").scrollIntoView({ behavior: "smooth" })
      } else {
        // For other tools, show a message
        alert(`The ${toolName} feature will be available soon.`)
      }
    })
  })

  // Campaign action buttons
  const campaignButtons = document.querySelectorAll(".table button")
  campaignButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const campaign = this.closest("tr").querySelector("td:first-child").textContent
      const action = this.querySelector("i").className

      if (action.includes("edit")) {
        alert(`Edit campaign: ${campaign}`)
      } else if (action.includes("eye")) {
        alert(`View campaign: ${campaign}`)
      } else if (action.includes("pause")) {
        alert(`Pause campaign: ${campaign}`)
      } else if (action.includes("play")) {
        alert(`Activate campaign: ${campaign}`)
      }
    })
  })
})

