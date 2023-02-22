import { paintingsArray, testArray, domElements, currentSlide} from "./data.mjs";


function navbar() {
    document.body.style.backgroundColor = 'red';

    const toggleButton = document.querySelector('.toggle-btn');
    const navBarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', () => {
        navBarLinks.classList.toggle('active');
    });


    document.body.style.backgroundColor = 'black';
}



function getList()
{
   let list = document.getElementById('painting-list');

    //create list elements based on array that contains paintings
    paintingsArray.forEach((painting) => 
    {
        let listElement = document.createElement('li');
        listElement.id = painting.id;
        listElement.textContent = painting.title;
        list.append(listElement);


    });
    
}



function carousel()
{
    let list = document.getElementById('carousel-list');


    //create list elements based on array that contains paintings
    for (let i = 0; i < testArray.length; i++) 
    {
        let listElement = document.createElement('li');
        listElement.classList.add('slide');
        listElement.setAttribute('active', 'false');
        domElements.push(listElement);


        
        let image = document.createElement('img');
        image.src = testArray[i];
        listElement.append(image);
        list.append(listElement);
    }

    domElements[0].setAttribute('active', 'true');
 


}


function changeSlide()
{
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let i = 0;

    next.addEventListener('click', () => 
    {
        if (i === domElements.length - 1)
        {
            domElements[i].setAttribute('active', 'false');
            i = 0;
            domElements[i].setAttribute('active', 'true');
            i += 1;

        }

        else
        {
            domElements[i].setAttribute('active', 'false');
            domElements[i + 1].setAttribute('active', 'true');
            i += 1;
        }
       
        
        
        
    })

    prev.addEventListener('click', () => 
    {
        if (i === 0)
        {
            i = domElements.length - 1;
            domElements[i].setAttribute('active', 'true');
            domElements[0].setAttribute('active', 'false');


        }
        else{
            domElements[i].setAttribute('active', 'false');
            domElements[i - 1].setAttribute('active', 'true');
            i -= 1;
        }
      
        
    });
}


export { navbar, getList, carousel, changeSlide };