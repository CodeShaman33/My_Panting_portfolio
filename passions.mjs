import { passionsArray, aboutMe } from "./data.mjs";

class Init {
  constructor() {
    this.passions = document.getElementById("passions");

    // setting up functions
    this.setPassions();
    this.setAboutMe();
  }

  // setting items for passions section
  setPassions() {
    //taking data from array
    passionsArray.forEach((item) => {
      let child = document.createElement("div");
      child.className = "passion-item";
      child.id = item.id;
      let title = document.createElement("h2");
      title.textContent = item.title;
      let description = document.createElement("p");
      let icon = document.createElement("img");
      icon.classList.add("icon");
      icon.src = item.svg;
      
      // event listener
      this.eventListener(child);
      child.addEventListener("click", () => 
      {
        let passionItem = document.getElementById('passion');
        passionItem.textContent = item.title;
      });

      // appending child elements to the parent
      child.appendChild(icon);
      child.appendChild(title);
      child.appendChild(description);
      this.passions.appendChild(child);
    });
  }

  setAboutMe() {
    let about = document.getElementById("about");
    about.textContent = aboutMe;
    this.eventListener(about);
  }

  eventListener(child) {
    child.addEventListener("mouseenter", () => {
      let all = document.querySelectorAll("*");
      all.forEach((item) => {
        item.style.opacity = "0.8";
      });
      child.parentElement.style.opacity = "1";
      child.parentElement.parentElement.style.opacity = "1";
      child.parentElement.parentElement.parentElement.style.opacity = "1";
      child.parentElement.parentElement.parentElement.parentElement.style.opacity = "1";
    });

    child.addEventListener("mouseleave", () => {
      let all = document.querySelectorAll("*");
      all.forEach((item) => {
        item.style.opacity = "1";
      });
    });
  }
}

export default Init;
