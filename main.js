// Add smooth scrolling to navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });



// const follower = document.querySelector('.follower');

// document.addEventListener('mousemove', e => {
//     const x = e.clientX;
//     const y = e.clientY;

//     follower.style.left = x + 'px';
//     follower.style.top = y + 'px';
// });


document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Follower animation
    const follower = document.querySelector('.follower');
    document.addEventListener('mousemove', e => {
        const x = e.clientX;
        const y = e.clientY;

        follower.style.left = x + 'px';
        follower.style.top = y + 'px';
    });


   

    // Animation 1: Fade in on scroll
    const fadeInElements = document.querySelectorAll('.fadeIn');
    fadeInElements.forEach(element => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('fadeInAnimation');
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(element);
    });

    // Animation 2: Parallax effect
    window.addEventListener('scroll', () => {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
            const distance = window.scrollY;
            element.style.transform = `translateY(${distance * 0.5}px)`;
        });
    });

    // Animation 3: Rotate on hover
    const rotateElements = document.querySelectorAll('.rotate');
    rotateElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'rotate(360deg)';
        });
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'rotate(0deg)';
        });
    });
});



// HOME CHANGER
const headings = ["Front-end Developer", "Designer", "Creator","Video Editor"];
let currentIndex = 0;

function changeHeading() {
  gsap.to(".heading", {
    duration: 1,
    opacity: 0,
    onComplete: updateText,
    onCompleteParams: [headings[currentIndex]]
  });
}

function updateText(text) {
  currentIndex = (currentIndex + 1) % headings.length;
  const headingElement = document.querySelector(".heading");
  headingElement.textContent = "";
  const words = text.split(" ");
  words.forEach((word, wordIndex) => {
    const wordContainer = document.createElement("span");
    word.split("").forEach((letter, letterIndex) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.opacity = 0;
      span.style.display = "inline-block";
      wordContainer.appendChild(span);
      gsap.to(span, {
        duration: 0.5,
        opacity: 1,
        delay: 0.1 * (wordIndex * 5 + letterIndex)
      });
    });
    headingElement.appendChild(wordContainer);
    headingElement.appendChild(document.createTextNode(" "));
  });
  gsap.to(".heading", { duration: 1, opacity: 1, delay: 0.1 * (words.length * 5) });
}

setInterval(changeHeading, 3000); // Change heading every 3 seconds


