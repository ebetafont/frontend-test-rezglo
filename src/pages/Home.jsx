import {Header} from './Header'

import { ChanelsBox } from './modules/ChanelsBox'
import { DirectMsgBox } from './modules/DirectMsgBox'
import './Home.css'

import { AChat } from './modules/AChat'

function SideBar(){

    return(
        <aside className="a-left">
            <div className="user-name">
                <h3>Chat_Name <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABNklEQVRIS7WW6xGCMBCESQfagSVYgnQgFagdaAVqBdKBdKBWIB1oB1ICHeBeJseEECYPIDP3A5Pbby/hiCKZeYiZ9RMroGmaLcA7xAqxdpioMP9FvIQQhbm2A4DwAgvuCALEDAKlANWcbAIeI8RZswQg7QHgfq/cxzg3cw68XW0FAEzhnkFPADJ60AE/dai+FeRq4dGSUAOwNAGNrzLWtQ5R+Q3PPQgA0rxegS+gRN4GIfcZABInSGfEAnIkniB6gdqZKhl662IAUpxtAvJWlVh3NhRgilu3RSeFAILF5eF6HnKUuDeAXVDC0Nsy9Gp7VcCLQsUBHd1orp5sP3gxjeYSp/krqqdeiepkF4A6PeM7YeoKSJw+IRW70AEf/Oi6Hm3u6faSVyai0G+zzha56o6dn/1fxR+pCZIZ7vNv2wAAAABJRU5ErkJggg=="/>
                </h3>
            </div>
            <ChanelsBox />
            <DirectMsgBox />
        </aside>
    )
}

function MainChat(){

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
    function ramdomiseMsg(){ }

    return(
        <main className="a-right">
            <div className="main-header">
                <h2>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA/0lEQVRIS+WVURHCMAyGqZPhAByAA+aAOQAHoAAcMAfMATgAB+CkfHkYN7LL1m6UF3aXh96fy9f+STs3Sfy5xPUnfwDw3mfY+CDuzrl509Iurc7rtYgiC5IvxBXAUgFMLQawIflAHAFsFcDUYgBnkldEAaBUAFMzAVjix44uG3lb3+pBcoCyYMb6ZkyQqTVrdE4Rp1mTfCJKTl0ouKnFAKS4FNoD2CmAqcUA6inJAVTGBLU0E/DtBgvoowfJAcoCuVxiUYU9eaim75A5RZxm1BPR+1QAGN3gVg+UDfJEZ8QUi56hWrBFkijvvS5eF+jSgu+B3s2Qde8PZ0jRn57gBUlUkBlJ4SIgAAAAAElFTkSuQmCC"/>
                    chanel_name
                </h2>
                <p>5 members | Add Topic</p>
            </div>
            <div className="chat-date">
                <hr className="line" /><div>
                    <div><button class="date-bttn">Today</button></div>
                </div><hr className="line" />
            </div>
            <div className="main-header-chat">
                <AChat userMsg={userMsg} msgRec={msgRec} />
                <AChat userMsg={userMsg} msgRec={msgRec} />
                <AChat userMsg={userMsg} msgRec={msgRec} />
            </div>
            <div className="user-chat">
                <input type="text" placeholder="Escribe un comentario" />
            </div>
        </main>
    )
}

export function Home() {

    return (
        <>
            <Header />
            <section className="middle-container">
                <SideBar />
                <MainChat />
            </section>
        </>
    )
}