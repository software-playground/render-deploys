import 'dotenv/config'
import express from 'express'
const app = express()

app.get('/', (_, response) => {
  response.send(`
    <div>
      <h1>Hello world!</h1>
      <p>Let's see how render deploys work</p>
    </div> 
  `)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => { 
  console.log(`Server running on port ${PORT}`)
  console.log(`Hello! today is ${new Date()}`)
})
