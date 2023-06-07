const express =require('express')
const app = express()



app.get('/',(req,res)=>{
    res.send('hi sandun')
})


app.listen(3000,function(){
    console.log('app listen in 3000');
})