function Home() {

    return (
        <section class="middle-container">
            <aside class="a-left">
                <div class="user-name">
                    <h3>Nombre de Usuario</h3>
                    <p class="full-name">Isabel de las Mercedes Gonzalez</p>
                </div>
                <div class="chanels-box">
                    <h3>Chanels (5)</h3>
                    <ul>
                        <li>#general</li>
                        <li>#developers</li>
                        <li>#music-lovers</li>
                        <li>#ceo</li>
                        <li>#sales-dpt</li>
                    </ul>
                </div>
                <div class="direct-msg-box">
                    <h3>Direct Messages (10)</h3>
                    <ul>
                        <li>Aibot</li>
                        <li>addam</li>
                        <li>Christina</li>
                        <li>alan-musk</li>
                        <li>socrates_sama</li>
                        <li>winwin</li>
                        <li>lucas</li>
                        <li>sebas</li>
                        <li>margot</li>
                        <li>the_big_man</li>
                        <li>+Invite more people</li>
                    </ul>
                </div>
            </aside>

            <main class="a-right">
                <div class="main-header">
                    <h2>#Nombre_Canal</h2>
                    <p>5 members | Add Topic</p>
                </div>
                <div class="main-header-chat">

                    <article class="a-chat">
                        <div class="a-c-avatar">
                            <img src="./public/avatar_pics/avatar2.5692c39db4f8c0ea999e.png" alt="Profile Pic" />
                        </div>
                        <div class="a-c-box">
                            <div class="friend-chat-name">
                                <p>sebas <span>10:30 pm</span></p>
                            </div>
                            <div class="chat-content">
                                <p>Lorem <a>@nombre_persona</a> ipsum dolor sit amet consectetur adipisicing elit. Harum, numquam deleniti quaerat et fugiat culpa. Velit deleniti eligendi asperiores accusamus commodi fugit sed officia molestias! Repellendus aspernatur temporibus magnam quam.</p>
                            </div>
                        </div>
                    </article>

                    <article class="a-chat">
                        <div class="a-c-avatar">
                            <img src="./public/avatar_pics/avatar11.1060b63041fdffa5f8ef.png" alt="Profile Pic" />
                        </div>
                        <div class="a-c-box">
                            <div class="friend-chat-name">
                                <p>margot <span>10:30 pm</span></p>
                            </div>
                            <div class="chat-content">
                                <p>Lorem <a>@nombre_persona</a> ipsum dolor sit amet consectetur adipisicing elit. Harum, numquam deleniti quaerat et fugiat culpa. Velit deleniti eligendi asperiores accusamus commodi fugit sed officia molestias! Repellendus aspernatur temporibus magnam quam.</p>
                            </div>
                        </div>
                    </article>

                    <article class="a-chat">
                        <div class="a-c-avatar">
                            <img src="./public/avatar_pics/avatar4.54d5c1de851c273b2cd9.png" alt="Profile Pic" />
                        </div>
                        <div class="a-c-box">
                            <div class="friend-chat-name">
                                <p>christina <span>10:30 pm</span></p>
                            </div>
                            <div class="chat-content">
                                <p>Lorem <a>@nombre_persona</a> ipsum dolor sit amet consectetur adipisicing elit. Harum, numquam deleniti quaerat et fugiat culpa. Velit deleniti eligendi asperiores accusamus commodi fugit sed officia molestias! Repellendus aspernatur temporibus magnam quam.</p>
                            </div>
                        </div>
                    </article>

                </div>
                <div class="user-chat">
                    <input type="text" placeholder="Escribe un comentario" />
                </div>
            </main>
        
        </section>
    )
}

export default Home