const express = require("express")
const {authenticator,infos}= require('./model/index')
const { Op } = require("sequelize")
const app = express()
const bcrypt=require("bcrypt")
const { mapValueFieldNames } = require("sequelize/lib/utils")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine',"ejs")
app.use(express.static("First/"))
app.use(express.static("public/"))
app.get('/',(req,res)=>{

  res.render("index")
})
app.use(express.static('First/'))
app.get('/register',(req,res)=>{
    res.render("register")

})
app.get('/login',(req,res)=>{
    res.render("login")
})
app.post("/signup",async(req,res)=>{
  const message = "Register completed"
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const phonenumber = req.body.phonenumber
    const password= req.body.password
    const gender= req.body.gender

    await authenticator.create({
        firstname:firstname,
        lastname:lastname,
        email:email,
        phonenumber:phonenumber,
        password:bcrypt.hashSync(password,8),
       gender:gender
    })
    console.log(req.body)
   res.render("login",{message:message})
})
app.get('/landing',(req,res)=>{
    res.render("landingPage")
})
const flag = false
app.post("/plogin",async(req,res)=>{
    console.log(req.body)
    const pemail = req.body.pemail
    const password = req.body.password
  const k =  await authenticator.findAll({
        where:{
            [Op.or] :[{email:pemail},{phonenumber:pemail}]
        }
    })
    console.log(k)
    let match =null
    console.log(k.length)
   if(k.length>0){
     match = bcrypt.compareSync(password,k[0].password)
   }
   if(match){ 
   res.redirect('/landing')
}
   else{
    res.render("error")
   }
})
app.get('/news',(req,res)=>{
    res.render('news')
})
app.get('/official',(req,res)=>{
    res.render('official')
})
app.get('/unofficial',(req,res)=>{
    res.render('unofficial')
})
app.get('/fillform',(req,res)=>{
    res.render('form')
})
app.post('/generate',async(req,res)=>{
    console.log(req.body)
    const fname = req.body.fname;
    const subject = req.body.subject;
    const prati = req.body.prati;
    const director = req.body.director;
    const patha = req.body.patha;
    const college = req.body.college;
    const class1 = req.body.class;
    const email = req.body.email;
    const phone = req.body.phone;
    const dob = req.body.dob;
    const dob1 = req.body.dob1;
    const gender = req.body.gender;
    await infos.create({
        प्रति :prati ,
        महानिदेशक: director,
        कलेजको_नाम:college,
        पता:patha,
        विषय:subject ,
       तपाईंको_नाम: fname,
       कक्षा:class1,
       मिति:dob,




    })
    res.redirect('/official')
    
   
})
app.get('/postfill',async(req,res)=>{
  const id=1;
  const subject = "बोर्ड रजिष्ट्रेशनमा जन्म मिति सुधारको लागि आवेदन।"
  const k =await infos.findAll({
    where:{
      id :id
    }
  })
  console.log(k)
    
    const officegen = require('officegen')
    const fs = require('fs')
    
 
    
    // Create an empty Word object:
    let docx = officegen('docx')
    
    // Officegen calling this function after finishing to generate the docx document:
    docx.on('finalize', function(written) {
      console.log(
        'Finish to create a Microsoft Word document.'
      )
    })
    
    // Officegen calling this function to report errors:
    docx.on('error', function(err) {
      console.log(err)
    })
    
    // Create a new paragraph:
    let pObj = docx.createP()
    
    pObj.addText(k[0].प्रति)
    pObj.addLineBreak()
    pObj.addText(k[0].महानिदेशक, { color: '000000' })
    pObj.addLineBreak()
    pObj.addText(k[0].कलेजको_नाम, { color: '00ffff', back: '000088' })
    pObj.addLineBreak()
    pObj = docx.createP()
    
    pObj.addText(k[0].पता)
    pObj.addLineBreak()
    pObj.addText('मिति'+k[0].मिति, {
      back: '00ffff',
      shdType: 'pct12',
      shdColor: 'ff0000'
    }) // Use pattern in the background.
    pObj.addLineBreak()
    pObj.addText('विषय :'+k[0].विषय,{bold:true,underline: true,highlight: true })
    pObj.addLineBreak()
    pObj.addText('महोदय/महोदया,') // Highlight!
    pObj.addLineBreak()
    pObj.addText('सादर निवेदन छ कि, म ', { highlight: 'darkGreen' }) // Different highlight color.   
     pObj.addLineBreak()
    
    pObj = docx.createP()
    
    pObj.addText('Even add ')
    pObj.addText('external link', { link: 'https://github.com' })
    pObj.addText('!')
    
    pObj = docx.createP()
    
    pObj.addText('Bold + underline', { bold: true, underline: true })
    
    pObj = docx.createP({ align: 'center' })
    
    pObj.addText('Center this text', {
      border: 'dotted',
      borderSize: 12,
      borderColor: '88CCFF'
    })
    
    pObj = docx.createP()
    pObj.options.align = 'right'
    
    pObj.addText('Align this text to the right.')
    
    pObj = docx.createP()
    
    pObj.addText('Those two lines are in the same paragraph,')
    pObj.addLineBreak()
    pObj.addText('but they are separated by a line break.')
    
    docx.putPageBreak()
    
    pObj = docx.createP()
    
    pObj.addText('Fonts face only.', { font_face: 'Arial' })
    pObj.addText(' Fonts face and size.', { font_face: 'Arial', font_size: 40 })
    
    docx.putPageBreak()
    
    pObj = docx.createP()
    
    // We can even add images:
    // pObj.addImage('some-image.png')
    
    // Let's generate the Word document into a file:
    
    let out = fs.createWriteStream('nepali.docx')
    
    out.on('error', function(err) {
      console.log(err)
    })
    
    // Async call to generate the output file:
    docx.generate(out)
    res.redirect('/official')

})


app.listen(3000,function(){
    console.log("started at 3000 port")
})