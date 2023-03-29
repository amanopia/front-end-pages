const navLinks = document.querySelectorAll('.nav-links');
const brandLogo = document.querySelectorAll('.brand-logo');
const headingChildNodes = document.querySelector('.headings').childNodes;
console.
for(let i = 1; i<navLinks.length; i++){
    navLinks[0].style.fontWeight = 700;
    navLinks[i].style.color = "var(--color-disabled)";
    navLinks[i].style.transition = "all 0.4s ease";
}

for(let i = 1; i<navLinks.length;i++){
    navLinks[i].addEventListener('mouseover', function(){
        navLinks[i].style.color = "var(--color-active)";
        navLinks[i].classList.add('h');
    })
    navLinks[i].addEventListener('mouseout', function(){
        navLinks[i].style.color = "var(--color-disabled)"
    })
}

// INTERSECTION OBSERVER

const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        entry.target.classList.toggle('show', entry.isIntersecting);
        if(entry.isIntersecting) observer.unobserve(entry.target);
    })
},{
   rootMargin: "-100px"
})

brandLogo.forEach(function(logo){
    observer.observe(logo)
})

