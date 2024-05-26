document.addEventListener("DOMContentLoaded", function () {
  // Navbar show/hide on scroll
  const navbar = document.getElementById("navbar");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Downscroll
      navbar.classList.add("show-navbar");
    } else {
      // Upscroll
      navbar.classList.remove("show-navbar");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });

  // 'Back to Top' button smooth scroll
  document
    .querySelector(".back-to-top a")
    .addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Data proyek
const projectsData = [
  {
    imgSrc: "src/img/content/work/project1.jpg",
    title: "Web Design",
  },
  {
    imgSrc: "src/img/content/work/project2.jpg",
    title: "Web Development & SEO",
  },
  {
    imgSrc: "src/img/content/work/project3.jpg",
    title: "Web Development & SEO",
  },
  {
    imgSrc: "src/img/content/work/project4.jpg",
    title: "Graphic Design",
  },
  {
    imgSrc: "src/img/content/work/project5.jpg",
    title: "Web Design",
  },
  {
    imgSrc: "src/img/content/work/project6.jpg",
    title: "Graphic Design",
  },
  {
    imgSrc: "src/img/content/work/project7.jpg",
    title: "Web Design",
  },
  {
    imgSrc: "src/img/content/work/project8.jpg",
    title: "Web Development & SEO",
  },
  {
    imgSrc: "src/img/content/work/project9.jpg",
    title: "Web Development & SEO",
  },
  {
    imgSrc: "src/img/content/work/project10.jpg",
    title: "Graphic Design",
  },
  {
    imgSrc: "src/img/content/work/project11.jpg",
    title: "Web Development & SEO",
  },
  {
    imgSrc: "src/img/content/work/project12.jpg",
    title: "Web Development & SEO",
  },
];

// Ambil elemen tempat proyek akan ditampilkan
const projectsContainer = document.querySelector(".projects");

// Loop melalui data proyek dan tambahkan elemen untuk setiap proyek
projectsData.forEach((project) => {
  // Buat elemen proyek
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");

  // Buat gambar proyek
  const imgElement = document.createElement("img");
  imgElement.classList.add("project-img");
  imgElement.src = project.imgSrc;
  imgElement.alt = project.title;

  // Buat info proyek
  const projectInfoElement = document.createElement("div");
  projectInfoElement.classList.add("project-info");

  // Buat tautan proyek
  const linkElement = document.createElement("a");
  linkElement.href = "#";
  linkElement.classList.add("btn-view");
  linkElement.textContent = project.title;

  // Buat ikon tautan
  const iconElement = document.createElement("img");
  iconElement.src = "src/img/icon/arrow.svg";
  iconElement.classList.add("icon-link");
  iconElement.alt = "View Project";

  // Masukkan elemen ikon ke dalam tautan
  linkElement.appendChild(iconElement);

  // Masukkan tautan ke dalam info proyek
  projectInfoElement.appendChild(linkElement);

  // Masukkan gambar dan info proyek ke dalam elemen proyek
  projectElement.appendChild(imgElement);
  projectElement.appendChild(projectInfoElement);

  // Masukkan elemen proyek ke dalam kontainer proyek
  projectsContainer.appendChild(projectElement);
});

// Service Section Data
const servicesData = [
  {
    icon: "src/img/content/services/web-dev.svg",
    title: "Web Development & SEO",
    description:
      "I can build beautiful and responsive websites that will help you achieve your business goals.",
  },
  {
    icon: "src/img/content/services/web-design.svg",
    title: "Web Design",
    description:
      "I can design beautiful and responsive websites that will help you achieve your business goals.",
  },
  {
    icon: "src/img/content/services/graphic-design.svg",
    title: "Graphic Design",
    description:
      "I can create stunning graphics that will help you stand out from your competitors.",
  },
];

// Ambil elemen tempat layanan akan ditampilkan
const servicesContainer = document.querySelector(".services");

