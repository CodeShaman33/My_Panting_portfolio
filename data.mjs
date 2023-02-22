
let paintingsArray = [
    {
        id: 1,
        title: 'Painting 1',
    },
    {
        id: 2,
        title: 'Painting 2',
    },
    {
        id: 3,
        title: 'Painting 3',
    },
    {
        id: 4,
        title: 'Painting 4',
    },
    {
        id: 5,
        title: 'Painting 5',
    }
];



let testArray = 
[
    'https://images.unsplash.com/photo-1676444263524-b12650053e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
    'https://images.unsplash.com/photo-1674574124345-02c525664b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1670272506154-080063eee4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1676694090990-b9e29828fdd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80',
    'https://images.unsplash.com/photo-1674574124475-16dd78234342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
];

let domElements = [];
let currentSlide = 0;

let passionsArray = 
[
    {
        id: 1,
        title: 'Programming',
        description: 'programming description',
        svg: './src/programming-svgrepo-com.svg'
    },
    {
        id: 2,
        title: 'Painting',
        description: 'coding description',
        svg: './src/painting-svgrepo-com.svg'
    },
    {
        id: 3,
        title: 'Playing Djembe',
        description:'music description',
        svg: './src/djembe-svgrepo-com.svg'   
     },
    {
        id: 4,
        title: 'Literature',
        description: 'cooking description',
        svg: './src/culture-svgrepo-com.svg'
    }
];

let aboutMe = 'about me description';


export {paintingsArray, testArray, domElements, currentSlide, passionsArray, aboutMe};