

function validateForm() {
    const form = document.getElementById("form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("dropdown");
    const message = document.getElementById("message");
    //error element
    const errorElement = document.getElementById("error");


    form.addEventListener("submit", (e) => {

        let messages = [];
        if (name.value === "" || name.value === null) {
            messages.push('name is required');

        }

        if (email.value === "" || email.value === null) {
            messages.push('email is required');

        }

        if (email.value.includes("@") === false) {

            messages.push('@ required');

        }



        if (messages.length > 0) 
        {
            e.preventDefault();
            errorElement.innerText = messages.join(", ");
            errorElement.style.visibility = "visible";


            
        }



    })
}


export default validateForm();

validateForm();