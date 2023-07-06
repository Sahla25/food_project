const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const crendentialsList = []

app.post('/signup', (req, res) => {
    const {fullName, email, password, phoneNumber, add} = req.body;
    console.log(fullName,email,password,phoneNumber,add);

    if (!fullName || !email || !phoneNumber || !password || !add) {
        res.json({ message: "please enter valid cred"});
        return;
    }
    for (let i =0; i < crendentialsList.length; i++) {
        if (Credential[i].email == email) {
            res.json({ message: "user already exist"});
            return;
        }
    }
        crendentialsList.push({fullName, email, phoneNumber, password, add});
        console.log(crendentialsList);
        res.json({message: "user created successfully"});
});


app.listen(3001, ()=> {
    console.log("server is running in 3001 port");
})