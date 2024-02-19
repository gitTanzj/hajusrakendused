import express from 'express';

const PORT = 4000
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.get('/', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`App listening now on port ${PORT}`)
})
