const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll(".nav-links a");

function showSection(id){
  sections.forEach(sec=>{
    sec.classList.remove("active");
    if(sec.id === id){
      sec.classList.add("active");
      sec.scrollIntoView({ behavior: "smooth" }); 
    }
  });
}

links.forEach(link=>{
  link.addEventListener("click",(e)=>{
    e.preventDefault();
    const target = link.getAttribute("href").substring(1);
    showSection(target);

    links.forEach(l=>l.classList.remove("active"));
    link.classList.add("active");
  });
});

// default
showSection("home");