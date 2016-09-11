var express=require('express')
var port=process.env.PORT||3000
var app=express()
app.set('views','./views')
app.set('view engine','jade')
app.listen(port)
console.log('imooc start on port'+port)

app.get('/',function(req,res){
res.render('index',{
title:'imocc 首頁'
})})

app.get('/movie:id',function(req,res){
res.render('detail',{
title:'detail 頁面'
})})

app.get('/admin/list',function(req,res){
res.render('list',{
title:'list  頁面'
})})

app.get('/admin/movie',function(req,res){
res.render('admin',{
title:'admin 頁面'
})})


