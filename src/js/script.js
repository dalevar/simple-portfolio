document.addEventListener("DOMContentLoaded", function () {
  // Navbar show/hide
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
  // END Navbar show/hide

  // 'Back to Top'
  document
    .querySelector(".back-to-top a")
    .addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  // END 'Back to Top'

  // MODAL
  const modal = document.getElementById("contactModal");
  const buttons = document.querySelectorAll("#btn-modal-1, #btn-modal-2");
  const span = document.getElementsByClassName("close")[0];

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    modal.classList.add("fade-out");
    setTimeout(() => {
      modal.style.display = "none";
      modal.classList.remove("fade-out");
    }, 300);
  }

  // menambahkan event listener untuk setiap button
  buttons.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  span.addEventListener("click", closeModal);
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      closeModal();
    }
  });
  // END MODAL
});

// Fungsi ketika tombol 's' ditekan
function handleKeyPress(event) {
  if (event.key === "s" || event.key === "S") {
    window.location.href = "mailto:johndale@example.com";
  }
}
// Tambahkan event listener untuk menangkap tombol yang ditekan
document.addEventListener("keydown", handleKeyPress);
// END Fungsi ketika tombol 's' ditekan

// Fungsi untuk menggeser slider dengan mouse
const projectSlider = document.querySelector(".projects-container");
const projects = document.querySelector(".projects");

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
// END Stack Slider Function

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
// END Project Slider Function

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

const projectsContainer = document.querySelector(".projects");
projectsData.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");

  const imgElement = document.createElement("img");
  imgElement.classList.add("project-img");
  imgElement.src = project.imgSrc;
  imgElement.alt = project.title;

  const projectInfoElement = document.createElement("div");
  projectInfoElement.classList.add("project-info");

  const linkElement = document.createElement("a");
  linkElement.href = "#";
  linkElement.classList.add("btn-view");
  linkElement.textContent = project.title;

  const iconElement = document.createElement("img");
  iconElement.src = "src/img/icon/arrow.svg";
  iconElement.classList.add("icon-link");
  iconElement.alt = "View Project";

  linkElement.appendChild(iconElement);
  projectInfoElement.appendChild(linkElement);
  projectElement.appendChild(imgElement);
  projectElement.appendChild(projectInfoElement);
  projectsContainer.appendChild(projectElement);
});
// END Data proyek

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

const servicesContainer = document.querySelector(".services");

servicesData.forEach((service) => {
  const serviceElement = document.createElement("div");
  serviceElement.classList.add("service");

  const iconElement = document.createElement("img");
  iconElement.src = service.icon;
  iconElement.alt = service.title;
  iconElement.classList.add("icon-service");

  const serviceInfoElement = document.createElement("div");
  serviceInfoElement.classList.add("service-info");

  const titleElement = document.createElement("h3");
  titleElement.textContent = service.title;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = service.description;

  serviceInfoElement.appendChild(titleElement);
  serviceInfoElement.appendChild(descriptionElement);
  serviceElement.appendChild(iconElement);
  serviceElement.appendChild(serviceInfoElement);
  servicesContainer.appendChild(serviceElement);
});
// END Service Section Data

// Tech Stack Data
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
    icon: "src/img/icon/content/stack/typescript.svg",
    name: "TypeScript",
    description: "JavaScript superset",
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
    icon: "src/img/icon/content/stack/postgree.svg",
    name: "PostgreSQL",
    description: "Object-relational database",
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
    icon: "src/img/icon/content/stack/prisma.svg",
    name: "Prisma",
    description: "Database toolkit",
  },
  {
    icon: "src/img/icon/content/stack/sequelize.svg",
    name: "Sequelize",
    description: "Node.js ORM",
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

const stackContainer = document.querySelector(".stacks");

techStackData.forEach((stack) => {
  const stackElement = document.createElement("div");
  stackElement.classList.add("stack");

  const stackLinkElement = document.createElement("span");
  stackLinkElement.classList.add("stack-link");
  stackLinkElement.href = "#";

  const iconElement = document.createElement("img");
  iconElement.src = stack.icon;
  iconElement.alt = stack.name;
  iconElement.classList.add("icon-stack");

  const stackInfoElement = document.createElement("div");
  stackInfoElement.classList.add("title-profile");

  const nameElement = document.createElement("span");
  nameElement.classList.add("title-stack");
  nameElement.textContent = stack.name;

  const descriptionElement = document.createElement("span");
  descriptionElement.classList.add("text-stack");
  descriptionElement.textContent = stack.description;

  stackInfoElement.appendChild(nameElement);
  stackInfoElement.appendChild(descriptionElement);
  stackLinkElement.appendChild(iconElement);
  stackLinkElement.appendChild(stackInfoElement);
  stackElement.appendChild(stackLinkElement);
  stackContainer.appendChild(stackElement);
});
// END Tech Stack Data
