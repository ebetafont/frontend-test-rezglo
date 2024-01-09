import { AChat } from './modules/AChat'
import './MainChat.css'

export function MainChat(){

    const userList = [
        {name: "lucas", email: "lucas@mail.com"},
        {name: "christina", email: "christina@mail.com"},
        {name: "Aibot", email: "bot@mail.com"},
        {name: "socrates_sama", email: "philo@mail.com"},
        {name: "margot", email: "margot@mail.com"}
    ]
    const msgRecList = [
        {msg: "Lorem <a>@nombre_persona</a> ipsum dolor sit amet consectetur adipisicing elit. Harum, numquam deleniti quaerat et fugiat culpa. Velit deleniti eligendi asperiores accusamus commodi fugit sed officia molestias! Repellendus aspernatur temporibus magnam quam."},
        {msg: "ipsum dolor sit amet consectetur adipisicing elit. Harum</p>"},
        {msg: "Velit deleniti eligendi asperiores accusamus <a>@commodi</a> fugit sed officia molestias! Repellendus aspernatur temporibus magnam quam."},
        {msg: "Repellendus aspernatur temporibus magnam quam."},
        {msg: "<a>@Lorem</a> ipsum dolor sit amet con asperiores accusamus commodi fugit sed officia molestias! Repellendus aspernatur temporibus magnam quam."}
    ]

    const userMsg = userList[1]
    const msgRec = msgRecList[0]
    function ramdomiseMsg(){

    }

    return(
        <main class="a-right">
            <div class="main-header">
                <h2>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA/0lEQVRIS+WVURHCMAyGqZPhAByAA+aAOQAHoAAcMAfMATgAB+CkfHkYN7LL1m6UF3aXh96fy9f+STs3Sfy5xPUnfwDw3mfY+CDuzrl509Iurc7rtYgiC5IvxBXAUgFMLQawIflAHAFsFcDUYgBnkldEAaBUAFMzAVjix44uG3lb3+pBcoCyYMb6ZkyQqTVrdE4Rp1mTfCJKTl0ouKnFAKS4FNoD2CmAqcUA6inJAVTGBLU0E/DtBgvoowfJAcoCuVxiUYU9eaim75A5RZxm1BPR+1QAGN3gVg+UDfJEZ8QUi56hWrBFkijvvS5eF+jSgu+B3s2Qde8PZ0jRn57gBUlUkBlJ4SIgAAAAAElFTkSuQmCC"/>
                    chanel_name
                </h2>
                <p>5 members | Add Topic</p>
            </div>
            <div class="chat-date">
                <hr class="line" /><div>
                    <div><button class="date-bttn">Today</button></div>
                </div><hr class="line" />
            </div>
            <div class="main-header-chat">

                <AChat userMsg={userMsg} msgRec={msgRec}></AChat>

            </div>
            <div class="user-chat">
                <input type="text" placeholder="Escribe un comentario" />
            </div>
        </main>
    )
}