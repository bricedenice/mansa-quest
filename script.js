document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    // localStorage test
    try {
        localStorage.setItem('testKey', 'testValue');
        const testValue = localStorage.getItem('testKey');
        if (testValue === 'testValue') {
            console.log("localStorage test PASSED: Able to set and get item.");
            localStorage.removeItem('testKey'); // Clean up test key
        } else {
            console.error("localStorage test FAILED: Value mismatch.");
        }
    } catch (e) {
        console.error("localStorage test FAILED: Error during operation.", e);
    }

    // Pixelation check (conceptual for now - CSS handles actual rendering)
    // We can check if certain CSS properties are supported if needed, but direct JS pixelation is complex.
    if (window.CSS && CSS.supports && CSS.supports('image-rendering', 'pixelated')) {
        console.log("CSS 'image-rendering: pixelated' is supported by the browser.");
        // document.body.classList.add('pixelate'); // Example of applying a class if supported
    } else {
        console.log("CSS 'image-rendering: pixelated' may not be supported. Consider fallbacks or alternative methods for pixelation.");
    }

    // Cursor trail effect
    const cursorTrailEnabled = true;
    const maxTrailElements = 15;
    const trailLifespan = 700; // milliseconds
    const trailElements = [];

    if (cursorTrailEnabled) {
        document.addEventListener('mousemove', (e) => {
            createTrailElement(e.clientX, e.clientY);
        });

        function createTrailElement(x, y) {
            const trailElement = document.createElement('div');
            trailElement.className = 'cursor-trail';
            trailElement.style.left = `${x}px`;
            trailElement.style.top = `${y}px`;
            
            // Random size variation for more magical effect
            const size = 4 + Math.random() * 8;
            trailElement.style.width = `${size}px`;
            trailElement.style.height = `${size}px`;
            
            // Random color variation
            const hue = Math.floor(Math.random() * 40) + 330; // Pinkish hues
            trailElement.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;
            
            document.body.appendChild(trailElement);
            trailElements.push(trailElement);
            
            // Remove excess trail elements
            if (trailElements.length > maxTrailElements) {
                const elementToRemove = trailElements.shift();
                document.body.removeChild(elementToRemove);
            }
            
            // Remove the element after lifespan
            setTimeout(() => {
                if (document.body.contains(trailElement)) {
                    document.body.removeChild(trailElement);
                    const index = trailElements.indexOf(trailElement);
                    if (index > -1) {
                        trailElements.splice(index, 1);
                    }
                }
            }, trailLifespan);
        }
    }

    const animeData = [
        {
            name: "Neon Genesis Evangelion (新世紀エヴァンゲリオン)",
            description: "Considered one of the best Animes of all time, produced by one of the most well-known postmodernist authorities in Tokyo.",
            id: "nge"
        },
        {
            name: "Made In Abyss (メイドインアビス)",
            description: "Deceptively Chibi, deep, beautifully designed, unique Anime. A short anime that will undoubtedly reward you with tears, joy, and laughter.",
            id: "mia"
        },
        {
            name: "Kino No Tabi: The Beautiful World (キノの旅 -the Beautiful World-)",
            description: "Inspired me to become a motorcyclist. Sweet, deep, short stories packed into each episode. A journey of a Girl(?) and her motorcycle in a journey of self-enlightenment.",
            id: "kino"
        },
        {
            name: "Mushishi (蟲師)",
            description: "My favorite Anime from an artistic perspective. A window into Japanese folklore.",
            id: "mushishi"
        },
        {
            name: "Full Metal Alchemist: Brotherhood (鋼の錬金術師 FULLMETAL ALCHEMIST)",
            description: "Sister Anime to the original but directed and produced to be more true to the story. Ask any random WEEB on the internet and they will have this anime on their top 10 list.",
            id: "fmab"
        },
        {
            name: "Neo Tokyo (迷宮物語)",
            description: "Award-winning short series, arguably one of the most consequential series produced in Japan. Uses cell animation (smoother but very time-consuming process of animation).",
            id: "neotokyo"
        },
        {
            name: "Tengen Toppa Gurren Lagann (天元突破グレンラガン)", // Corrected name
            description: "God Dies. Heart wrenching story. MUST SEE.",
            id: "ttgl"
        },
        {
            name: "Cowboy Bebop (カウボーイビバップ)",
            description: "The soundtrack is arguably more popular than the Anime. Produced by The Seatbelts. Neo-Noir style spaghetti western in Space.",
            id: "bebop"
        },
        {
            name: "Samurai Champloo (サムライチャンプルー)",
            description: "Twist between Japanese and Hip-Hop culture. Soundtrack sourced from the world-renowned Nujabes, a legendary beatmaker (RIP).",
            id: "champloo"
        },
        {
            name: "Trigun (トライガン)",
            description: "Childhood Fave. Great Story, Good Animation.",
            id: "trigun"
        },
        {
            name: "JoJo's Bizarre Adventure (ジョジョの奇妙な冒険)",
            description: "THE most influential anime of all time (not really but kinda sorta, cult classic, also one of the longer series still running).",
            id: "jojo"
        },
        {
            name: "Kick-Heart (キックハート)",
            description: "A weird (yeah, really weird) Japanese retelling of a Romeo and Juliet style love. Amazing artsy animation.",
            id: "kickheart"
        },
        // New anime additions below
        {
            name: "Mushoku Tensei: Jobless Reincarnation (無職転生 〜異世界行ったら本気だす〜)",
            description: "Absolute peak isekai that respects its genre. A middle-aged shut-in gets reincarnated into a fantasy world and decides to actually do something with his life this time. The worldbuilding is crazy detailed, and the character growth feels totally earned.",
            id: "mushoku"
        },
        {
            name: "Spice and Wolf (狼と香辛料)",
            description: "Medieval economics but make it sexy? A traveling merchant picks up a wolf goddess and they navigate markets, trades, and ancient pagan beliefs together. The relationship dynamics are super cozy and smart, all while teaching you more about commerce than your econ class did.",
            id: "spice"
        },
        {
            name: "Natsume's Book of Friends (夏目友人帳)",
            description: "Healing anime at its finest. Kid who can see spirits inherits a book binding yokai to his service, then spends his time releasing them from contracts instead of controlling them. Each episode hits like a warm cup of tea with a side of feels.",
            id: "natsume"
        },
        {
            name: "Ranking of Kings (王様ランキング)",
            description: "Don't let the cute art style fool you - this show punches you right in the emotional gut. A deaf, seemingly powerless prince tries to become king in a world that's already written him off. Animation is God-tier and the plot twists will leave you shook.",
            id: "ranking"
        },
        {
            name: "Vampire Hunter D: Bloodlust (バンパイアハンターD)",
            description: "Gothic horror with god-tier animation from the early 2000s. A stylish vampire hunter tracks down an abducted woman, only to discover her relationship with her 'captor' is way more complicated. The atmosphere and creature designs are simply unmatched.",
            id: "vampirehunter"
        },
        {
            name: "Shigurui: Death Frenzy (シグルイ)",
            description: "Brutally violent samurai horror that doesn't pull a single punch. Two samurai with a bloody history face off in a tournament, and we see the twisted path that brought them there. Not for the squeamish, but the historical details and disturbing beauty make it a standout.",
            id: "shigurui"
        },
        {
            name: "Steins;Gate (シュタインズ・ゲート)",
            description: "Time travel done right. A self-proclaimed mad scientist accidentally creates a time machine out of a microwave and a phone, then discovers the horrifying consequences of changing the past. Starts slow but hits like a freight train halfway through.",
            id: "steinsgate"
        },
        {
            name: "FLCL (フリクリ)",
            description: "Six episodes of pure chaotic energy that somehow perfectly capture being a confused teenager. A kid gets hit by a bass guitar and robots start coming out of his head. The animation is wild, the music by The Pillows slaps hard, and somehow it all makes emotional sense.",
            id: "flcl"
        },
        {
            name: "Akame ga Kill! (アカメが斬る!)",
            description: "Dark fantasy where absolutely no one is safe. A group of assassins take on a corrupt empire, but unlike other shonen, characters die left and right with zero plot armor. The action is brutal, the weapons are unique, and the ending will leave you empty.",
            id: "akame"
        },
        {
            name: "Megalo Box (メガロボクス)",
            description: "Retro-styled boxing anime with a gritty cyberpunk edge. An underground fighter enters a prestigious boxing tournament where competitors use mechanical enhancements, but he fights 'gearless' to prove a point. The hand-drawn animation style intentionally looks like a 90s classic.",
            id: "megalobox"
        },
        {
            name: "Wolf's Rain (ウルフズレイン)",
            description: "Poetry in motion. In a dying world, wolves (who can appear human) search for paradise that's said to open when the world ends. Has this haunting, dream-like quality and one of the most emotionally devastating endings I've ever seen. The soundtrack will stay with you for years.",
            id: "wolfsrain"
        },
        {
            name: "5 Centimeters per Second (秒速5センチメートル)",
            description: "Makoto Shinkai's masterpiece about how people drift apart over time. The title refers to the speed cherry blossoms fall, symbolizing how slowly but inevitably life changes. It's only about an hour long but will leave you staring at the ceiling, contemplating your past relationships.",
            id: "5cm"
        },
        {
            name: "Shoujo Shuumatsu Ryokou (Girls' Last Tour) (少女終末旅行)",
            description: "Two girls riding a Kettenkrad through a post-apocalyptic wasteland, but make it cozy? Somehow manages to be both deeply philosophical about the meaning of existence and adorably chill. Finds beauty in emptiness and meaning in a world after humanity.",
            id: "girlslasttour"
        },
        {
            name: "The Night Beyond the Tricornered Window (三角窓の外を見る夜)",
            description: "BL supernatural thriller with a unique vibe. A bookstore clerk who can see ghosts meets an exorcist who uses him as a 'seeing-eye human' to spot spirits. Their relationship evolves from codependence to something deeper while solving occult mysteries. The horror elements are legit creepy.",
            id: "tricorner"
        }
    ];

    const rapidFireAnime = [
        "Vinland Saga - Sub",
        "Youjo Senki - Sub",
        "Shoujo Shuumatsu Ryokou - Sub",
        "Wolf's Rain - Dub",
        "Elfen Lied - Sub",
        "Sakamoto desu ga? - Sub",
        "Hai to Gensou no Grimgar - Sub",
        "The Promised Neverland - Sub",
        "Goblin Slayer - Sub",
        "Kokkoku - Sub",
        "Space☆Dandy - Dub",
        "One Punch Man - Sub",
        "Killing Bites - Sub",
        "5 Centimeters per Second - Sub",
        "African Office Worker - Sub",
        "Shoujo Shuumatsu Ryokou (Girls' Last Tour)", // Duplicate, but keeping as per user input
        "The Night Beyond the Tricornered Window (boy love)"
    ];

    const mangaList = [
        "Hunter X Hunter (watch anime and continue into manga after it ends)",
        "Tower of God (manwa & anime)",
        "Jujutsu Kaisen (manga & anime)",
        "Mushoku Tensei (Light Novel & Anime)", // Corrected name
        "Made in Abyss (watch the series then re-read the manga!!)",
        "Promised Neverland (don't watch the anime only manga)"
    ];

    const animeTableBody = document.getElementById('animeTable')?.getElementsByTagName('tbody')[0];
    const rapidFireUl = document.getElementById('rapidFireList');
    const mangaUl = document.getElementById('mangaList');

    // Function to load saved progress for main anime list
    function loadProgress() {
        const savedProgress = JSON.parse(localStorage.getItem('animeProgress')) || {};
        console.log("Loaded main anime progress:", savedProgress);
        return savedProgress;
    }

    // Function to save progress for main anime list
    function saveProgress(id, isWatched) {
        const currentProgress = JSON.parse(localStorage.getItem('animeProgress')) || {};
        currentProgress[id] = isWatched;
        localStorage.setItem('animeProgress', JSON.stringify(currentProgress));
        console.log("Saved main anime progress for:", id, "Watched:", isWatched);
    }

    // Functions for Rapid Fire List progress
    function loadRapidFireProgress() {
        const savedProgress = JSON.parse(localStorage.getItem('rapidFireAnimeProgress')) || {};
        console.log("Loaded rapid fire progress:", savedProgress);
        return savedProgress;
    }

    function saveRapidFireProgress(id, isChecked) {
        const currentProgress = JSON.parse(localStorage.getItem('rapidFireAnimeProgress')) || {};
        currentProgress[id] = isChecked;
        localStorage.setItem('rapidFireAnimeProgress', JSON.stringify(currentProgress));
        console.log("Saved rapid fire progress for:", id, "Checked:", isChecked);
    }

    // Functions for Manga List progress
    function loadMangaProgress() {
        const savedProgress = JSON.parse(localStorage.getItem('mangaListProgress')) || {};
        console.log("Loaded manga progress:", savedProgress);
        return savedProgress;
    }

    function saveMangaProgress(id, isChecked) {
        const currentProgress = JSON.parse(localStorage.getItem('mangaListProgress')) || {};
        currentProgress[id] = isChecked;
        localStorage.setItem('mangaListProgress', JSON.stringify(currentProgress));
        console.log("Saved manga progress for:", id, "Checked:", isChecked);
    }

    if (animeTableBody) {
        const progress = loadProgress();
        animeData.forEach(anime => {
            const row = animeTableBody.insertRow();
            const cellWatch = row.insertCell();
            const cellName = row.insertCell();
            const cellDescription = row.insertCell();

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `watch-${anime.id}`;
            checkbox.checked = progress[anime.id] || false;
            checkbox.addEventListener('change', (event) => {
                saveProgress(anime.id, event.target.checked);
            });

            cellWatch.appendChild(checkbox);
            cellName.textContent = anime.name;
            cellDescription.textContent = anime.description;
        });
    } else {
        console.error("Could not find anime table body.");
    }

    if (rapidFireUl) {
        const rapidProgress = loadRapidFireProgress();
        rapidFireAnime.forEach((animeName, index) => {
            const li = document.createElement('li');
            const checkboxId = `rapid-item-${index}`;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = checkboxId;
            checkbox.checked = rapidProgress[checkboxId] || false;
            checkbox.addEventListener('change', (event) => {
                saveRapidFireProgress(checkboxId, event.target.checked);
            });

            const label = document.createElement('label');
            label.htmlFor = checkboxId;
            label.textContent = animeName;
            // Add a little space between checkbox and label
            label.style.marginLeft = '8px';

            li.appendChild(checkbox);
            li.appendChild(label);
            rapidFireUl.appendChild(li);
        });
    } else {
        console.error("Could not find rapid fire list UL.");
    }

    if (mangaUl) {
        const mangaProgress = loadMangaProgress();
        mangaList.forEach((mangaName, index) => {
            const li = document.createElement('li');
            const checkboxId = `manga-item-${index}`;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = checkboxId;
            checkbox.checked = mangaProgress[checkboxId] || false;
            checkbox.addEventListener('change', (event) => {
                saveMangaProgress(checkboxId, event.target.checked);
            });

            const label = document.createElement('label');
            label.htmlFor = checkboxId;
            label.textContent = mangaName;
            // Add a little space between checkbox and label
            label.style.marginLeft = '8px';

            li.appendChild(checkbox);
            li.appendChild(label);
            mangaUl.appendChild(li);
        });
    } else {
        console.error("Could not find manga list UL.");
    }

    // Dice randomizer functionality
    const diceBtn = document.getElementById('roll-dice-btn');
    const diceFace = document.getElementById('dice-face');
    const diceResult = document.getElementById('dice-result');

    if (diceBtn && diceFace && diceResult) {
        diceBtn.addEventListener('click', () => {
            // Disable button during animation
            diceBtn.disabled = true;
            
            // Add the rolling animation
            diceFace.classList.add('rolling');
            
            // Update the dice result after animation
            setTimeout(() => {
                // Generate random number between 1 and 15
                const randomNum = Math.floor(Math.random() * 15) + 1;
                
                // Remove the rolling animation
                diceFace.classList.remove('rolling');
                
                // Update the dice face
                diceFace.textContent = randomNum;
                
                // Update result text
                diceResult.textContent = `You rolled a ${randomNum}! Choose message #${randomNum} from your recent conversations.`;
                
                // Enable button again
                diceBtn.disabled = false;
            }, 1000); // Match this timing with the CSS animation duration
        });
    } else {
        console.error("Could not find dice randomizer elements.");
    }

    // Attempt to add a pixel font - requires the font to be available
    // For example, linking Google Fonts in HTML: <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    // Then applying it via CSS as in style.css or directly:
    // document.body.style.fontFamily = "'Press Start 2P', cursive";
    // For now, the CSS file has a class .pixelated-text with this font.
    // We could try to apply this class to the body or specific elements.
    // document.body.classList.add('pixelated-text'); // this would require the font to be linked in HTML

    console.log("Initial script setup complete. Anime table, rapid fire list, and manga list should be populated if elements found.");
}); 