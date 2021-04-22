import express from 'express';
const app = express()

app.get("/lista", (req, res) => {
  return res.json([
    {name: 'Gol', ano: 1999},
    {name: 'Fusca', ano: 1990},
    {name: 'Palio', ano: 2005},
    {name: 'Celta', ano: 2000}
  ])
})

app.post("/users", (req, res) => {
  return res.json({message: "Funcionou!"})
})
app.listen(3333, () => console.log("Server is running on port 3333"))