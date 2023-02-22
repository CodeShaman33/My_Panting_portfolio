

function handleForm()
{
    const form = document.getElementById('form');
    form.addEventListener('submit', (e) => 
    {
        
        //get valuesfrom form
        console.log('submit');
        const message = document.getElementById('message').value;
        const name = document.getElementById('name').value;
        const mail = document.getElementById('email').value;
        const subject = document.getElementById('dropdown').value;

        //crete object from values 
        let messageData = 
        {
            'name': name,
            'mail': mail,
            'subject': subject,
            'message': message
        }

        sendToBackEnd(messageData);
        displayItems();
        

    });
}

function sendToBackEnd(data) 
{


    console.log('function started');
   
    fetch("http://127.0.0.1:8888/todos", 
    {
        method: "POST",
        body: JSON.stringify({data}),
        headers:
        {
            "Content-type": "application/json"
        }
    });
}

function getItemsFromBackend()
{
    return fetch("http://127.0.0.1:8888/todos");
    
}

function displayItems()
{
    let div = document.getElementById('messages');
    let list = getItemsFromBackend();
    div.innerHTML = JSON.stringify({list});


  

}



handleForm();
