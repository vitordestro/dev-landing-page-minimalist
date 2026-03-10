const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("hidden-left")) {
        entry.target.classList.add("show-left")
      }

      if (entry.target.classList.contains("hidden")) {
        entry.target.classList.add("show")
      }
    }
  })
})

const elements = document.querySelectorAll(".hidden, .hidden-left")
elements.forEach((element) => myObserver.observe(element))


