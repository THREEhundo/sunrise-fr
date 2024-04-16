import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 8000

const app = express()

app.get('/', (req, res) => app.send('Server is ready'))

app.listen(port, () => console.log(`Server started on Port ${port}`))
