import { useState } from "react"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function handleLogin(e) {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    }
    // const hangleLogin = (e) => {
    //     e.preventDefault();
    //     console.log("Email", email);
    //     console.log("Password", password);
    // }̣
    return (
        <>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default Login;