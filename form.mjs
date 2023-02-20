import nodemailer from 'nodemailer';
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



        if (messages.length > 0) {
            e.preventDefault();
            errorElement.innerText = messages.join(", ");
            errorElement.style.visibility = "visible";

        }

        if(messages.length === 0 ) 
        {
            sendEmail(name.value, email.value, subject.value, message.value);
            
        }



    })
}


export default validateForm();

validateForm();


function sendEmail(name, email, subject, message) {

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'dafirenze@wp.pl', // your email
            pass: 'Zzx123nie' // your email account password
        }
    });


    let mailOptions = {
        from: '"Your Name" <your_email@example.com>', // sender address
        to: 'recipient_email@example.com', // list of receivers
        subject: 'Hello from Node.js', // Subject line
        text: 'Hello world!', // plain text body
        html: '<b>Hello world!</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
}