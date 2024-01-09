import {Header} from './Header'
import { SideBar } from './SideBar'
import { AChat } from './modules/AChat'

function Home() {

    return (
        <>
            <Header />

            <section class="middle-container">
                
                <SideBar />

                <main class="a-right">
                    <div class="main-header">
                        <h2>#Nombre_Canal</h2>
                        <p>5 members | Add Topic</p>
                    </div>
                    <div class="main-header-chat">

                        <AChat />
                        <AChat />
                        <AChat />

                    </div>
                    <div class="user-chat">
                        <input type="text" placeholder="Escribe un comentario" />
                    </div>
                </main>
            
            </section>
        </>
    )
}

export default Home