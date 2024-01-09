
export function AChat({userMsg, msgRec}){

    return(
        <article class="a-chat">
            <div class="a-c-avatar">
                <img src="./public/avatar_pics/avatar2.5692c39db4f8c0ea999e.png" alt="Profile Pic" />
            </div>
            <div class="a-c-box">
                <div class="friend-chat-name">
                    <p>{userMsg.name} <span>10:30 pm</span></p>
                </div>
                <div class="chat-content">
                    <p>{msgRec.msg}</p>
                </div>
            </div>
        </article>
    )
}