document.addEventListener('DOMContentLoaded', function() {
    // 1. Change Adele's Quote
    const quoteBtn = document.getElementById('change-quote-btn');
    const quoteText = document.getElementById('adele-quote');
    const adeleQuotes = [
        "I don't make music for eyes. I make music for ears.",
        "Sometimes it lasts in love, but sometimes it hurts instead.",
        "Hello from the other side...",
        "Never mind, I'll find someone like you.",
        "We could have had it all..."
    ];

    quoteBtn.addEventListener('click', function() {
        const randomQuote = adeleQuotes[Math.floor(Math.random() * adeleQuotes.length)];
        quoteText.textContent = `"${randomQuote}"`;
    });

    // 2. Toggle Album Cover
    const albumBtn = document.getElementById('toggle-album-btn');
    const albumCover = document.getElementById('album-cover');
    albumBtn.addEventListener('click', function() {
        albumCover.style.display = albumCover.style.display === 'none' ? 'block' : 'none';
    });

    // 3. Change Background Theme
    const darkThemeBtn = document.getElementById('dark-theme-btn');
    const lightThemeBtn = document.getElementById('light-theme-btn');
    const body = document.body;

    darkThemeBtn.addEventListener('click', function() {
        body.style.backgroundColor = '#1a1a1a';
        body.style.color = 'white';
    });

    lightThemeBtn.addEventListener('click', function() {
        body.style.backgroundColor = '#f9f9f9';
        body.style.color = 'black';
    });

    // 4. Add a Random Adele Song
    const addSongBtn = document.getElementById('add-song-btn');
    const songList = document.getElementById('song-list');
    const adeleSongs = [
        "Easy On Me",
        "Set Fire to the Rain",
        "When We Were Young",
        "Skyfall",
        "Water Under the Bridge"
    ];

    addSongBtn.addEventListener('click', function() {
        const randomSong = adeleSongs[Math.floor(Math.random() * adeleSongs.length)];
        const newSongItem = document.createElement('li');
        newSongItem.textContent = randomSong;
        songList.appendChild(newSongItem);
    });
});