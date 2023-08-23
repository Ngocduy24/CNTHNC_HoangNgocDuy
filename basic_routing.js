const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/dangnhap', (req, res) =>{
    res.send("Post successfully");
})

app.put('/capnhat', (req, res) =>{
    res.send("put successfully");
})

app.delete('/xoa', (req, res) =>{
    res.send("delete successfully");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})                                                                                                        