// Loop melalui data layanan dan tambahkan elemen untuk setiap layanan
servicesData.forEach((service) => {
  // Buat elemen service
  const serviceElement = document.createElement("div");
  serviceElement.classList.add("service");

  // Buat ikon service
  const iconElement = document.createElement("img");
  iconElement.src = service.icon;
  iconElement.alt = service.title;
  iconElement.classList.add("icon-service");

  // Buat info service
  const serviceInfoElement = document.createElement("div");
  serviceInfoElement.classList.add("service-info");

  // Buat judul service
  const titleElement = document.createElement("h3");
  titleElement.textContent = service.title;

  // Buat deskripsi service
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = service.description;

  // Masukkan elemen-elemen ke dalam struktur
  serviceInfoElement.appendChild(titleElement);
  serviceInfoElement.appendChild(descriptionElement);
  serviceElement.appendChild(iconElement);
  serviceElement.appendChild(serviceInfoElement);

  // Masukkan elemen service ke dalam kontainer services
  servicesContainer.appendChild(serviceElement);
});

// Tech Stack Section Data
const techStackData = [
  {
    icon: "src/img/icon/content/stack/html.svg",
    name: "HTML",
    description: "Strucure and content",
  },
  {
    icon: "src/img/icon/content/stack/css.svg",
    name: "CSS",
    description: "Styling and layout",
  },
  {
    icon: "src/img/icon/content/stack/javascript.svg",
    name: "JavaScript",
    description: "Interactivity and functionality",
  },
  {
    icon: "src/img/icon/content/stack/php.svg",
    name: "PHP",
    description: "Server-side scripting language",
  },
  {
    icon: "src/img/icon/content/stack/mysql.svg",
    name: "MySQL",
    description: "Relational database",
  },
  {
    icon: "src/img/icon/content/stack/laravel.svg",
    name: "Laravel",
    description: "PHP framework",
  },
  {
    icon: "src/img/icon/content/stack/sass.svg",
    name: "Sass",
    description: "CSS preprocessor",
  },
  {
    icon: "src/img/icon/content/stack/bootstrap.svg",
    name: "Bootstrap",
    description: "Front-end framework",
  },
  {
    icon: "src/img/icon/content/stack/tailwind.svg",
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
  },
  {
    icon: "src/img/icon/content/stack/react.svg",
    name: "React",
    description: "JavaScript library",
  },
  {
    icon: "src/img/icon/content/stack/vue.svg",
    name: "Vue JS",
    description: "JavaScript framework",
  },
  {
    icon: "src/img/icon/content/stack/nodejs.svg",
    name: "Node.js",
    description: "JavaScript runtime",
  },
  {
    icon: "src/img/icon/content/stack/mongodb.svg",
    name: "MongoDB",
    description: "NoSQL database",
  },
  {
    icon: "src/img/icon/content/stack/vscode.svg",
    name: "Visual Studio Code",
    description: "Code editor",
  },
];

// Ambil elemen tempat stack teknologi akan ditampilkan
const stackContainer = document.querySelector(".stacks");

// Loop melalui data stack teknologi dan tambahkan elemen untuk setiap stack
techStackData.forEach((stack) => {
  // Buat elemen stack
  const stackElement = document.createElement("div");
  stackElement.classList.add("stack");

  // Buat link stack
  const stackLinkElement = document.createElement("span");
  stackLinkElement.classList.add("stack-link");
  stackLinkElement.href = "#"; // Add appropriate link if needed

  // Buat ikon stack
  const iconElement = document.createElement("img");
  iconElement.src = stack.icon;
  iconElement.alt = stack.name;
  iconElement.classList.add("icon-stack");

  // Buat info stack
  const stackInfoElement = document.createElement("div");
  stackInfoElement.classList.add("title-profile");

  // Buat nama stack
  const nameElement = document.createElement("span");
  nameElement.classList.add("title-stack");
  nameElement.textContent = stack.name;

  // Buat deskripsi stack
  const descriptionElement = document.createElement("span");
  descriptionElement.classList.add("text-stack");
  descriptionElement.textContent = stack.description;

  // Masukkan elemen-elemen ke dalam struktur
  stackInfoElement.appendChild(nameElement);
  stackInfoElement.appendChild(descriptionElement);
  stackLinkElement.appendChild(iconElement);
  stackLinkElement.appendChild(stackInfoElement);
  stackElement.appendChild(stackLinkElement);

  // Masukkan elemen stack ke dalam kontainer stack
  stackContainer.appendChild(stackElement);
});

