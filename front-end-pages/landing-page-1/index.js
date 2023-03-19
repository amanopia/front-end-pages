const navLinks = document.querySelectorAll('.nav-links');

for(let i = 1; i<navLinks.length; i++){
    console.log(navLinks[i]);
    navLinks[i].style.color = "var(--color-disabled)";
}

// console.log()

for(let i = 1; i<navLinks.length;i++){
    navLinks[i].addEventListener('mouseover', function(){
        navLinks[i].style.color = "var(--color-active)";
    })
    navLinks[i].addEventListener('mouseout', function(){
        navLinks[i].style.color = "var(--color-disabled)"
    })
}