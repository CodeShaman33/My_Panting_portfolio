import { paintingsArray, testArray} from "./data.mjs";


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
        
        let image = document.createElement('img');
        image.src = testArray[i];
        listElement.append(image);
        list.append(listElement);
    }
}

export { navbar, getList, carousel };