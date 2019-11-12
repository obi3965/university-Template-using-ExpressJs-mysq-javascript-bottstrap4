module.exports = (app) => {
    app.get('/', (req, res, next) => {
       res.render('home');
    });

    app.get('/diploma-courses', (req, res, next) => {
      res.render('diploma-courses.ejs');
   });
 };