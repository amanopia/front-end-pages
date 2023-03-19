const navLinks = document.querySelectorAll('.nav-links');


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