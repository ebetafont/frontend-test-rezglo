
export function AChat({userMsg, msgRec}){

    return(
        <article className="a-chat">
            <div className="a-c-avatar">
                <img src="./public/avatar_pics/avatar2.5692c39db4f8c0ea999e.png" alt="Profile Pic" />
            </div>
            <div className="a-c-box">
                <div className="friend-chat-name">
                    <p>{userMsg.name} <span>10:30 pm</span></p>
                </div>
                <div className="chat-content">
                    <p>{msgRec.msg}</p>
                </div>
            </div>
        </article>
    )
}