import Express from 'express';
import { data } from './data.js';


const app = Express();
app.use(Express.json())


app.get('/', (req, res) => {
  res.status(200).json({
    message: "Server running",
  })
})

// GET | POST | PATCH | DELETE | PUT

app.get('/data/get', function (req, res) {
  try {
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
    })
  }
})
app.delete('/data/delete', (req, res) => {
  const idFromReq = req.body.id;
  const newData = data.filter(item => item.id !== idFromReq )

  res.status(200).json(newData)
})

app.listen(4000, () => {
  console.log("server started")
});


// fetch('http://localhost:4000/data/get', {
//   method: 'delete',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: 1
//   })
// })