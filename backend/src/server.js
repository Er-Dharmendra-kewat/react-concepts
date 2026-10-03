import dotenv from 'dotenv';
import app from './app.mjs';

dotenv.config();

const PORT = process.env.PORT || 5000;

const response = await fetch("http://localhost:300/api/login",{
    method:POST,
    headers: {
        "Content-Type":"application/json"
    },
    credentials:"include",
    body:JSON.stringify({
        email,password
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});