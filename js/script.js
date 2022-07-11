// typing animation
let typed = new Typed(".typing", {
    strings: ["Back-end developer", "SysAdmin", "Newbie Frontend"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// page transition animation and adaptive

const navbar = document.querySelector(".nav")
navList = navbar.querySelectorAll("li")
totalNavList = navList.length
let allSections = document.querySelectorAll(".section")
totalSection = allSections.length
for (let i=0; i < totalNavList; i++) {
    const link = navList[i].querySelector("a")
    link.addEventListener("click", function () {
        removeBackSection();
        for (let counter=0; counter < totalNavList; counter++) {
            if (navList[counter].querySelector("a").classList.contains("active")) {
                addBackSection(counter)
            }
            navList[counter].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200) {
            asideSectionTogglerBtn()
        }
    })
}

function addBackSection(counter) {
    allSections[counter].classList.add("back-section")
}

function removeBackSection() {
    for (let counter=0; counter < totalSection; counter++) {
        allSections[counter].classList.remove("back-section")
    }
}

function showSection(element) {
    for (let counter=0; counter < totalSection; counter++) {
        allSections[counter].classList.remove("active")
    }
    let target = element.getAttribute("href").split("#")[1]
    document.querySelector(`#${target}`).classList.add("active")
}

function updateNav(element) {
    for (let i=0; i<totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1]
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const index = this.getAttribute("data-section-index")
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(index)
})
const navTogglerBtn = document.querySelector(".nav-toggler")
const aside = document.querySelector(".aside")
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i=0; i < totalSection; i++) {
        allSections[i].classList.toggle("open");
    }
}
