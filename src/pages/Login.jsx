
import './Login.css'
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
            setErrorForm("!Hint: Use ebetafont@gmail.com/1234 as user/pass")
            //setEmail('')
            setPassword('')
        }
    }

    return (
        <section className="login-container">
            {userL && (<Navigate to="/home" replace={true} />)}
            <div className="login">
                <a href='#'><img alt="Slack" src="https://a.slack-edge.com/bv1-10/slack_logo-ebd02d1.svg" height="26" title="Slack" /></a>
                <h1>First, enter your email</h1>
                <p>We suggest using the <strong>email address you use at work.</strong></p>
    
                <div className="form">
                    <h2>{errorForm !== '' ? errorForm : ''}</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <input type="text" value={emailUser} name="E-Mail" placeholder="name@work-email.com"
                            onChange={(e)=> setEmail(e.target.value)} autoComplete="e-mail" />
                        <input type="password" value={password} name="Password" placeholder="Password"
                            onChange={(e)=> setPassword(e.target.value)} autoComplete="current-password" />
                        <div><button type="submit" className="submit-bttn">Continue</button></div>
                
                        <div className="line-or">
                            <hr className="line" /><div>OR</div><hr className="line" />
                        </div>
                        <div><button type="button" className="other-social-bttn">

                        Continue With Google</button></div>
                        <div><button type="button" className="other-social-bttn">

                        Continue With Apple
                        </button></div>
                    </form>
                </div>
                <p>Already using Slack?</p>
                <a href='#'>Sign in to an existing workspace</a>
            </div>
        </section>
    )
}

export default Login