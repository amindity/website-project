let sections = document.querySelectorAll("section")
let navlink = document.querySelectorAll('header nav a')
let header = document.querySelector('.header')

window.onscroll = ()=>{
  sections.forEach(sec =>{
    let top = window.scrollY ;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if(top >= offset && top < offset + height) {
      navlink.forEach(link =>{
        link.classList.remove('active')
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      })
    }
  })

  header.classList.toggle('active' , window.scrollY > 100)
}