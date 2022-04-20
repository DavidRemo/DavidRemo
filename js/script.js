/* === Typing animation === */
var typed = new Typed(".typing",{
    strings:["","Front-end Developer","Web Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* === Scroll sections Active link === */
//get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

//add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
    //get current scroll position
    let scrollY = window.pageYOffset;
    //Now we loop through sections to get height, top and ID valued for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
        /* - If out current scroll position enters the space where current section on screen is, add .active class
        to corresponding navigation link, else remove it.
        - To know which link needs an active class, we use section Id variable we are getting while looping through
        sections as a selector*/
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.add("active")
        }
        else
        {
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.remove("active")
        }
    })
}

/* === Show sliding section === */
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        removeBackSection();
        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
                //  allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        //Hide the nav bar when a nav link is selected
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function showSection(element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

//Connect hire me button to contact class
function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

/* === Show Aside === */
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click", () =>
      {
          asideSectionTogglerBtn();
      })
      function asideSectionTogglerBtn()
      {
          aside.classList.toggle("open");
          navTogglerBtn.classList.toggle("open");
          for(let i=0; i<totalSection; i++ )
          {
              allSection[i].classList.toggle("open");
          }
      }


      //Form validation
      function validation(){
        let name=document.getElementById('name').value;
        let email=document.getElementById('email').value;
        let message=document.getElementById('message').value;
    
        if(name=='' || email=='' || subject=='' || message==''){
            /*Swal function for the Sweet alert pop-up*/
            swal({
                title: "Fields empty!!!",
                text: "Please check the missing field!",
                icon: "warning",
                button: "Ok",
              });
              document.getElementById("form").reset();
        }else{
            swal({
                title: "Dear " +name+ ",",
                text: "I have received your message !! \n\n Thank you for reaching out to me.",
                icon: "success",
                button: "Ok",
              });
              document.getElementById("form").reset();
        }
    
    }