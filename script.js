// Add more motion effects on click
const buttons = document.querySelectorAll('.motion-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked'); // Add "clicked" class
    setTimeout(() => {
      button.classList.remove('clicked'); // Remove class after animation
    }, 300);
  });
});
// Open Popup Function
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
  }
  
  // Close Popup Function
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
  }
  
  // Add Event Listeners for Boxes
  document.getElementById('box1').addEventListener('click', () => openPopup('popup1'));
  document.getElementById('box2').addEventListener('click', () => openPopup('popup2'));
  document.getElementById('box3').addEventListener('click', () => openPopup('popup3'));



// const wrapper = document.getElementById("testimonialWrapper");
// const testimonials = document.querySelectorAll(".testimonial-box");
// let currentIndex = 0;

// function updateTestimonials() {
//     const total = testimonials.length;

//     // Remove "middle" class from all testimonials
//     testimonials.forEach((testimonial) => testimonial.classList.remove("middle"));

//     // Calculate indexes for middle, left, and right positions
//     const leftIndex = (currentIndex - 1 + total) % total;
//     const rightIndex = (currentIndex + 1) % total;

//     // Assign the "middle" class to the current middle testimonial
//     testimonials[currentIndex].classList.add("middle");

//     // Adjust transform for smooth sliding
//     const offset = -33.33 * currentIndex; // Move to the current testimonial
//     wrapper.style.transform = `translateX(${offset}%)`;

//     // Update current index for the next slide
//     currentIndex = (currentIndex + 1) % total;
// }

// // Auto-slide every 3 seconds
// setInterval(updateTestimonials, 3000);

// // Initialize the slider
// updateTestimonials();
const wrapper = document.getElementById("testimonialWrapper");
        const testimonials = document.querySelectorAll(".testimonial-box");
        const total = testimonials.length - 2; // Exclude the clones
        let currentIndex = 1; // Start from the real first testimonial

        function updateTestimonials() {
            // Remove middle class from all
            testimonials.forEach((testimonial) => testimonial.classList.remove("middle"));

            // Add middle class to the center box
            testimonials[currentIndex].classList.add("middle");

            // Slide the testimonials
            const offset = -33.33 * currentIndex;
            wrapper.style.transition = "transform 1s ease-in-out";
            wrapper.style.transform = `translateX(${offset}%)`;

            // Adjust for circular effect (reset to real content when at clone)
            setTimeout(() => {
                if (currentIndex === 0) {
                    currentIndex = total;
                    wrapper.style.transition = "none";
                    wrapper.style.transform = `translateX(${-33.33 * currentIndex}%)`;
                } else if (currentIndex === total + 1) {
                    currentIndex = 1;
                    wrapper.style.transition = "none";
                    wrapper.style.transform = `translateX(${-33.33 * currentIndex}%)`;
                }
            }, 1000);

            currentIndex++;
        }

        // Auto-slide every 3 seconds
        setInterval(updateTestimonials, 3000);

        // Initialize slider
        wrapper.style.transform = `translateX(${-33.33 * currentIndex}%)`;
        testimonials[currentIndex].classList.add("middle");

// document.addEventListener("DOMContentLoaded", () => {
//           const hamburgerMenu = document.querySelector(".hamburger-menu");
//           const navLinks = document.querySelector(".nav-links");
      
//           // Toggle nav-links visibility
//           hamburgerMenu.addEventListener("click", () => {
//               navLinks.classList.toggle("active");
//           });
//       });
      
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Toggle nav-links visibility
  hamburgerMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });

  // Handle dropdown toggling
  dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      toggle.addEventListener("click", (e) => {
          e.preventDefault(); // Prevent navigation
          dropdown.classList.toggle("active");
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const toggleIcon = item.querySelector(".toggle-icon");

        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // Collapse all other items
            faqItems.forEach((otherItem) => {
                otherItem.classList.remove("active");
                otherItem.querySelector(".faq-answer").style.display = "none";
                otherItem.querySelector(".toggle-icon").textContent = "+";
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add("active");
                answer.style.display = "block";
                toggleIcon.textContent = "-";
            } else {
                item.classList.remove("active");
                answer.style.display = "none";
                toggleIcon.textContent = "+";
            }
        });
    });
});
