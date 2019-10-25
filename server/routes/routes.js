module.exports = (app) => {
    app.get('/', (req, res, next) => {
       res.render('home');
    });

//     app.get('/gallary', (req, res, next) => {
//       res.render('gallary.ejs');
//    });
 };