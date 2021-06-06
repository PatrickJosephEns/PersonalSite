const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { response } = require('express');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/',()=>{
    resizeBy.send('Welcome to my forma')
})

app.post('/api/forma',(req,res)=>{
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service:'mailtrap',
        port:465,
        auth:{
            user:'542802fc88db92',
            pass:'ed1c610eb05bd9'
        }
    })

let mailOptions={
    from:data.email,
    to:'patens6@gmail.com',
    subject:`Message from ${data.name}`,
    html:`
    
    <h3>Infomations</h3>
    <ul>
    <li>Name: ${data.name}</li>
    <li>Lastname: ${data.lastname}</li>
    <li>Email: ${data.email}</li>
    </ul>

    <h3>Message</h3>
    <p>${data.message}</p>
       
    `
}

smtpTransport.sendMail(mailOptions, (error,response)=>{

    if(error){
        res.send(error)
    }
    else{
        res.send('Success')
    }
})

smtpTransport.close()

})

const PORT = process.env.PORT||3001

app.listen(PORT,()=>{
    console.log(`server starting at port ${PORT}`)
})