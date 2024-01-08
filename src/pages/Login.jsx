
import { useState } from "react"
import { Navigate } from "react-router-dom"

function Login() {

    const [emailUser, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorForm, setErrorForm] = useState('')

    const [userL, setUserL] = useState(null)


    function handleSubmit(e){
        e.preventDefault()

        const userTest = [{name: "Ernesto", email: "ebetafont@gmail.com", "password": "1234"}]
        const userResult = userTest.filter((obj) => obj.email === emailUser && obj.password === password)

        if(userResult.length !== 0){
            setUserL(userResult)
            setErrorForm('')
        }else{
            setErrorForm("Ups somehing went wrong, plz try it one more time")
            //setEmail('')
            setPassword('')
        }
    }

    return (
      <>
        {userL && (<Navigate to="/home" replace={true} />)}
        <h1>Login page</h1>

        <div class="form">
            <h2>{errorForm !== '' ? errorForm : ''}</h2>
            <form onSubmit={handleSubmit} class="login-form">
                <input type="text" value={emailUser} name="E-Mail" placeholder="E-Mail"
                    onChange={(e)=> setEmail(e.target.value)} autoComplete="e-mail" />
                <input type="password" value={password} name="Password" placeholder="Password"
                    onChange={(e)=> setPassword(e.target.value)} autoComplete="current-password" />
                <button>Login</button>
                <p class="message">Not registered? Create an account</p>
            </form>
        </div>
      </>
    )
}

export default Login