// Get the modal
const modal = document.getElementById("contactModal");

// Get the button that opens the modal
const btn = document.querySelector(".btn-get");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.classList.add("fade-out"); // Add fade-out animation class
  setTimeout(() => {
    modal.style.display = "none"; // Hide modal after animation completes
    modal.classList.remove("fade-out"); // Remove animation class for next open
  }, 100); // Adjust timing to match animation duration
}

// Event listener for opening the modal
btn.addEventListener("click", openModal);

// Event listener for closing the modal when clicking on <span> (x)
span.addEventListener("click", closeModal);

// Event listener for closing the modal when clicking anywhere outside of the modal
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});

// Function to handle key press event for sending email when 's' or 'S' key is pressed
function handleKeyPress(event) {
  if (event.key === "s" || event.key === "S") {
    window.location.href = "mailto:johndale@example.com";
  }
}

// Add event listener for keydown event
document.addEventListener("keydown", handleKeyPress);

// Slider untuk Project Section
const projectSlider = document.querySelector(".projects-container");
const projects = document.querySelector(".projects");

// Slider untuk Stack Section
const stackSlider = document.querySelector(".stack-container");
const stacks = document.querySelector(".stacks");

let isPressed = false;
let startX;
let scrollLeft;

// Stack Slider Function
stackSlider.addEventListener("mousedown", (e) => {
  isPressed = true;
  startX = e.pageX - stackSlider.offsetLeft;
  scrollLeft = stackSlider.scrollLeft;
  stacks.style.animation = "none"; // Hentikan animasi
  stackSlider.style.cursor = "grabbing";
});

stackSlider.addEventListener("mouseleave", () => {
  if (isPressed) {
    stacks.style.animation = "none";
  }
  isPressed = false;
});

stackSlider.addEventListener("mouseup", () => {
  if (isPressed) {
    stacks.style.animation = "none";
  }
  isPressed = false;
  stackSlider.style.cursor = "grab";
});

stackSlider.addEventListener("mousemove", (e) => {
  if (!isPressed) return;
  e.preventDefault();
  const x = e.pageX - stackSlider.offsetLeft;
  const walk = (x - startX) * 2; // Tingkatkan nilai untuk menggeser lebih cepat
  stackSlider.scrollLeft = scrollLeft - walk;
});

//Project Slider Function
projectSlider.addEventListener("mousedown", (e) => {
  isPressed = true;
  startX = e.pageX - projectSlider.offsetLeft;
  scrollLeft = projectSlider.scrollLeft;
  projects.style.animation = "none"; // Hentikan animasi
  projectSlider.style.cursor = "grabbing";
});

projectSlider.addEventListener("mouseleave", () => {
  if (isPressed) {
    projects.style.animation = "none";
  }
  isPressed = false;
});

projectSlider.addEventListener("mouseup", () => {
  if (isPressed) {
    projects.style.animation = "none";
  }
  isPressed = false;
  projectSlider.style.cursor = "grab";
});

projectSlider.addEventListener("mousemove", (e) => {
  if (!isPressed) return;
  e.preventDefault();
  const x = e.pageX - projectSlider.offsetLeft;
  const walk = (x - startX) * 2; // Tingkatkan nilai untuk menggeser lebih cepat
  projectSlider.scrollLeft = scrollLeft - walk;
});
