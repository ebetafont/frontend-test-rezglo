import { ChanelsBox } from './modules/ChanelsBox'
import { DirectMsgBox } from './modules/DirectMsgBox'
import './SideBar.css'

export function SideBar(){

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