



// Scroll effect 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

// blob part

const all = document.querySelectorAll(".card");

window.addEventListener("mousemove", (ev) => {
 
  all.forEach((e) => {
    const blob = e.querySelector(".blob");
    const fblob = e.querySelector(".fakeblob");
    const rec = fblob.getBoundingClientRect();
    blob.style.opacity = "1";
 
    blob.animate(
      [
        {
          transform: `translate(${
            (ev.clientX - rec.left) - (rec.width / 2)
          }px,${(ev.clientY - rec.top) - (rec.height / 2)}px)`
        }
      ],
      {
        duration: 300,
        fill: "forwards"
      }
    );
  });
});

// slider scroll

let scrollContainer = document.querySelector(".slidebarGallery")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "smooth";
});


nextBtn.addEventListener("click", ()=> {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", ()=> {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});
