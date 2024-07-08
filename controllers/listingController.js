var data = [{item:'get milk'}, {item:'buy window'}, {item:'run'}, {item: 'swim'}];
module.exports = function(app){

    app.get('/listing', function(req, res){
        res.render('listing');

    });
   
   app.get('/items',function(req,res){
    res.render('items',{allList:data});

   });
}; 