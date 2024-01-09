import {Header} from './Header'
import { MainChat } from './MainChat'
import { SideBar } from './SideBar'

function Home() {

    return (
        <>
            <Header />
            <section class="middle-container">
                <SideBar />
                <MainChat />
            </section>
        </>
    )
}

export default Home