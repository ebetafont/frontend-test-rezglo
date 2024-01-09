

export function Header(){
    return (
        <header>
            <div class="search">
                <div class="s-border">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-gray-400 dark:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div class="s-avatar">
                <img src="./public/avatar_pics/avatar11.1060b63041fdffa5f8ef.png" alt="Profile Pic" />
            </div>
        </header>
    )
}