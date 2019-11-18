const mysql = require('../config/mysql')

module.exports = (app) => {

   app.get('/subscribe', async(req,res)=>{
    
      let db = await mysql.connect();
      let [subscribe] = await db.execute('SELECT * FROM subscribe-form');
      db.end();
      res.render('diploma-courses.ejs',{
         "subscribe": subscribe
      })
   });

   app.post('/subscribe', async(req,res)=>{
      let email = req.body.email;

      let subscribe_message = [];
      //to start our validation
      if(email == 'undefined'){
         subscribe_message.push('Please Enter Your Email')
       }
       if(subscribe_message.length > 0){

       
      
      res.render('diploma-courses.ejs',{
         'subscribe_message': subscribe_message.join(', '),
         "subscribe": subscribe,
         "values":req.body


      })
}else{
   let db = await mysql.connect();

   try{
      let result = await db.execute(`INSERT INTO subscribe-form SET ?`,[email]);
      db.end();
      if(result[0].affectedRows > 0){
         subscribe_message.push('Thank You Sending The Email We Will Get Back To You As Soon As Possible');
      }else{
         subscribe_message.push('Your Email Is Not send')
      }
   }catch(errors){
      console.log(errors)
   }

   res.render('diploma-courses.ejs',{
      'subscribe_message': subscribe_message.join(', '),
         // "subscribe": subscribe,
         
   })
}
    
   })


    app.get('/', (req, res, next) => {
       res.render('home');
    });

    app.get('/diploma-courses', (req, res, next) => {
      res.render('diploma-courses.ejs');
   });
 };