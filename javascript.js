/*******************************HAMBURGER**********************************************/

const hamburger = document.querySelector(".hamburgerMenu");
const menu = document.querySelector(".menu");

const menuEvents = () =>
{
	hamburger.classList.toggle("open"); 
	menu.classList.toggle("open");
}

hamburger.addEventListener("click", () => menuEvents());

/******************************SMOOTH SCROLL*******************************************/

const aboutLink = document.querySelector("#aboutMe");
const projectsLink = document.querySelector("#myProjects");
const contactLink = document.querySelector("#imHere");
const arrowUp = document.querySelector(".icon-up-open");
const aboutTarget = document.querySelector("#aboutSection");
const projectsTarget = document.querySelector("#projectsSection");
const contactTarget = document.querySelector("#contactSection");
const headerTarget = document.querySelector("header");

const smoothScroll = (target) => 
{
    const MIN_PIXELS_PER_STEP = 32;
    const MAX_SCROLL_STEPS = 60;
    let scrollContainer = target;
    do 
    {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } 
    while (scrollContainer.scrollTop === 0);
    let targetY = 0;
    do 
    {
        if (target === scrollContainer) break;
        targetY += target.offsetTop;
    } 
    while (target = target.offsetParent);
    const pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP, Math.abs(targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);
    const isUp = targetY < scrollContainer.scrollTop;
    const stepFunc = () => 
    {
	if (isUp)
	{
		scrollContainer.scrollTop = Math.max(targetY, scrollContainer.scrollTop - pixelsPerStep);
		if (scrollContainer.scrollTop <= targetY)
		{
			return;
		}
	}
	else
	{
		scrollContainer.scrollTop = Math.min(targetY, scrollContainer.scrollTop + pixelsPerStep);
		if (scrollContainer.scrollTop >= targetY) 
		{
			return;
		}
	}
        window.requestAnimationFrame(stepFunc);
    };
    window.requestAnimationFrame(stepFunc);
}

aboutLink.addEventListener("click", () => smoothScroll(aboutTarget));
projectsLink.addEventListener("click", () => smoothScroll(projectsTarget));
contactLink.addEventListener("click", () => smoothScroll(contactTarget));
arrowUp.addEventListener("click", () => smoothScroll(headerTarget));

/******************************SORT PROJECTS********************************************/

const allBtn = document.querySelector("#all");
const javaBtn = document.querySelector("#java");
const jfxBtn = document.querySelector("#jfx");
const htmlBtn = document.querySelector("#html");
const cssBtn = document.querySelector("#css");
const jsBtn = document.querySelector("#js");
const jqBtn = document.querySelector("#jq");
const bootstrapBtn = document.querySelector("#bootstrap");
const rwdBtn = document.querySelector("#rwd");

const allTab = document.querySelectorAll(".all");
const javaTab = document.querySelectorAll(".java");
const jfxTab = document.querySelectorAll(".jfx");
const htmlTab = document.querySelectorAll(".html");
const cssTab = document.querySelectorAll(".css");
const jsTab = document.querySelectorAll(".js");
const jqTab = document.querySelectorAll(".jq");
const bootstrapTab = document.querySelectorAll(".bootstrap");
const rwdTab = document.querySelectorAll(".rwd");

const show = (project) =>
{
	for(let i = 0; i < project.length; i++)
	{
		project[i].style.display = "block";
	}
}

const hide = () =>
{
	for(let i = 0; i < allTab.length; i++)
	{
		allTab[i].style.display = "none";
	}
}

const showProjects = (project) =>
{
	hide();
	show(project);
}

const showAllProjects = () =>
{
	for(let i = 0; i < allTab.length; i++)
	{
		allTab[i].style.display = "block";
	}
}

allBtn.addEventListener("click", () => showAllProjects());
javaBtn.addEventListener("click", () => showProjects(javaTab));
jfxBtn.addEventListener("click", () => showProjects(jfxTab));
htmlBtn.addEventListener("click", () => showProjects(htmlTab));
cssBtn.addEventListener("click", () => showProjects(cssTab));
jsBtn.addEventListener("click", () => showProjects(jsTab));
jqBtn.addEventListener("click", () => showProjects(jqTab));
bootstrapBtn.addEventListener("click", () => showProjects(bootstrapTab));
rwdBtn.addEventListener("click", () => showProjects(rwdTab));


