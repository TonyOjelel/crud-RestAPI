import express from 'express'; // for ESM (EcmaScript Module)
// const express = reqire('express'); // for CJS (Common JS Modle)
// as your package type by default it is CJS

const app = express();
const port = process.env.port || 3000;

let data = [
    { "name": "Arjun Tripathi", "course": "MCA", "roll_no": "14", "id": 1},
    { "name": "Rahul Durgapal", "course": "MCA", "roll_no": "36", "id": 2 },
    { "name": "Aman Yadav", "course": "MCA", "roll_no": "08", "id": 3}
];

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
});
