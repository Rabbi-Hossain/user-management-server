const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

// middle weare
app.use(cors())
app.use(express.json())


const data = [
    {id : 1, name: 'rabbi', email : 'rabbi@gmail.com'},
    {id : 2, name: 'rasel', email : 'rasel@gmail.com'},
    {id : 3, name: 'rakib', email : 'rakib@gmail.com'},
]

app.get('/', (req,res)=>{
    res.send('user management server is running port protect dd')
})

app.get('/user', (req, res)=>{
    res.send(data)
})

app.post('/user',(req,res)=>{
    console.log('user server running');
    console.log(req.body);
    const newData = req.body
    newData.id = data.length + 1
    data.push(newData)
    res.send(newData)
})

app.listen(port, ()=>{
    console.log(`User management server is running PORT: ${port}`);
})
