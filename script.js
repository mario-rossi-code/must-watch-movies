// Film
const movies = [
    // Test
    // {
    //     saga: "000000",
    //     films: [
    //         {
    //             it: "000000",
    //             original: "000000",
    //             year: null,
    //             tmdb_id: null,
    //         },
    //     ],
    // },
    {
        saga: "#Alive",
        films: [
            {
                it: "#Alive",
                original: "#살아있다",
                year: 2020,
            },
        ],
    },
    {
        saga: "[•REC]",
        films: [
            {
                it: "[•REC]",
                original: "[•REC]",
                year: 2008,
            },
            {
                it: "[•REC] 2",
                original: "[•REC] 2",
                year: 2010,
            },
            {
                it: "[•REC] 3 - Genesi",
                original: "[•REC] 3: Genesis",
                year: 2012,
            },
            {
                it: "[•REC] 4 - Apocalisse",
                original: "[•REC] 4: Apocalypse",
                year: 2015,
            },
        ],
    },
    {
        saga: "2001 : Odissea nello Spazio",
        films: [
            {
                it: "2001 : Odissea nello Spazio",
                original: "2001 : A Space Odyssey",
                year: 1968,
            },
        ],
    },
    {
        saga: "2012",
        films: [
            {
                it: "2012",
                original: "2012",
                year: 2009,
            },
        ],
    },
    {
        saga: "21",
        films: [
            {
                it: "21",
                original: "21",
                year: 2008,
            },
        ],
    },
    {
        saga: "28 giorni dopo",
        films: [
            {
                it: "28 giorni dopo",
                original: "28 Days Later",
                year: 2002,
            },
            {
                it: "28 settimane dopo",
                original: "28 Weeks Later",
                year: 2007,
            },
            {
                it: "28 Anni dopo",
                original: "28 Years Later",
                year: 2025,
            },
        ],
    },
    {
        saga: "30 giorni di buio",
        films: [
            {
                it: "30 giorni di buio",
                original: "30 Days of Night",
                year: 2008,
            },
        ],
    },
    {
        saga: "300",
        films: [
            {
                it: "300",
                original: "300",
                year: 2007,
            },
        ],
    },
    {
        saga: "47 Ronin",
        films: [
            {
                it: "47 Ronin",
                original: "47 Ronin",
                year: 2014,
            },
        ],
    },
    {
        saga: "9",
        films: [
            {
                it: "9",
                original: "9",
                year: 2009,
            },
        ],
    },
    {
        saga: "A Beautiful Mind",
        films: [
            {
                it: "A Beautiful Mind",
                original: "A Beautiful Mind",
                year: 2002,
            },
        ],
    },
    {
        saga: "A Bug's Life",
        films: [
            {
                it: "A Bug's Life - Megaminimondo",
                original: "A Bug's Life",
                year: 1998,
            },
        ],
    },
    {
        saga: "A Christmas Carol",
        films: [
            {
                it: "A Christmas Carol",
                original: "A Christmas Carol",
                year: 2009,
                tmdb_id: 17979,
            },
        ],
    },
    {
        saga: "A Night at the Roxbury",
        films: [
            {
                it: "A Night at the Roxbury",
                original: "A Night at the Roxbury",
                year: 1998,
            },
        ],
    },
    {
        saga: "Ace Ventura",
        films: [
            {
                it: "Ace Ventura - L'acchiappanimali",
                original: "Ace Ventura: Pet Detective",
                year: 1994,
            },
            {
                it: "Ace Ventura - Missione Africa",
                original: "Ace Ventura: When Nature Calls",
                year: 1995,
            },
        ],
    },
    {
        saga: "Air Force One",
        films: [
            {
                it: "Air Force One",
                original: "Air Force One",
                year: 1997,
            },
        ],
    },
    {
        saga: "Alice",
        films: [
            {
                it: "Alice in Wonderland",
                original: "Alice in Wonderland",
                year: 2010,
            },
            {
                it: "Alice attraverso lo specchio",
                original: "Alice Through the Looking Glass",
                year: 2016,
                tmdb_id: 241259,
            },
        ],
    },
    {
        saga: "Alien",
        films: [
            {
                it: "Alien",
                original: "Alien",
                year: 1979,
            },
        ],
    },
    {
        saga: "Amabili resti",
        films: [
            {
                it: "Amabili resti",
                original: "The Lovely Bones",
                year: 2009,
            },
        ],
    },
    {
        saga: "American Gangster",
        films: [
            {
                it: "American Gangster",
                original: "American Gangster",
                year: 2007,
            },
        ],
    },
    {
        saga: "American History X",
        films: [
            {
                it: "American History X",
                original: "American History X",
                year: 1999,
            },
        ],
    },
    {
        saga: "American Psycho",
        films: [
            {
                it: "American Psycho",
                original: "American Psycho",
                year: 2000,
            },
        ],
    },
    {
        saga: "Anchorman",
        films: [
            {
                it: "Anchorman - La leggenda di Ron Burgundy",
                original: "Anchorman: The Legend of Ron Burgundy",
                year: 2004,
            },
            {
                it: "Anchorman 2 - Fotti la notizia",
                original: "Anchorman 2: The Legend Continues",
                year: 2013,
            },
        ],
    },
    {
        saga: "Annientamento",
        films: [
            {
                it: "Annientamento",
                original: "Annihilation",
                year: 2018,
            },
        ],
    },
    {
        saga: "Antlers - Spirito insaziabile",
        films: [
            {
                it: "Antlers - Spirito insaziabile",
                original: "Antlers",
                year: 2021,
            },
        ],
    },
    {
        saga: "Arancia Meccanica",
        films: [
            {
                it: "Arancia Meccanica",
                original: "A CLockwork Orange",
                year: 1972,
            },
        ],
    },
    {
        saga: "Archive",
        films: [
            {
                it: "Archive - Non mi lasciare",
                original: "Archive",
                year: 2020,
            },
        ],
    },
    {
        saga: "Arthur",
        films: [
            {
                it: "Arthur e il popolo dei Minimei",
                original: "Arthur et les Minimoys",
                year: 2007,
            },
        ],
    },
    {
        saga: "Assassinio a Venezia",
        films: [
            {
                it: "Assassinio a Venezia",
                original: "A Haunting in Venice",
                year: 2023,
            },
        ],
    },
    {
        saga: "Assassinio sul Nilo",
        films: [
            {
                it: "Assassinio sul Nilo",
                original: "Death on the Nile",
                year: 2022,
            },
        ],
    },
    {
        saga: "Assassinio sull'Orient Express",
        films: [
            {
                it: "Assassinio sull'Orient Express",
                original: "Murder on the Orient Express",
                year: 2017,
            },
        ],
    },
    {
        saga: "Atlantis - L'impero perduto",
        films: [
            {
                it: "Atlantis - L'impero perduto",
                original: "Atlantis: The Lost Empire",
                year: 2001,
            },
        ],
    },
    {
        saga: "Atto di forza",
        films: [
            {
                it: "Atto di forza",
                original: "Total Recall",
                year: 1990,
            },
        ],
    },
    {
        saga: "Austin Powers - Il controspione",
        films: [
            {
                it: "Austin Powers - Il controspione",
                original: "Austin Powers: International Man of Mystery",
                year: 1997,
            },
        ],
    },
    {
        saga: "Avatar",
        films: [
            {
                it: "Avatar",
                original: "Avatar",
                year: 2010,
            },
            {
                it: "Avatar - La via dell'acqua",
                original: "Avatar: The Way of Water",
                year: 2022,
            },
        ],
    },
    {
        saga: "Baby Driver - Il genio della fuga",
        films: [
            {
                it: "Baby Driver - Il genio della fuga",
                original: "Baby Driver",
                year: 2017,
            },
        ],
    },
    {
        saga: "Babylon",
        films: [
            {
                it: "Babylon",
                original: "Babylon",
                year: 2022,
            },
        ],
    },
    {
        saga: "Bad Boys",
        films: [
            {
                it: "Bad Boys",
                original: "Bad Boys",
                year: 1995,
            },
            {
                it: "Bad Boys II",
                original: "Bad Boys II",
                year: 2003,
            },
        ],
    },
    {
        saga: "Barry Seal - Una storia americana",
        films: [
            {
                it: "Barry Seal - Una storia americana",
                original: "American Made",
                year: 2017,
            },
        ],
    },
    {
        saga: "Bastardi senza gloria",
        films: [
            {
                it: "Bastardi senza gloria",
                original: "Inglourious Basterds",
                year: 2009,
            },
        ],
    },
    {
        saga: "Batman",
        films: [
            {
                it: "Batman",
                original: "Batman",
                year: 1989,
            },
            {
                it: "Batman Begins",
                original: "Batman Begins",
                year: 2005,
            },
            {
                it: "Il cavaliere oscuro",
                original: "The Dark Knight",
                year: 2008,
            },
            {
                it: "Il cavaliere oscuro - Il ritorno",
                original: "The Dark Knight Rises",
                year: 2012,
            },
        ],
    },
    {
        saga: "Baywatch",
        films: [
            {
                it: "Baywatch",
                original: "Baywatch",
                year: 1989,
            },
        ],
    },
    {
        saga: "Beverly Hills Cop",
        films: [
            {
                it: "Beverly Hills Cop - Un piedipiatti a Beverly Hills",
                original: "Beverly Hills Cop",
                year: 1984,
            },
            {
                it: "Beverly Hills Cop II - Un piedipiatti a Beverly Hills II",
                original: "Beverly Hills Cop II",
                year: 1987,
            },
            {
                it: "Beverly Hills Cop III - Un piedipiatti a Beverly Hills III",
                original: "Beverly Hills Cop III",
                year: 1994,
            },
            {
                it: "Axel F - Un piedipiatti a Beverly Hills",
                original: "Beverly Hills Cop: Axel F",
                year: 2024,
            },
        ],
    },
    {
        saga: "Beetlejuice",
        films: [
            {
                it: "Beetlejuice - Spiritello porcello",
                original: "Beetlejuice",
                year: 1988,
            },
            {
                it: "Beetlejuice Beetlejuice",
                original: "Beetlejuice Beetlejuice",
                year: 2024,
                tmdb_id: 917496,
            },
        ],
    },
    {
        saga: "Biancaneve e il cacciatore",
        films: [
            {
                it: "Biancaneve e il cacciatore",
                original: "Snow White and the Huntsman",
                year: 2012,
            },
            {
                it: "Il cacciatore e la regina di ghiaccio",
                original: "The Huntsman: Winter's War",
                year: 2016,
            },
        ],
    },
    {
        saga: "Big Eyes",
        films: [
            {
                it: "Big Eyes",
                original: "Big Eyes",
                year: 2015,
            },
        ],
    },
    {
        saga: "Big Hero 6",
        films: [
            {
                it: "Big Hero 6",
                original: "Big Hero 6",
                year: 2014,
            },
        ],
    },
    {
        saga: "Bird Box",
        films: [
            {
                it: "Bird Box",
                original: "Bird Box",
                year: 2018,
            },
        ],
    },
    {
        saga: "Blade",
        films: [
            {
                it: "Blade",
                original: "Blade",
                year: 1998,
            },
            {
                it: "Blade II",
                original: "Blade",
                year: 2002,
            },
            {
                it: "Blade: Trinity",
                original: "Blade: Trinity",
                year: 2005,
            },
        ],
    },
    {
        saga: "Blade Runner",
        films: [
            {
                it: "Blade Runner",
                original: "Blade Runner",
                year: 1982,
            },
            {
                it: "Blade  Runner 2049",
                original: "Blade Runner 2049",
                year: 2017,
            },
        ],
    },
    {
        saga: "Blob - Il fluido che uccide",
        films: [
            {
                it: "Blob - Il fluido che uccide",
                original: "The Blob",
                year: 1988,
            },
        ],
    },
    {
        saga: "Bohemian Rhapsody",
        films: [
            {
                it: "Bohemian Rhapsody",
                original: "Bohemian Rhapsody",
                year: 2018,
            },
        ],
    },
    {
        saga: "Bugiardo bugiardo",
        films: [
            {
                it: "Bugiardo bugiardo",
                original: "Liar Liar",
                year: 1997,
            },
        ],
    },
    {
        saga: "Bullet Train",
        films: [
            {
                it: "Bullet Train",
                original: "Bullet Train",
                year: 2022,
            },
        ],
    },
    {
        saga: "Bussano alla porta",
        films: [
            {
                it: "Bussano alla porta",
                original: "Knock at the Cabin",
                year: 2023,
            },
        ],
    },
    {
        saga: "C'era una volta il West",
        films: [
            {
                it: "C'era una volta il West",
                original: "C'era una volta il West",
                year: 1968,
            },
        ],
    },
    {
        saga: "C'era una volta in America",
        films: [
            {
                it: "C'era una volta in America",
                original: "C'era una volta in America",
                year: 1984,
            },
        ],
    },
    {
        saga: "Cars",
        films: [
            {
                it: "Cars - Motori ruggenti",
                original: "Cars",
                year: 2006,
            },
            {
                it: "Cars 2",
                original: "Cars 2",
                year: 2011,
            },
            {
                it: "Cars 3",
                original: "Cars 3",
                year: 2017,
            },
        ],
    },
    {
        saga: "Casinò",
        films: [
            {
                it: "Casinò",
                original: "Casinò",
                year: 1996,
            },
        ],
    },
    {
        saga: "Cattivissimo me",
        films: [
            {
                it: "Cattivissimo Me",
                original: "Despicable Me",
                year: 2010,
            },
            {
                it: "Cattivissimo me 2",
                original: "Despicable me 2",
                year: 2013,
            },
            {
                it: "Cattivissimo me 3",
                original: "Cattivissimo me 3",
                year: 2017,
            },
        ],
    },
    {
        saga: "Knives Out",
        films: [
            {
                it: "Cena con delitto - Knives Out",
                original: "Knives Out",
                year: 2019,
            },
            {
                it: "Glass Onion - Knives Out",
                original: "Glass Onion: A Knives Out Mystery",
                year: 2022,
            },
        ],
    },
    {
        saga: "Chi ha incastrato Roger Rabbit",
        films: [
            {
                it: "Chi ha incastrato Roger Rabbit",
                original: "Who Framed Roger Rabbit",
                year: 1988,
            },
        ],
    },
    {
        saga: "Chicken Little",
        films: [
            {
                it: "Chicken Little - Amici per le penne",
                original: "Chicken Little",
                year: 2005,
            },
        ],
    },
    {
        saga: "Chiedimi se sono felice",
        films: [
            {
                it: "Chiedimi se sono felice",
                original: "Chiedimi se sono felice",
                year: 2000,
            },
        ],
    },
    {
        saga: "Cloverfield",
        films: [
            {
                it: "Cloverfield",
                original: "Cloverfield",
                year: 2008,
            },
            {
                it: "10 Cloverfield Lane",
                original: "10 Cloverfield Lane",
                year: 2016,
            },
            {
                it: "The Cloverfield Paradox",
                original: "The Cloverfield Paradox",
                year: 2018,
            },
        ],
    },
    {
        saga: "Codice d'onore",
        films: [
            {
                it: "Codice d'onore",
                original: "A Few Good Men",
                year: 1992,
            },
        ],
    },
    {
        saga: "Cocktail",
        films: [
            {
                it: "Cocktail",
                original: "Cocktail",
                year: 1998,
            },
        ],
    },
    {
        saga: "Collateral",
        films: [
            {
                it: "Collateral",
                original: "Collateral",
                year: 2004,
            },
        ],
    },
    {
        saga: "Collateral Beauty",
        films: [
            {
                it: "Collateral Beauty",
                original: "Collateral Beauty",
                year: 2016,
            },
        ],
    },
    {
        saga: "Come ammazzare il capo... e vivere felici",
        films: [
            {
                it: "Come ammazzare il capo... e vivere felici",
                original: "Horrible Bosses",
                year: 2011,
            },
        ],
    },
    {
        saga: "Con Air",
        films: [
            {
                it: "Con Air",
                original: "Con Air",
                year: 1997,
            },
        ],
    },
    {
        saga: "Contagion",
        films: [
            {
                it: "Contagion",
                original: "Contagion",
                year: 2011,
            },
        ],
    },
    {
        saga: "Constantine",
        films: [
            {
                it: "Constantine",
                original: "Constantine",
                year: 2005,
            },
        ],
    },
    {
        saga: "Così è la vita",
        films: [
            {
                it: "Così è la vita",
                original: "Così è la vita",
                year: 1998,
            },
        ],
    },
    {
        saga: "Crimes of the Future",
        films: [
            {
                it: "Crimes of the Future",
                original: "Crimes of the Future",
                year: 2022,
            },
        ],
    },
    {
        saga: "Crimine",
        films: [
            {
                it: "Non ci resta che il crimine",
                original: "Non ci resta che il crimine",
                year: 2019,
            },
            {
                it: "Ritorno al crimine",
                original: "Ritorno al crimine",
                year: 2021,
            },
            {
                it: "C’era una volta il crimine",
                original: "C’era una volta il crimine",
                year: 2022,
            },
        ],
    },
    {
        saga: "Cube - Il cubo",
        films: [
            {
                it: "Cube - Il cubo",
                original: "Cube",
                year: 1998,
            },
        ],
    },
    {
        saga: "Dal tramonto all'alba",
        films: [
            {
                it: "Dal tramonto all'alba",
                original: "From Dusk Till Dawn",
                year: 1996,
            },
        ],
    },
    {
        saga: "Dark City",
        films: [
            {
                it: "Dark City",
                original: "Dark City",
                year: 1998,
            },
        ],
    },
    {
        saga: "Darkman",
        films: [
            {
                it: "Darkman",
                original: "Darkman",
                year: 1990,
            },
        ],
    },
    {
        saga: "Dead Silence",
        films: [
            {
                it: "Dead Silence",
                original: "Dead Silence",
                year: 2007,
            },
        ],
    },
    {
        saga: "Demolition Man",
        films: [
            {
                it: "Demolition Man",
                original: "Demolition Man",
                year: 1993,
            },
        ],
    },
    {
        saga: "Devil",
        films: [
            {
                it: "Devil",
                original: "Devil",
                year: 2010,
            },
        ],
    },
    {
        saga: "Dirty Dancing",
        films: [
            {
                it: "Dirty Dancing - Balli proibiti",
                original: "Dirty Dancing",
                year: 1987,
            },
        ],
    },
    {
        saga: "District 9",
        films: [
            {
                it: "District 9",
                original: "District 9",
                year: 2009,
            },
        ],
    },
    {
        saga: "Disturbia",
        films: [
            {
                it: "Disturbia",
                original: "Disturbia",
                year: 2007,
            },
        ],
    },
    {
        saga: "Django Unchained",
        films: [
            {
                it: "Django Unchained",
                original: "Django Unchained",
                year: 2013,
            },
        ],
    },
    {
        saga: "Donnie Darko",
        films: [
            {
                it: "Donnie Darko",
                original: "Donnie Darko",
                year: 2004,
            },
        ],
    },
    {
        saga: "Don't Look Up",
        films: [
            {
                it: "Don't Look Up",
                original: "Don't Look Up",
                year: 2021,
            },
        ],
    },
    {
        saga: "Dorian Gray",
        films: [
            {
                it: "Dorian Gray",
                original: "Dorian Gray",
                year: 2009,
            },
        ],
    },
    {
        saga: "Drag me to hell",
        films: [
            {
                it: "Drag Me to Hell",
                original: "Drag Me to Hell",
                year: 2009,
            },
        ],
    },
    {
        saga: "DragonHeart",
        films: [
            {
                it: "DragonHeart",
                original: "DragonHeart",
                year: 1996,
            },
        ],
    },
    {
        saga: "Dragon Trainer",
        films: [
            {
                it: "Dragon Trainer",
                original: "How to Train Your Dragon",
                year: 2010,
            },
            {
                it: "Dragon Trainer 2",
                original: "How to Train Your Dragon 2",
                year: 2014,
            },
            {
                it: "Dragon Trainer - Il mondo nascosto",
                original: "How to Train Your Dragon: The Hidden World",
                year: 2019,
            },
        ],
    },
    {
        saga: "Dredd - La legge sono io",
        films: [
            {
                it: "Dredd - La legge sono io",
                original: "Judge Dredd",
                year: 1995,
            },
        ],
    },
    {
        saga: "Dunkirk",
        films: [
            {
                it: "Dunkirk",
                original: "Dunkirk",
                year: 2017,
            },
        ],
    },
    {
        saga: "Edge of Tomorrow - Senza domani",
        films: [
            {
                it: "Edge of Tomorrow - Senza domani",
                original: "Edge Of Tomorrow",
                year: 2014,
            },
        ],
    },
    {
        saga: "Elysium",
        films: [
            {
                it: "Elysium",
                original: "Elysium",
                year: 2013,
            },
        ],
    },
    {
        saga: "Encanto",
        films: [
            {
                it: "Encanto",
                original: "Encanto",
                year: 2013,
            },
        ],
    },
    {
        saga: "Enemy",
        films: [
            {
                it: "Enemy",
                original: "Enemy",
                year: 2021,
            },
        ],
    },
    {
        saga: "Equilibrium",
        films: [
            {
                it: "Equilibrium",
                original: "Equilibrium",
                year: 2003,
            },
        ],
    },
    {
        saga: "Eroe per caso",
        films: [
            {
                it: "Eroe per caso",
                original: "Hero",
                year: 1992,
            },
        ],
    },
    {
        saga: "Escape Plan",
        films: [
            {
                it: "Escape Plan - Fuga dall'inferno",
                original: "Escape Plan",
                year: 2013,
            },
        ],
    },
    {
        saga: "Essi vivono",
        films: [
            {
                it: "Essi vivono",
                original: "They Live",
                year: 1989,
            },
        ],
    },
    {
        saga: "Everything Everywhere All at Once",
        films: [
            {
                it: "Everything Everywhere All at Once - La vita, il multiverso e tutto quanto",
                original: "Everything Everywhere All at Once",
                year: 2022,
            },
        ],
    },
    {
        saga: "Ex Machina",
        films: [
            {
                it: "Ex Machina",
                original: "Ex Machina",
                year: 2015,
            },
        ],
    },
    {
        saga: "Face/Off - Due facce di un assassino",
        films: [
            {
                it: "Face/Off - Due facce di un assassino",
                original: "Face/Off",
                year: 1997,
            },
        ],
    },
    {
        saga: "Finch",
        films: [
            {
                it: "Finch",
                original: "Finch",
                year: 2021,
            },
        ],
    },
    {
        saga: "Final Destination",
        films: [
            {
                it: "Final Destination",
                original: "Final Destination",
                year: 2000,
            },
            {
                it: "Final Destination 2",
                original: "Final Destination 2",
                year: 2003,
            },
            {
                it: "Final Destination 3",
                original: "Final Destination 3",
                year: 2006,
            },
            {
                it: "Final Destination 5",
                original: "Final Destination 5",
                year: 2011,
            },
        ],
    },
    {
        saga: "Flubber",
        films: [
            {
                it: "Flubber - Un professore fra le nuvole",
                original: "Flubber",
                year: 1997,
            },
        ],
    },
    {
        saga: "Focus - Niente è come sembra",
        films: [
            {
                it: "Focus - Niente è come sembra",
                original: "Focus",
                year: 2015,
            },
        ],
    },
    {
        saga: "Forrest Gump",
        films: [
            {
                it: "Forrest Gump",
                original: "Forrest Gump",
                year: 1994,
            },
        ],
    },
    {
        saga: "Four Rooms",
        films: [
            {
                it: "Four Rooms",
                original: "Four Rooms",
                year: 1995,
            },
        ],
    },
    {
        saga: "Frankenstein Junior",
        films: [
            {
                it: "Frankenstein Junior",
                original: "Young Frankenstein",
                year: 1974,
            },
        ],
    },
    {
        saga: "Free Guy - Eroe per gioco",
        films: [
            {
                it: "Free Guy - Eroe per gioco",
                original: "Free Guy",
                year: 2021,
            },
        ],
    },
    {
        saga: "From Paris with Love",
        films: [
            {
                it: "From Paris with Love",
                original: "From Paris with Love",
                year: 2010,
            },
        ],
    },
    {
        saga: "Fuck you, prof!",
        films: [
            {
                it: "Fuck you, prof!",
                original: "Fack ju Göhte",
                year: 2013,
            },
            {
                it: "Fuck you, prof! 2",
                original: "Fack ju Göhte 2",
                year: 2015,
            },
        ],
    },
    {
        saga: "Full Metal Jacket",
        films: [
            {
                it: "Full Metal Jacket",
                original: "Full Metal Jacket",
                year: 1987,
            },
        ],
    },
    {
        saga: "Funny Games",
        films: [
            {
                it: "Funny Games",
                original: "Funny Games",
                year: 2008,
                tmdb_id: 8461,
            },
        ],
    },
    {
        saga: "Fury",
        films: [
            {
                it: "Fury",
                original: "Fury",
                year: 2015,
            },
        ],
    },
    {
        saga: "Galline in fuga",
        films: [
            {
                it: "Galline in fuga",
                original: "Chicken Run",
                year: 2000,
            },
            {
                it: "Galline in fuga - L'alba dei nugget",
                original: "Chicken Run: Dawn of the Nugget",
                year: 2023,
            },
        ],
    },
    {
        saga: "Ghostbusters",
        films: [
            {
                it: "Ghostbusters (Acchiappafantasmi)",
                original: "Ghostbusters",
                year: 1984,
            },
            {
                it: "Ghostbusters II (Acchiappafantasmi II)",
                original: "Ghostbusters II",
                year: 1989,
            },
            {
                it: "Ghostbusters - Legacy",
                original: "Ghostbusters: Afterlife",
                year: 2021,
            },
            {
                it: "Ghostbusters - Minaccia glaciale",
                original: "Ghostbusters - Minaccia glaciale",
                year: 1984,
            },
        ],
    },
    {
        saga: "Giù per il tubo",
        films: [
            {
                it: "Giù per il tubo",
                original: "Flushed Away",
                year: 2006,
            },
        ],
    },

    {
        saga: "Glass",
        films: [
            {
                it: "Glass",
                original: "Glass",
                year: 2019,
            },
        ],
    },
    {
        saga: "Gli Argonauti",
        films: [
            {
                it: "Gli Argonauti",
                original: "Jason and the Argonauts",
                year: 1963,
            },
        ],
    },
    {
        saga: "Gli Aristogatti",
        films: [
            {
                it: "Gli Aristogatti",
                original: "The Aristocats",
                year: 1970,
            },
        ],
    },
    {
        saga: "Gli Incredibili",
        films: [
            {
                it: 'Gli Incredibili - Una "normale" famiglia di supereroi',
                original: "The Incredibles",
                year: 2004,
            },
            {
                it: "Gli Incredibili 2",
                original: "Incredibles 2",
                year: 2018,
            },
        ],
    },
    {
        saga: "Gli Stagisti",
        films: [
            {
                it: "Gli Stagisti",
                original: "The Internship",
                year: 2013,
            },
        ],
    },
    {
        saga: "Good Morning, Vietnam",
        films: [
            {
                it: "Good Morning, Vietnam",
                original: "Good Morning, Vietnam",
                year: 1988,
            },
        ],
    },
    {
        saga: "Grease",
        films: [
            {
                it: "Grease - Brillantina",
                original: "Grease",
                year: 1978,
            },
        ],
    },
    {
        saga: "Green Book",
        films: [
            {
                it: "Green Book",
                original: "Green Book",
                year: 2018,
            },
        ],
    },
    {
        saga: "Gremlins",
        films: [
            {
                it: "Gremlins",
                original: "Gremlins",
                year: 1984,
            },
            {
                it: "Gremlins 2 - La nuova stirpe",
                original: "Gremlins 2 - The new batch",
                year: 1990,
            },
        ],
    },
    {
        saga: "Halloween",
        films: [
            {
                it: "Halloween - La notte delle streghe",
                original: "Halloween",
                year: 1978,
            },
        ],
    },
    {
        saga: "Hannibal",
        films: [
            {
                it: "Hannibal",
                original: "Hannibal",
                year: 2001,
            },
        ],
    },
    {
        saga: "Harry Potter",
        films: [
            {
                it: "Harry Potter e la pietra filosofale",
                original: "Harry Potter and the Philosopher's Stone",
                year: 2001,
            },
            {
                it: "Harry Potter e la camera dei segreti",
                original: "Harry Potter and the Chamber of Secrets",
                year: 2002,
            },
            {
                it: "Harry Potter e il prigioniero di Azkaban",
                original: "Harry Potter and the Prisoner of Azkaban",
                year: 2004,
            },
            {
                it: "Harry Potter e il calice di fuoco",
                original: "Harry Potter and the Goblet of Fire",
                year: 2005,
            },
            {
                it: "Harry Potter e l'ordine della fenice",
                original: "Harry Potter and the Order of the Phoenix",
                year: 2007,
            },
            {
                it: "Harry Potter e il principe mezzosangue",
                original: "Harry Potter and the Half-Blood Prince",
                year: 2009,
            },
            {
                it: "Harry Potter e i Doni della Morte - Parte 1",
                original: "Harry Potter and the Deathly Hallows - Part 1",
                year: 2010,
            },
            {
                it: "Harry Potter e i Doni della Morte - Parte 2",
                original: "Harry Potter and the Deathly Hallows - Part 2",
                year: 2011,
            },
        ],
    },
    {
        saga: "Hellraiser",
        films: [
            {
                it: "Hellraiser",
                original: "Hellraiser",
                year: 1988,
            },
        ],
    },
    {
        saga: "Highlander",
        films: [
            {
                it: "Highlander - L'ultimo immortale",
                original: "Highlander",
                year: 1986,
            },
        ],
    },
    {
        saga: "Hocus Pocus",
        films: [
            {
                it: "Hocus Pocus",
                original: "Hocus Pocus",
                year: 1993,
            },
            {
                it: "Hocus Pocus 2",
                original: "Hocus Pocus 2",
                year: 2022,
            },
        ],
    },
    {
        saga: "Hook - Capitan Uncino",
        films: [
            {
                it: "Hook - Capitan Uncino",
                original: "Hook",
                year: 1991,
            },
        ],
    },
    {
        saga: "Hugo Cabret",
        films: [
            {
                it: "Hugo Cabret",
                original: "Hugo Cabret",
                year: 2011,
            },
        ],
    },
    {
        saga: "Humandroid",
        films: [
            {
                it: "Humandroid",
                original: "Chappie",
                year: 2015,
            },
        ],
    },
    {
        saga: "I Fantastici 4",
        films: [
            {
                it: "I Fantastici 4",
                original: "Fantastic Four",
                year: 2005,
            },
            {
                it: "I Fantastici 4 e Silver Surfer",
                original: "Fantastic Four: Rise of the Silver Surfer",
                year: 2007,
            },
        ],
    },
    {
        saga: "I Flintstones",
        films: [
            {
                it: "I Flintstones",
                original: "The Flintstones",
                year: 1994,
            },
        ],
    },
    {
        saga: "I magnifici sette",
        films: [
            {
                it: "I magnifici sette",
                original: "The Magnificent Seven",
                year: 2016,
            },
        ],
    },
    {
        saga: "I soliti sospetti",
        films: [
            {
                it: "I soliti sospetti",
                original: "The Usual Suspects",
                year: 1995,
            },
        ],
    },
    {
        saga: "Identità",
        films: [
            {
                it: "Identità",
                original: "Identity",
                year: 2003,
            },
        ],
    },
    {
        saga: "IF - gli Amici Immaginari",
        films: [
            {
                it: "IF - gli Amici Immaginari",
                original: "IF",
                year: 2024,
            },
        ],
    },
    {
        saga: "Il bambino col pigiama a righe",
        films: [
            {
                it: "Il bambino col pigiama a righe",
                original: "The Boy in the Striped Pyjamas",
                year: 2008,
            },
        ],
    },
    {
        saga: "Il buco",
        films: [
            {
                it: "Il buco",
                original: "El hoyo",
                year: 2019,
            },
            {
                it: "Il buco - Capitolo 2",
                original: "El hoyo 2",
                year: 2024,
            },
        ],
    },
    {
        saga: "Il curioso caso di Benjamin Button",
        films: [
            {
                it: "Il curioso caso di Benjamin Button",
                original: "The Curious Case of Benjamin Button",
                year: 2008,
            },
        ],
    },
    {
        saga: "Il Dittatore",
        films: [
            {
                it: "Il Dittatore",
                original: "The Dictator",
                year: 2012,
            },
        ],
    },
    {
        saga: "Il Fuggtivo",
        films: [
            {
                it: "Il Fuggtivo",
                original: "The Fugitive",
                year: 1993,
            },
        ],
    },
    {
        saga: "Il GGG - Il Grande Gigante Gentile",
        films: [
            {
                it: "Il GGG - Il Grande Gigante Gentile",
                original: "The BFG",
                year: 2016,
            },
        ],
    },
    {
        saga: "Il gigante di ferro",
        films: [
            {
                it: "Il gigante di ferro",
                original: "The Iron Giant",
                year: 1999,
            },
        ],
    },
    {
        saga: "Il gladiatore",
        films: [
            {
                it: "Il gladiatore",
                original: "Gladiator",
                year: 2000,
            },
        ],
    },
    {
        saga: "Il gobbo di Notre Dame",
        films: [
            {
                it: "Il gobbo di Notre Dame",
                original: "The Hunchback of Notre Dame",
                year: 1996,
            },
        ],
    },
    {
        saga: "Il grande dittatore ",
        films: [
            {
                it: "Il grande dittatore ",
                original: "The Great Dictator",
                year: 1940,
            },
        ],
    },
    {
        saga: "Il grande e potente Oz",
        films: [
            {
                it: "Il grande e potente Oz",
                original: "Oz the Great and Powerful",
                year: 2013,
            },
        ],
    },
    {
        saga: "Il grande Gatsby",
        films: [
            {
                it: "Il grande Gatsby",
                original: "The great Gatsby",
                year: 2013,
            },
        ],
    },
    {
        saga: "Il grande Lebowski",
        films: [
            {
                it: "Il grande Lebowski",
                original: "The Big Lebowski",
                year: 1998,
            },
        ],
    },
    {
        saga: "Il Grinch",
        films: [
            {
                it: "Il Grinch",
                original: "How the Grinch Stole Christmas",
                year: 2000,
            },
        ],
    },
    {
        saga: "Il labirinto del fauno",
        films: [
            {
                it: "Il labirinto del fauno",
                original: "El laberinto del fauno",
                year: 2006,
            },
        ],
    },
    {
        saga: "Il laureato",
        films: [
            {
                it: "Il laureato",
                original: "The Graduate",
                year: 1967,
            },
        ],
    },
    {
        saga: "Il libro della giungla",
        films: [
            {
                it: "Il libro della giungla",
                original: "The Jungle Book",
                year: 1968,
            },
        ],
    },
    {
        saga: "Il miglio verde",
        films: [
            {
                it: "Il miglio verde",
                original: "The Green Mile",
                year: 1999,
            },
        ],
    },
    {
        saga: "Il mistero di Sleepy Hollow",
        films: [
            {
                it: "Il mistero di Sleepy Hollow",
                original: "Sleepy Hollow",
                year: 1999,
            },
        ],
    },
    {
        saga: "Il monello",
        films: [
            {
                it: "Il monello",
                original: "The Kid",
                year: 1923,
            },
        ],
    },
    {
        saga: "Il mondo dei replicanti",
        films: [
            {
                it: "Il mondo dei replicanti",
                original: "Surrogates",
                year: 2009,
            },
        ],
    },
    {
        saga: "Il nome della rosa",
        films: [
            {
                it: "Il nome della rosa",
                original: "The Name of the Rose",
                year: 1986,
            },
        ],
    },
    {
        saga: "Il pianeta del tesoro",
        films: [
            {
                it: "Il pianeta del tesoro",
                original: "Treasure Planet",
                year: 2002,
            },
        ],
    },
    {
        saga: "Il pianeta delle scimmie",
        films: [
            {
                it: "Il pianeta delle scimmie",
                original: "Planet of the Apes",
                year: 1974,
            },
            {
                it: "L'alba del pianeta delle scimmie",
                original: "Rise of the Planet of the Apes",
                year: 2011,
            },
            {
                it: "Apes Revolution - Il pianeta delle scimmie",
                original: "Dawn of the Planet of the Apes",
                year: 2014,
            },
            {
                it: "The War - Il pianeta delle scimmie",
                original: "War for the Planet of the Apes",
                year: 2017,
            },
        ],
    },
    {
        saga: "Il pianista",
        films: [
            {
                it: "Il pianista",
                original: "The Pianist",
                year: 2002,
            },
        ],
    },
    {
        saga: "Il prescelto",
        films: [
            {
                it: "Il prescelto",
                original: "The Wicker Man",
                year: 2006,
            },
        ],
    },
    {
        saga: "Il principe cerca moglie",
        films: [
            {
                it: "Il principe cerca moglie",
                original: "Coming to America",
                year: 1988,
            },
        ],
    },
    {
        saga: "Il professore matto",
        films: [
            {
                it: "Il professore matto",
                original: "The Nutty Professor",
                year: 1996,
            },
        ],
    },
    {
        saga: "Il quinto elemento",
        films: [
            {
                it: "Il quinto elemento",
                original: "Le Cinquième Élément",
                year: 1997,
            },
        ],
    },
    {
        saga: "Il Re Scorpione",
        films: [
            {
                it: "Il Re Scorpione",
                original: "The Scorpion King",
                year: 2002,
            },
        ],
    },
    {
        saga: "Il robot selvaggio",
        films: [
            {
                it: "Il robot selvaggio",
                original: "The Wild Robot",
                year: 2024,
            },
        ],
    },
    {
        saga: "Il sesto senso",
        films: [
            {
                it: "Il sesto senso",
                original: "The Sixth Sense",
                year: 1999,
            },
        ],
    },
    {
        saga: "Il Signore degli Anelli",
        films: [
            {
                it: "Il Signore degli Anelli - La compagnia dell'anello",
                original: "The Lord of the Rings: The Fellowship of the Ring",
                year: 2002,
            },
            {
                it: "Il Signore degli Anelli - Il ritorno del re",
                original: "The Lord of the Rings: The Return of the King",
                year: 2003,
            },
            {
                it: "Il Signore degli Anelli - Le due torri",
                original: "The Lord of the Rings: The Two Towers",
                year: 2004,
            },
        ],
    },
    {
        saga: "Il silenzio degli innocenti",
        films: [
            {
                it: "Il silenzio degli innocenti",
                original: "The Silence of the Lambs",
                year: 1991,
            },
        ],
    },
    {
        saga: "Immaturi",
        films: [
            {
                it: "Immaturi",
                original: "Immaturi",
                year: 2011,
            },
            {
                it: "Immaturi - Il viaggio",
                original: "Immaturi - Il viaggio",
                year: 2012,
            },
        ],
    },
    {
        saga: "Inception",
        films: [
            {
                it: "Inception",
                original: "Inception",
                year: 2010,
            },
        ],
    },
    {
        saga: "Indipendence Day",
        films: [
            {
                it: "Indipendence Day",
                original: "Indipendence Day",
                year: 1996,
            },
        ],
    },
    {
        saga: "Indiana Jones",
        films: [
            {
                it: "I predatori dell'arca perduta",
                original: "Raiders of the Lost Ark",
                year: 1981,
            },
            {
                it: "Indiana Jones e il tempio maledetto",
                original: "Indiana Jones and the Temple of Doom",
                year: 1984,
            },
            {
                it: "Indiana Jones e l'ultima crociata",
                original: "Indiana Jones and the Last Crusade",
                year: 1989,
            },
            {
                it: "Indiana Jones e il regno del teschio di cristallo",
                original: "Indiana Jones and the Kingdom of the Crystal Skull",
                year: 2008,
            },
            {
                it: "Indiana Jones e il quadrante del destino",
                original: "Indiana Jones and the Dial of Destiny",
                year: 2023,
            },
        ],
    },
    {
        saga: "Inside Out",
        films: [
            {
                it: "Inside Out",
                original: "Inside Out",
                year: 2015,
            },
            {
                it: "Inside Out 2",
                original: "Inside Out 2",
                year: 2024,
            },
        ],
    },
    {
        saga: "Insidious",
        films: [
            {
                it: "Insidious",
                original: "Insidious",
                year: 2011,
            },
            {
                it: "Insidious - Oltre i confini del male",
                original: "Insidious: Chapter 2",
                year: 2013,
            },
            {
                it: "Insidious 3 - L'inizio",
                original: "Insidious: Chapter 3",
                year: 2015,
            },
        ],
    },
    {
        saga: "Insomnia",
        films: [
            {
                it: "Insomnia",
                original: "Insomnia",
                year: 2002,
            },
        ],
    },
    {
        saga: "Interstellar",
        films: [
            {
                it: "Interstellar",
                original: "Interstellar",
                year: 2014,
            },
        ],
    },
    {
        saga: "Io sono leggenda",
        films: [
            {
                it: "Io sono leggenda",
                original: "I Am Legend",
                year: 2008,
            },
        ],
    },
    {
        saga: "Io, Robot",
        films: [
            {
                it: "Io, Robot",
                original: "I, Robot",
                year: 2004,
            },
        ],
    },
    {
        saga: "Ip Man",
        films: [
            {
                it: "Ip Man",
                original: "葉問",
                year: 2008,
            },
        ],
    },
    {
        saga: "Ipotesi di complotto",
        films: [
            {
                it: "Ipotesi di complotto",
                original: "Conspiracy Theory",
                year: 1997,
            },
        ],
    },
    {
        saga: "Iron Man",
        films: [
            {
                it: "Iron Man",
                original: "Iron Man",
                year: 2008,
            },
        ],
    },
    {
        saga: "IT - Pagliaccio Assassino",
        films: [
            {
                it: "IT - Pagliaccio Assassino",
                original: "IT",
                year: 1986,
            },
        ],
    },
    {
        saga: "Jackie Brown",
        films: [
            {
                it: "Jackie Brown",
                original: "Jackie Brown",
                year: 1997,
            },
        ],
    },
    {
        saga: "John Wick",
        films: [
            {
                it: "John Wick",
                original: "John Wick",
                year: 2014,
            },
        ],
    },
    {
        saga: "Johnny English",
        films: [
            {
                it: "Johnny English",
                original: "Johnny English",
                year: 2003,
            },
            {
                it: "Johnny English - La rinascita",
                original: "Johnny English Reborn",
                year: 2011,
            },
            {
                it: "Johnny English colpisce ancora",
                original: "Johnny English Strikes Again",
                year: 2018,
            },
        ],
    },
    {
        saga: "Jojo Rabbit",
        films: [
            {
                it: "Jojo Rabbit",
                original: "Jojo Rabbit",
                year: 2019,
            },
        ],
    },
    {
        saga: "Jumanji",
        films: [
            {
                it: "Jumanji",
                original: "Jumanji",
                year: 1995,
            },
        ],
    },
    {
        saga: "Jurassic Parkilm",
        films: [
            {
                it: "Jurassic Park",
                original: "Jurassic Park",
                year: 1993,
            },
            {
                it: "Jurassic Park - Il mondo perduto",
                original: "The Lost World: Jurassic Park",
                year: 1986,
            },
            {
                it: "Jurassic Park III",
                original: "Jurassic Park III",
                year: 1986,
            },
        ],
    },
    {
        saga: "Karate Kid",
        films: [
            {
                it: "Karate Kid - Per vincere domani",
                original: "Karate Kid",
                year: 1984,
            },
        ],
    },
    {
        saga: "Kill Bill",
        films: [
            {
                it: "Kill Bill: Volume 1",
                original: "Kill Bill: Vol. 1",
                year: 2003,
            },
            {
                it: "Kill Bill: Volume 2",
                original: "Kill Bill: Vol. 2",
                year: 2004,
            },
        ],
    },
    {
        saga: "King Kong",
        films: [
            {
                it: "King Kong",
                original: "King Kong",
                year: 2005,
            },
        ],
    },
    {
        saga: "Kingsman",
        films: [
            {
                it: "Kingsman: Secret Service",
                original: "Kingsman: The Secret Service",
                year: 2015,
            },
            {
                it: "Kingsman: Il cerchio d'oro",
                original: "Kingsman: The Golden Circle",
                year: 2017,
            },
        ],
    },
    {
        saga: "Klaus - I segreti del Natale",
        films: [
            {
                it: "Klaus - I segreti del Natale",
                original: "Klaus",
                year: 2019,
            },
        ],
    },
    {
        saga: "Koda, fratello orso",
        films: [
            {
                it: "Koda, fratello orso",
                original: "Brother Bear",
                year: 2003,
            },
        ],
    },
    {
        saga: "Kung Fu Panda",
        films: [
            {
                it: "Kung Fu Panda",
                original: "Kung Fu Panda",
                year: 2008,
            },
            {
                it: "Kung Fu Panda 2",
                original: "Kung Fu Panda 2",
                year: 2011,
            },
            {
                it: "Kung Fu Panda 3",
                original: "Kung Fu Panda 3",
                year: 2016,
            },
        ],
    },
    {
        saga: "L'acchiappasogni",
        films: [
            {
                it: "L'acchiappasogni",
                original: "Dreamcatcher",
                year: 2003,
            },
        ],
    },
    {
        saga: "L'attimo fuggente",
        films: [
            {
                it: "L'attimo fuggente",
                original: "Dead Poets Society",
                year: 1989,
            },
        ],
    },
    {
        saga: "L'era glaciale",
        films: [
            {
                it: "L'era glaciale",
                original: "Ice Age",
                year: 2002,
            },
            {
                it: "L'era glaciale 2 - Il disgelo",
                original: "Ice Age: The Meltdown",
                year: 2006,
            },
            {
                it: "L'era glaciale 3 - L'alba dei dinosauri",
                original: "Ice Age: Dawn of the Dinosaurs",
                year: 2009,
            },
        ],
    },
    {
        saga: "L'esercito delle 12 scimmie",
        films: [
            {
                it: "L'esercito delle 12 scimmie",
                original: "Twelve Monkeys",
                year: 1995,
            },
        ],
    },
    {
        saga: "L'ultimo samurai",
        films: [
            {
                it: "L'ultimo samurai",
                original: "The Last Samurai",
                year: 2003,
            },
        ],
    },
    {
        saga: "L'uomo senza ombra",
        films: [
            {
                it: "L'uomo senza ombra",
                original: "Hollow Man",
                year: 2000,
            },
        ],
    },
    {
        saga: "L'uomo senza sonno",
        films: [
            {
                it: "L'uomo senza sonno",
                original: "The Machinist",
                year: 2004,
            },
        ],
    },
    {
        saga: "La battaglia di Hacksaw Ridge",
        films: [
            {
                it: "La battaglia di Hacksaw Ridge",
                original: "Hacksaw Ridge",
                year: 2016,
            },
        ],
    },
    {
        saga: "La bambola assassina",
        films: [
            {
                it: "La bambola assassina",
                original: "Child's Play",
                year: 1988,
            },
        ],
    },
    {
        saga: "La casa",
        films: [
            {
                it: "La casa",
                original: "The Evil Dead",
                year: 1981,
            },
        ],
    },
    {
        saga: "La città incantata",
        films: [
            {
                it: "La città incantata",
                original: "千と千尋の神隠し",
                year: 2001,
            },
        ],
    },
    {
        saga: "La cosa",
        films: [
            {
                it: "La cosa",
                original: "The Thing",
                year: 1982,
            },
        ],
    },
    {
        saga: "La fabbrica di cioccolato",
        films: [
            {
                it: "La fabbrica di cioccolato",
                original: "Charlie and the Chocolate Factory",
                year: 2005,
            },
        ],
    },
    {
        saga: "La febbre del sabato sera",
        films: [
            {
                it: "La febbre del sabato sera",
                original: "Saturday Night Fever",
                year: 1977,
            },
        ],
    },
    {
        saga: "La forma dell'acqua",
        films: [
            {
                it: "La forma dell'acqua",
                original: "The Shape of Water",
                year: 2017,
            },
        ],
    },
    {
        saga: "La gang del bosco",
        films: [
            {
                it: "La gang del bosco",
                original: "Over the Hedge",
                year: 2006,
            },
        ],
    },
    {
        saga: "La giuria",
        films: [
            {
                it: "La giuria",
                original: "Runaway Jury",
                year: 2003,
            },
        ],
    },
    {
        saga: "La guerra dei mondi",
        films: [
            {
                it: "La guerra dei mondi",
                original: "War of the Worlds",
                year: 2005,
            },
        ],
    },
    {
        saga: "La leggenda di Al, John e Jack",
        films: [
            {
                it: "La leggenda di Al, John e Jack",
                original: "La leggenda di Al, John e Jack",
                year: 2002,
            },
        ],
    },
    {
        saga: "La maschera di cera",
        films: [
            {
                it: "La maschera di cera",
                original: "House of Wax",
                year: 2005,
            },
        ],
    },
    {
        saga: "La mosca",
        films: [
            {
                it: "La mosca",
                original: "The Fly",
                year: 1986,
            },
        ],
    },
    {
        saga: "La Mummia",
        films: [
            {
                it: "La Mummia",
                original: "The Mummy",
                year: 1999,
            },
            {
                it: "La Mummia - Il ritorno",
                original: "The Mummy Returns",
                year: 2001,
            },
        ],
    },
    {
        saga: "La notte del giudizio",
        films: [
            {
                it: "La notte del giudizio",
                original: "The Purge",
                year: 2013,
            },
            {
                it: "Anarchia - La notte del giudizio",
                original: "The Purge: Anarchy",
                year: 2014,
            },
            {
                it: "La notte del giudizio - Election Year",
                original: "The Purge: Election Year",
                year: 2016,
            },
        ],
    },
    {
        saga: "La piccola bottega degli orrori",
        films: [
            {
                it: "La piccola bottega degli orrori",
                original: "Little Shop of Horrors",
                year: 1919861,
            },
        ],
    },
    {
        saga: "La preda perfetta",
        films: [
            {
                it: "La preda perfetta",
                original: "A Walk Among the Tombstones",
                year: 2014,
            },
        ],
    },
    {
        saga: "La spada nella roccia",
        films: [
            {
                it: "La spada nella roccia",
                original: "The Sword in the Stone",
                year: 1963,
            },
        ],
    },
    {
        saga: "La storia infinita",
        films: [
            {
                it: "La storia infinita",
                original: "Die unendliche Geschichte",
                year: 1984,
            },
        ],
    },
    {
        saga: "La vita è bella",
        films: [
            {
                it: "La vita è bella",
                original: "La vita è bella",
                year: 1997,
            },
        ],
    },
    {
        saga: "Le 12 fatiche di Asterix",
        films: [
            {
                it: "Le 12 fatiche di Asterix",
                original: "Les 12 travaux d'Astérix",
                year: 1976,
            },
        ],
    },
    {
        saga: "Le ali della libertà",
        films: [
            {
                it: "Le ali della libertà",
                original: "The Shawshank Redemption",
                year: 1995,
            },
        ],
    },
    {
        saga: "Le colline hanno gli occhi",
        films: [
            {
                it: "Le colline hanno gli occhi",
                original: "The Hills Have Eyes",
                year: 2006,
            },
        ],
    },
    {
        saga: "Le cronache di Narnia",
        films: [
            {
                it: "Le cronache di Narnia - Il leone, la strega e l'armadio",
                original:
                    "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
                year: 2005,
            },
            {
                it: "Le cronache di Narnia - Il principe Caspian",
                original: "The Chronicles of Narnia: Prince Caspian",
                year: 2008,
            },
            {
                it: "Le cronache di Narnia - Il viaggio del veliero",
                original:
                    "The Chronicles of Narnia: The Voyage of the Dawn Treader",
                year: 2010,
            },
        ],
    },
    {
        saga: "Le follie dell'imperatore",
        films: [
            {
                it: "Le follie dell'imperatore",
                original: "The Emperor's New Groove",
                year: 2001,
            },
        ],
    },
    {
        saga: "Le iene",
        films: [
            {
                it: "Le iene",
                original: "Reservoir Dogs",
                year: 1992,
            },
        ],
    },
    {
        saga: "Le Mans '66 - La grande sfida",
        films: [
            {
                it: "Le Mans '66 - La grande sfida",
                original: "Ford v Ferrari",
                year: 2019,
            },
        ],
    },
    {
        saga: "Le streghe",
        films: [
            {
                it: "Le streghe",
                original: "Roald Dahl's The Witches",
                year: 2022,
            },
        ],
    },
    {
        saga: "Le streghe di Eastwick",
        films: [
            {
                it: "Le streghe di Eastwick",
                original: "The Witches of Eastwick",
                year: 1987,
            },
        ],
    },
    {
        saga: "Legend",
        films: [
            {
                it: "Legend",
                original: "Legend",
                year: 2015,
            },
        ],
    },
    {
        saga: "Lemony Snicket - Una serie di sfortunati eventi ",
        films: [
            {
                it: "Lemony Snicket - Una serie di sfortunati eventi ",
                original: "Lemony Snicket's A Series of Unfortunate Events",
                year: 2004,
            },
        ],
    },
    {
        saga: "Léon",
        films: [
            {
                it: "Léon: The Professional",
                original: "Léon",
                year: 1994,
            },
        ],
    },
    {
        saga: "Life",
        films: [
            {
                it: "Life",
                original: "Life",
                year: 1999,
            },
        ],
    },
    {
        saga: "Lilo & Stitch",
        films: [
            {
                it: "Lilo & Stitch",
                original: "Lilo & Stitch",
                year: 2002,
            },
        ],
    },
    {
        saga: "Limitless",
        films: [
            {
                it: "Limitless",
                original: "Limitless",
                year: 2011,
            },
        ],
    },
    {
        saga: "Lo chiamavano Jeeg Robot",
        films: [
            {
                it: "Lo chiamavano Jeeg Robot",
                original: "Lo chiamavano Jeeg Robot",
                year: 2016,
            },
        ],
    },
    {
        saga: "Lo chiamavano Trinità...",
        films: [
            {
                it: "Lo chiamavano Trinità...",
                original: "Lo chiamavano Trinità...",
                year: 1970,
            },
        ],
    },
    {
        saga: "Lo sciacallo - Nightcrawler",
        films: [
            {
                it: "Lo sciacallo - Nightcrawler",
                original: "Nightcrawler",
                year: 2014,
            },
        ],
    },
    {
        saga: "Logan - The Wolverine",
        films: [
            {
                it: "Logan - The Wolverine",
                original: "Logan",
                year: 2017,
            },
        ],
    },
    {
        saga: "Luca",
        films: [
            {
                it: "Luca",
                original: "Luca",
                year: 2021,
            },
        ],
    },
    {
        saga: "Mad Max: Fury Road",
        films: [
            {
                it: "Mad Max: Fury Road",
                original: "Mad Max: Fury Road",
                year: 2015,
            },
            {
                it: "Furiosa: A Mad Max Saga",
                original: "Furiosa: A Mad Max Saga",
                year: 2024,
            },
        ],
    },
    {
        saga: "Madagascar",
        films: [
            {
                it: "Madagascar",
                original: "Madagascar",
                year: 2005,
            },
        ],
    },
    {
        saga: "Mamma, ho perso l'aereo",
        films: [
            {
                it: "Mamma, ho perso l'aereo",
                original: "Home Alone",
                year: 1990,
            },
        ],
    },
    {
        saga: "Mars Attacks!",
        films: [
            {
                it: "Mars Attacks!",
                original: "Mars Attacks!",
                year: 1996,
            },
        ],
    },
    {
        saga: "Mary Poppins",
        films: [
            {
                it: "Mary Poppins",
                original: "Mary Poppins",
                year: 1965,
            },
            {
                it: "Il ritorno di Mary Poppins",
                original: "Mary Poppins Returns",
                year: 2018,
            },
        ],
    },
    {
        saga: "Matrix",
        films: [
            {
                it: "Matrix",
                original: "The Matrix",
                year: 1999,
            },
            {
                it: "Matrix Reloaded",
                original: "The Matrix Reloaded",
                year: 2003,
            },
            {
                it: "Matrix Revolutions",
                original: "The Matrix Revolutions",
                year: 2003,
            },
        ],
    },
    {
        saga: "Megamind",
        films: [
            {
                it: "Megamind",
                original: "Megamind",
                year: 2010,
            },
        ],
    },
    {
        saga: "Memento",
        films: [
            {
                it: "Memento",
                original: "Memento",
                year: 2001,
            },
        ],
    },
    {
        saga: "Men in Black",
        films: [
            {
                it: "Men in Black",
                original: "Men in Black",
                year: 1997,
            },
            {
                it: "Men in Black II",
                original: "Men in Black II",
                year: 2002,
            },
            {
                it: "Men in Black 3",
                original: "Men in Black 3",
                year: 2012,
            },
        ],
    },
    {
        saga: "Mi fido di te",
        films: [
            {
                it: "Mi fido di te",
                original: "Mi fido di te",
                year: 2007,
            },
        ],
    },
    {
        saga: "Mi presenti i tuoi?",
        films: [
            {
                it: "Ti presento i miei",
                original: "Meet the Parents",
                year: 2000,
            },
            {
                it: "Mi presenti i tuoi?",
                original: "Meet the Fockers",
                year: 2005,
            },
            {
                it: "Vi presento i nostri",
                original: "Little Fockers",
                year: 2010,
            },
        ],
    },
    {
        saga: "Mickey 17",
        films: [
            {
                it: "Mickey 17",
                original: "Mickey 17",
                year: 2025,
            },
        ],
    },
    {
        saga: "Midsommar",
        films: [
            {
                it: "Midsommar - Il villaggio dei dannati",
                original: "Midsommar",
                year: 2019,
            },
        ],
    },
    {
        saga: "Minority Report",
        films: [
            {
                it: "Minority Report",
                original: "Minority Report",
                year: 2002,
            },
        ],
    },
    {
        saga: "Molly's Game",
        films: [
            {
                it: "Molly's Game",
                original: "Molly's Game",
                year: 2017,
            },
        ],
    },
    {
        saga: "Monsters & Co.",
        films: [
            {
                it: "Monsters & Co.",
                original: "Monsters, Inc.",
                year: 2002,
            },
            {
                it: "Monsters University",
                original: "Monsters University",
                year: 2013,
            },
        ],
    },
    {
        saga: "Mostri contro alieni",
        films: [
            {
                it: "Mostri contro alieni",
                original: "Mosnsters vs Aliens",
                year: 2009,
            },
        ],
    },
    {
        saga: "Mr. Bean - L'ultima catastrofe",
        films: [
            {
                it: "Mr. Bean - L'ultima catastrofe",
                original: "Bean",
                year: 1997,
            },
        ],
    },
    {
        saga: "Mrs. Doubtfire - Mammo per sempre",
        films: [
            {
                it: "Mrs. Doubtfire - Mammo per sempre",
                original: "Mrs. Doubtfire",
                year: 1993,
            },
        ],
    },
    {
        saga: "Nell'erba alta",
        films: [
            {
                it: "Nell'erba alta",
                original: "In the Tall Grass",
                year: 2019,
            },
        ],
    },
    {
        saga: "Nightmare Before Christmas",
        films: [
            {
                it: "Nightmare Before Christmas",
                original: "The Nightmare Before Christmas",
                year: 1993,
            },
        ],
    },
    {
        saga: "Nightmare - Dal profondo della notte",
        films: [
            {
                it: "Nightmare - Dal profondo della notte",
                original: "A Nightmare on Elm Street",
                year: 1984,
            },
        ],
    },
    {
        saga: "Noi",
        films: [
            {
                it: "Noi",
                original: "Us",
                year: 1990,
            },
        ],
    },
    {
        saga: "Non aprite quella porta",
        films: [
            {
                it: "Non aprite quella porta",
                original: "The Texas Chain Saw Massacre",
                year: 1974,
            },
        ],
    },
    {
        saga: "Non così vicino",
        films: [
            {
                it: "Non così vicino",
                original: "A Man Called Otto",
                year: 2022,
            },
        ],
    },
    {
        saga: "Non è un paese per vecchi",
        films: [
            {
                it: "Non è un paese per vecchi",
                original: "No Country for Old Men",
                year: 2007,
            },
        ],
    },
    {
        saga: "Non sposate le mie figlie!",
        films: [
            {
                it: "Non sposate le mie figlie!",
                original: "Qu'est-ce qu'on a fait au Bon Dieu ?",
                year: 2014,
            },
            {
                it: "Non sposate le mie figlie! 2",
                original: "Qu'est-ce qu'on a encore fait au Bon Dieu ?",
                year: 2019,
            },
            {
                it: "Non sposate le mie figlie! 3 - Riunione di famiglia",
                original: "Qu'est-ce qu'on a tous fait au Bon Dieu ?",
                year: 2021,
            },
        ],
    },
    {
        saga: "Nope",
        films: [
            {
                it: "Nope",
                original: "Nope",
                year: 2022,
            },
        ],
    },
    {
        saga: "Nosferatu",
        films: [
            {
                it: "Nosferatu",
                original: "Nosferatu",
                year: 2024,
            },
        ],
    },
    {
        saga: "Now You See Me",
        films: [
            {
                it: "Now You See Me - I maghi del crimine",
                original: "Now You See Me",
                year: 2013,
            },
            {
                it: "Now You See Me 2",
                original: "Now You See Me 2",
                year: 2016,
            },
        ],
    },
    {
        saga: "Number 23",
        films: [
            {
                it: "Number 23",
                original: "The Number 23",
                year: 2007,
            },
        ],
    },
    {
        saga: "Oblivion",
        films: [
            {
                it: "Oblivion",
                original: "Oblivion",
                year: 2013,
            },
        ],
    },
    {
        saga: "Ocean's Eleven - Fate il vostro gioco",
        films: [
            {
                it: "Ocean's Eleven - Fate il vostro gioco",
                original: "Ocean's Eleven",
                year: 2001,
            },
        ],
    },
    {
        saga: "Oceania",
        films: [
            {
                it: "Oceania",
                original: "Moana",
                year: 2016,
            },
            {
                it: "Oceania 2",
                original: "Moana 2",
                year: 2024,
            },
        ],
    },
    {
        saga: "Old Boy",
        films: [
            {
                it: "Old Boy",
                original: "올드보이",
                year: 2003,
            },
        ],
    },
    {
        saga: "Old",
        films: [
            {
                it: "Old",
                original: "Old",
                year: 2021,
            },
        ],
    },
    {
        saga: "Oliver & Company",
        films: [
            {
                it: "Oliver & Company",
                original: "Oliver & Company",
                year: 1988,
            },
        ],
    },
    {
        saga: "Oppenheimer",
        films: [
            {
                it: "Oppenheimer",
                original: "Oppenheimer",
                year: 2023,
            },
        ],
    },
    {
        saga: "Pacifi Rim",
        films: [
            {
                it: "Pacifi Rim",
                original: "Pacifi Rim",
                year: 2013,
            },
        ],
    },
    {
        saga: "Perfetti sconosciuti",
        films: [
            {
                it: "Perfetti sconosciuti",
                original: "Perfetti sconosciuti",
                year: 2016,
            },
        ],
    },
    {
        saga: "Phenomenon",
        films: [
            {
                it: "Phenomenon",
                original: "Phenomenon",
                year: 1996,
            },
        ],
    },
    {
        saga: "Pinocchio di Guillermo del Toro",
        films: [
            {
                it: "Pinocchio di Guillermo del Toro",
                original: "Guillermo del Toro's Pinocchio",
                year: 2022,
            },
        ],
    },
    {
        saga: "Piovono polpette",
        films: [
            {
                it: "Piovono polpette",
                original: "Cloudy with a Chance of Meatballs",
                year: 2009,
            },
            {
                it: "Piovono polpette 2 - La rivincita degli avanzi",
                original: "Cloudy with a Chance of Meatballs 2",
                year: 2013,
            },
        ],
    },
    {
        saga: "Pirati dei Caraibi",
        films: [
            {
                it: "Pirati dei Caraibi - La maledizione della prima luna",
                original:
                    "Pirates of the Caribbean: The Curse of the Black Pearl",
                year: 2022,
            },
            {
                it: "Pirati dei Caraibi - La maledizione del forziere fantasma",
                original: "Pirates of the Caribbean: Dead Man's Chest",
                year: 2006,
            },
            {
                it: "Pirati dei Caraibi - Ai confini del mondo",
                original: "Pirates of the Caribbean: At World's End",
                year: 2007,
            },
            {
                it: "Pirati dei Caraibi - Oltre i confini del mare",
                original: "Pirates of the Caribbean: On Stranger Tides",
                year: 2011,
            },
            {
                it: "Pirati dei Caraibi - La vendetta di Salazar",
                original: "Pirates of the Caribbean: Dead Men Tell No Tales",
                year: 2017,
            },
        ],
    },
    {
        saga: "Pomi d'ottone e manici di scopa",
        films: [
            {
                it: "Pomi d'ottone e manici di scopa",
                original: "Bedknobs and Broomsticks",
                year: 1972,
            },
        ],
    },
    {
        saga: "Povere creature",
        films: [
            {
                it: "Povere creature",
                original: "Poor Things",
                year: 2023,
            },
        ],
    },
    {
        saga: "Predator",
        films: [
            {
                it: "Predator",
                original: "Predator",
                year: 1987,
            },
        ],
    },
    {
        saga: "Prisoners",
        films: [
            {
                it: "Prisoners",
                original: "Prisoners",
                year: 2013,
            },
        ],
    },
    {
        saga: "Profumo - Storia di un assassino",
        films: [
            {
                it: "Profumo - Storia di un assassino",
                original: "Perfume: The Story of a Murderer",
                year: 2006,
            },
        ],
    },
    {
        saga: "Prova a prendermi",
        films: [
            {
                it: "Prova a prendermi",
                original: "Catch Me If You Can",
                year: 2002,
            },
        ],
    },
    {
        saga: "Psyco",
        films: [
            {
                it: "Psyco",
                original: "Psyco",
                year: 1960,
            },
        ],
    },
    {
        saga: "Profondo rosso",
        films: [
            {
                it: "Profondo rosso",
                original: "Profondo rosso",
                year: 1975,
            },
        ],
    },
    {
        saga: "Pulp Fiction",
        films: [
            {
                it: "Pulp Fiction",
                original: "Pulp Fiction",
                year: 1994,
            },
        ],
    },
    {
        saga: "Punto di non ritorno",
        films: [
            {
                it: "Punto di non ritorno",
                original: "Event Horizon",
                year: 1997,
            },
        ],
    },
    {
        saga: "Qualcuno volò sul nido del cuculo",
        films: [
            {
                it: "Qualcuno volò sul nido del cuculo",
                original: "Qualcuno volò sul nido del cuculo",
                year: 1975,
            },
        ],
    },
    {
        saga: "Qualunquemente",
        films: [
            {
                it: "Qualunquemente",
                original: "Qualunquemente",
                year: 2011,
            },
        ],
    },
    {
        saga: "Quasi Amici",
        films: [
            {
                it: "Quasi Amici",
                original: "Intouchables",
                year: 2011,
            },
        ],
    },
    {
        saga: "Quei bravi ragazzi",
        films: [
            {
                it: "Quei bravi ragazzi",
                original: "GoodFellas",
                year: 1990,
            },
        ],
    },
    {
        saga: "Quel treno per Yuma",
        films: [
            {
                it: "Quel treno per Yuma",
                original: "3:10 to Yuma",
                year: 2007,
            },
        ],
    },
    {
        saga: "Questione di tempo",
        films: [
            {
                it: "Questione di tempo",
                original: "About Time",
                year: 2013,
            },
        ],
    },
    {
        saga: "Rain Man - L'uomo della pioggia",
        films: [
            {
                it: "Rain Man - L'uomo della pioggia",
                original: "Rain Man",
                year: 1988,
            },
        ],
    },
    {
        saga: "Ratatouille",
        films: [
            {
                it: "Ratatouille",
                original: "Ratatouille",
                year: 2007,
            },
        ],
    },
    {
        saga: "Ready Player One",
        films: [
            {
                it: "Ready Player One",
                original: "Ready Player One",
                year: 2018,
            },
        ],
    },
    {
        saga: "Red Dragon",
        films: [
            {
                it: "Red Dragon",
                original: "Red Dragon",
                year: 2002,
            },
        ],
    },
    {
        saga: "Ricomincio da capo",
        films: [
            {
                it: "Ricomincio da capo",
                original: "Groundhog Day",
                year: 1993,
            },
        ],
    },
    {
        saga: "Ritorno al futuro",
        films: [
            {
                it: "Ritorno al futuro",
                original: "Back to the Future",
                year: 1985,
            },
            {
                it: "Ritorno al futuro - Parte II",
                original: "Back to the Future Part II",
                year: 1989,
            },
            {
                it: "Ritorno al futuro - Parte III",
                original: "Back to the Future Part III",
                year: 1990,
            },
        ],
    },
    {
        saga: "Robin Hood",
        films: [
            {
                it: "Robin Hood",
                original: "Robin Hood",
                year: 1974,
            },
        ],
    },
    {
        saga: "Robots",
        films: [
            {
                it: "Robots",
                original: "Robots",
                year: 2005,
            },
        ],
    },
    {
        saga: "Rush Hour",
        films: [
            {
                it: "Rush Hour - Due mine vaganti",
                original: "Rush Hour",
                year: 2000,
            },
            {
                it: "Rush Hour 2 - Colpo grosso al drago rosso",
                original: "Rush Hour 2",
                year: 2002,
            },
            {
                it: "Rush Hour 3 - Missione Parigi",
                original: "Rush Hour 3",
                year: 2007,
            },
        ],
    },
    {
        saga: "Saw - L'enigmista",
        films: [
            {
                it: "Saw - L'enigmista",
                original: "Saw",
                year: 2004,
            },
        ],
    },
    {
        saga: "Scappa - Get Out",
        films: [
            {
                it: "Scappa - Get Out",
                original: "Get Out",
                year: 2017,
            },
        ],
    },
    {
        saga: "Scarface",
        films: [
            {
                it: "Scarface",
                original: "Scarface",
                year: 1983,
            },
        ],
    },
    {
        saga: "Scary Stories to Tell in the Dark",
        films: [
            {
                it: "Scary Stories to Tell in the Dark",
                original: "Scary Stories to Tell in the Dark",
                year: 2019,
            },
        ],
    },
    {
        saga: "Scemo & più scemo",
        films: [
            {
                it: "Scemo & più scemo",
                original: "Dumb and Dumber",
                year: 1994,
            },
        ],
    },
    {
        saga: "Schindler's List",
        films: [
            {
                it: "Schindler's List",
                original: "Schindler's List",
                year: 1993,
            },
        ],
    },
    {
        saga: "Scooby-Doo",
        films: [
            {
                it: "Scooby-Doo",
                original: "Scooby-Doo",
                year: 2002,
            },
        ],
    },
    {
        saga: "Se mi lasci ti cancello",
        films: [
            {
                it: "Se mi lasci ti cancello",
                original: "Eternal Sunshine of the Spotless Mind",
                year: 2004,
            },
        ],
    },
    {
        saga: "Segnali dal futuro",
        films: [
            {
                it: "Segnali dal futuro",
                original: "Knowing",
                year: 2009,
            },
        ],
    },
    {
        saga: "Seven",
        films: [
            {
                it: "Seven",
                original: "Se7en",
                year: 1995,
            },
        ],
    },
    {
        saga: "Sfera",
        films: [
            {
                it: "Sfera",
                original: "Sphere",
                year: 1998,
            },
        ],
    },
    {
        saga: "Shark Tale",
        films: [
            {
                it: "Shark Tale",
                original: "Shark Tale",
                year: 2005,
            },
        ],
    },
    {
        saga: "Sherlok Holmes",
        films: [
            {
                it: "Sherlok Holmes",
                original: "Sherlok Holmes",
                year: 2009,
            },
            {
                it: "Sherlock Holmes - Gioco di ombre",
                original: "Sherlock Holmes: A Game of Shadows",
                year: 2011,
            },
        ],
    },

    {
        saga: "Shining",
        films: [
            {
                it: "Shining",
                original: "The Shining",
                year: 1980,
            },
            {
                it: "Doctor Sleep",
                original: "Doctor Sleep",
                year: 2019,
            },
        ],
    },
    {
        saga: "Shrek",
        films: [
            {
                it: "Shrek",
                original: "Shrek",
                year: 2001,
            },
            {
                it: "Shrek 2",
                original: "Shrek 2",
                year: 2004,
            },
            {
                it: "Shrek terzo",
                original: "Shrek The Third",
                year: 2007,
            },
            {
                it: "Shrek e vissero felici e contenti",
                original: "Shrek Forever After",
                year: 2010,
            },
        ],
    },
    {
        saga: "Shutter Island",
        films: [
            {
                it: "Shutter Island",
                original: "Shutter Island",
                year: 2010,
            },
        ],
    },
    {
        saga: "Signs",
        films: [
            {
                it: "Signs",
                original: "Signs",
                year: 2002,
            },
        ],
    },
    {
        saga: "Sinbad",
        films: [
            {
                it: "Sinbad - La leggenda dei sette mari",
                original: "Sinbad: Legend of the Seven Seas",
                year: 2003,
            },
        ],
    },
    {
        saga: "Sinister",
        films: [
            {
                it: "Sinister",
                original: "Sinister",
                year: 2013,
            },
        ],
    },
    {
        saga: "Sky High",
        films: [
            {
                it: "Sky High - Scuola di superpoteri",
                original: "Sky High",
                year: 2005,
            },
        ],
    },
    {
        saga: "Smetto quando voglio",
        films: [
            {
                it: "Smetto quando voglio",
                original: "Smetto quando voglio",
                year: 2014,
            },
            {
                it: "Smetto quando voglio",
                original: "Smetto quando voglio - Ad honorem",
                year: 2017,
            },
            {
                it: "Smetto quando voglio - Masterclass",
                original: "Smetto quando voglio - Masterclass",
                year: 2017,
            },
        ],
    },
    {
        saga: "Snowpiercer",
        films: [
            {
                it: "Snowpiercer",
                original: "설국열차",
                year: 2014,
            },
        ],
    },
    {
        saga: "Sopravvissuto - The Martian",
        films: [
            {
                it: "Sopravvissuto - The Martian",
                original: "The Martian",
                year: 2015,
            },
        ],
    },
    {
        saga: "Soul",
        films: [
            {
                it: "Soul",
                original: "Soul",
                year: 2020,
            },
        ],
    },
    {
        saga: "Source Code",
        films: [
            {
                it: "Source Code",
                original: "Source Code",
                year: 2011,
            },
        ],
    },
    {
        saga: "Space Jam",
        films: [
            {
                it: "Space Jam",
                original: "Space Jam",
                year: 1997,
            },
        ],
    },
    {
        saga: "Speak No Evil",
        films: [
            {
                it: "Speak No Evil",
                original: "Speak No Evil",
                year: 2022,
            },
        ],
    },
    {
        saga: "Speed",
        films: [
            {
                it: "Speed",
                original: "Speed",
                year: 1994,
            },
        ],
    },
    {
        saga: "Spider-Man",
        films: [
            {
                it: "Spider-Man",
                original: "Spider-Man",
                year: 2002,
            },
            {
                it: "Spider-Man 2",
                original: "Spider-Man 2",
                year: 2004,
            },
            {
                it: "Spider-Man 3",
                original: "Spider-Man 3",
                year: 2007,
            },
        ],
    },
    {
        saga: "Spiderwick",
        films: [
            {
                it: "Spiderwick - Le cronache",
                original: "The Spiderwick Chronicles",
                year: 2008,
            },
        ],
    },
    {
        saga: "Spirit - Cavallo selvaggio",
        films: [
            {
                it: "Spirit - Cavallo selvaggio",
                original: "Spirit: Stallion of the Cimarron",
                year: 2002,
            },
        ],
    },
    {
        saga: "Splice",
        films: [
            {
                it: "Splice",
                original: "Splice",
                year: 2010,
            },
        ],
    },
    {
        saga: "Split",
        films: [
            {
                it: "Split",
                original: "Split",
                year: 2017,
            },
        ],
    },
    {
        saga: "SpongeBob - Il film",
        films: [
            {
                it: "SpongeBob - Il film",
                original: "The SpongeBob SquarePants Movie",
                year: 2005,
            },
        ],
    },
    {
        saga: "Star Wars",
        films: [
            {
                it: "Guerre stellari",
                original: "Star Wars: Episode IV - A New Hope",
                year: 1977,
            },
            {
                it: "L'Impero colpisce ancora",
                original: "Star Wars: Episode V - The Empire Strikes Back",
                year: 1980,
            },
            {
                it: "Il ritorno dello Jedi",
                original: "Star Wars: Episode VI - Return of the Jedi",
                year: 1983,
            },
            {
                it: "Star Wars: Episodio I - La minaccia fantasma",
                original: "Star Wars: Episode I - The Phantom Menace",
                year: 1999,
            },
            {
                it: "Star Wars: Episodio II - L'attacco dei cloni",
                original: "Star Wars: Episode II - Attack of the Clones",
                year: 2002,
            },
            {
                it: "Star Wars: Episodio III - La vendetta dei Sith",
                original: "Star Wars: Episode III - Revenge of the Sith",
                year: 2005,
            },
            {
                it: "Star Wars: Il risveglio della Forza ",
                original: "Star Wars: The Force Awakens",
                year: 2015,
            },
            {
                it: "Star Wars: Gli ultimi Jedi",
                original: "Star Wars: The Last Jedi",
                year: 2017,
            },
            {
                it: "Star Wars: L'ascesa di Skywalker",
                original: "Star Wars: The Rise of Skywalker",
                year: 2019,
            },
        ],
    },
    {
        saga: "Star Trek",
        films: [
            {
                it: "Star Trek",
                original: "Star Trek",
                year: 1966,
            },
        ],
    },
    {
        saga: "Stuart Little",
        films: [
            {
                it: "Stuart Little - Un topolino in gamba",
                original: "Stuart Little",
                year: 2000,
            },
        ],
    },
    {
        saga: "Sweeney Todd",
        films: [
            {
                it: "Sweeney Todd - Il diabolico barbiere di Fleet Street",
                original: "Sweeney Todd: The Demon Barber of Fleet Street",
                year: 2007,
            },
        ],
    },
    {
        saga: "Swiss Army Man",
        films: [
            {
                it: "Swiss Army Man - Un amico multiuso",
                original: "Swiss Army Man",
                year: 2016,
            },
        ],
    },
    {
        saga: "Taken - Io vi troverò",
        films: [
            {
                it: "Taken - Io vi troverò",
                original: "Taken",
                year: 2008,
            },
            {
                it: "Taken - La vendett",
                original: "Taken 2",
                year: 2012,
            },
            {
                it: "Taken 3 - L'ora della verit",
                original: "Taken 3",
                year: 2015,
            },
        ],
    },
    {
        saga: "Talk to Me",
        films: [
            {
                it: "Talk to Me",
                original: "Talk to Me",
                year: 2023,
            },
        ],
    },
    {
        saga: "Taron e la pentola magica",
        films: [
            {
                it: "Taron e la pentola magica",
                original: "The Black Cauldron",
                year: 1985,
            },
        ],
    },
    {
        saga: "Taxi Driver",
        films: [
            {
                it: "Taxi Driver",
                original: "Taxi Driver",
                year: 1976,
            },
        ],
    },
    {
        saga: "Terminator",
        films: [
            {
                it: "Terminator",
                original: "The Terminator",
                year: 1984,
            },
            {
                it: "Terminator 2 - Il giorno del giudizio",
                original: "Terminator 2: Judgment Day",
                year: 1991,
            },
            {
                it: "Terminator 3 - Le macchine ribelli",
                original: "Terminator 3: Rise of the Machines",
                year: 2004,
            },
            {
                it: "Terminator - Destino oscuro",
                original: "Terminator: Dark Fate",
                year: 2004,
            },
        ],
    },
    {
        saga: "Terrore dallo spazio profondo",
        films: [
            {
                it: "Terrore dallo spazio profondo",
                original: "Invasion of the Body Snatchers",
                year: 1978,
            },
        ],
    },
    {
        saga: "The Blues Brothers",
        films: [
            {
                it: "The Blues Brothers - I fratelli Blues",
                original: "The Blues Brothers",
                year: 1980,
            },
        ],
    },
    {
        saga: "The Day After Tomorrow - L'alba del giorno dopo",
        films: [
            {
                it: "The Day After Tomorrow - L'alba del giorno dopo",
                original: "The Day After Tomorrow",
                year: 2004,
            },
        ],
    },
    {
        saga: "The Departed",
        films: [
            {
                it: "The Departed - Il bene e il male",
                original: "The Departed",
                year: 2006,
            },
        ],
    },
    {
        saga: "The Game - Nessuna regola",
        films: [
            {
                it: "The Game - Nessuna regola",
                original: "The Game",
                year: 1998,
            },
        ],
    },
    {
        saga: "The Gentlemen",
        films: [
            {
                it: "The Gentlemen",
                original: "The Gentlemen",
                year: 2020,
            },
        ],
    },
    {
        saga: "The Greatest Showman",
        films: [
            {
                it: "The Greatest Showman",
                original: "The Greatest Showman",
                year: 2017,
            },
        ],
    },
    {
        saga: "The Guilty",
        films: [
            {
                it: "The Guilty",
                original: "The Guilty",
                year: 2021,
            },
        ],
    },
    {
        saga: "The Help",
        films: [
            {
                it: "The Help",
                original: "The Help",
                year: 2012,
            },
        ],
    },
    {
        saga: "The Hateful Eight",
        films: [
            {
                it: "The Hateful Eight",
                original: "The Hateful Eight",
                year: 2015,
            },
        ],
    },
    {
        saga: "The Imitation Game",
        films: [
            {
                it: "The Imitation Game",
                original: "The Imitation Game",
                year: 2014,
            },
        ],
    },
    {
        saga: "The Irishman",
        films: [
            {
                it: "The Irishman",
                original: "The Irishman",
                year: 2019,
            },
        ],
    },
    {
        saga: "The Lego Movie",
        films: [
            {
                it: "The Lego Movie",
                original: "The Lego Movie",
                year: 2014,
            },
        ],
    },
    {
        saga: "The Librarian",
        films: [
            {
                it: "The Librarian - Alla ricerca della lancia perduta",
                original: "The Librarian: Quest for the Spear",
                year: 2008,
            },
            {
                it: "The Librarian 2 - Ritorno alle miniere di Re Salomone",
                original: "The Librarian: Return to King Solomon's Mines",
                year: 2006,
            },
            {
                it: "The Librarian 3 - La maledizione del calice di Giuda",
                original: "The Librarian: The Curse of the Judas Chalice",
                year: 2009,
            },
        ],
    },
    {
        saga: "The Majestic",
        films: [
            {
                it: "The Majestic",
                original: "The Majestic",
                year: 2002,
            },
        ],
    },
    {
        saga: "The Mask",
        films: [
            {
                it: "The Mask: Da zero a mito",
                original: "The Mask",
                year: 2004,
            },
        ],
    },
    {
        saga: "The Menu",
        films: [
            {
                it: "The Menu",
                original: "The Menu",
                year: 2022,
            },
        ],
    },
    {
        saga: "The Mist",
        films: [
            {
                it: "The Mist",
                original: "The Mist",
                year: 2008,
            },
        ],
    },
    {
        saga: "The Net",
        films: [
            {
                it: "The Net - Intrappolata nella rete",
                original: "The Net",
                year: 1996,
            },
        ],
    },
    {
        saga: "The Prestige",
        films: [
            {
                it: "The Prestige",
                original: "The Prestige",
                year: 2006,
            },
        ],
    },
    {
        saga: "The Social Network",
        films: [
            {
                it: "The Social Network",
                original: "The Social Network",
                year: 2010,
            },
        ],
    },
    {
        saga: "The Substance",
        films: [
            {
                it: "The Substance",
                original: "The Substance",
                year: 2024,
            },
        ],
    },
    {
        saga: "The Terminal",
        films: [
            {
                it: "The Terminal",
                original: "The Terminal",
                year: 2004,
            },
        ],
    },
    {
        saga: "The Time Machine",
        films: [
            {
                it: "The Time Machine",
                original: "The Time Machine",
                year: 2002,
            },
        ],
    },
    {
        saga: "The Truman Show",
        films: [
            {
                it: "The Truman Show",
                original: "The Truman Show",
                year: 1998,
            },
        ],
    },
    {
        saga: "The Village",
        films: [
            {
                it: "The Village",
                original: "The Village",
                year: 2004,
            },
        ],
    },
    {
        saga: "The Visit",
        films: [
            {
                it: "The Visit",
                original: "The Visit",
                year: 2015,
                tmdb_id: 298312,
            },
        ],
    },
    {
        saga: "The Witch",
        films: [
            {
                it: "The Witch",
                original: "The Witch",
                year: 2016,
            },
        ],
    },
    {
        saga: "The Wolf of Wall Street",
        films: [
            {
                it: "The Wolf of Wall Street",
                original: "The Wolf of Wall Street",
                year: 2013,
            },
        ],
    },
    {
        saga: "Titanic",
        films: [
            {
                it: "Titanic",
                original: "Titanic",
                year: 1998,
            },
        ],
    },
    {
        saga: "Top Gun",
        films: [
            {
                it: "Top Gun",
                original: "Top Gun",
                year: 1986,
            },
            {
                it: "Top Gun: Maverick",
                original: "Top Gun: Maverick",
                year: 2022,
            },
        ],
    },
    {
        saga: "Totò Sapore e la magica storia della pizza",
        films: [
            {
                it: "Totò Sapore e la magica storia della pizza",
                original: "Totò Sapore e la magica storia della pizza",
                year: 2003,
            },
        ],
    },
    {
        saga: "Tower Heist",
        films: [
            {
                it: "Tower Heist - Colpo ad alto livello",
                original: "Tower Heist",
                year: 2011,
            },
        ],
    },
    {
        saga: "Toy Story",
        films: [
            {
                it: "Toy Story - Il mondo dei giocattoli",
                original: "Toy Story",
                year: 1996,
            },
            {
                it: "Toy Story 2 - Woody & Buzz alla riscossa",
                original: "Toy Story 2",
                year: 2000,
            },
            {
                it: "Toy Story 3 - La grande fuga",
                original: "Toy Story 3",
                year: 2010,
            },
        ],
    },
    {
        saga: "Training Day",
        films: [
            {
                it: "Training Day",
                original: "Training Day",
                year: 2001,
            },
        ],
    },
    {
        saga: "Trappola di cristallo",
        films: [
            {
                it: "Trappola di cristallo",
                original: "Die Hard",
                year: 1988,
            },
        ],
    },
    {
        saga: "Tre uomini e una gamba",
        films: [
            {
                it: "Tre uomini e una gamba",
                original: "Tre uomini e una gamba",
                year: 1997,
            },
        ],
    },
    {
        saga: "Tremors",
        films: [
            {
                it: "Tremors",
                original: "Tremors",
                year: 1990,
            },
            {
                it: "Tremors 2 - Aftershocks",
                original: "Tremors 2: Aftershocks",
                year: 1996,
            },
            {
                it: "Tremors 3 - Ritorno a Perfection",
                original: "Tremors 3: Back to Perfection",
                year: 1990,
            },
        ],
    },
    {
        saga: "Tu la conosci Claudia?",
        films: [
            {
                it: "Tu la conosci Claudia?",
                original: "Tu la conosci Claudia?",
                year: 2004,
            },
        ],
    },
    {
        saga: "Ultimatum alla Terra",
        films: [
            {
                it: "Ultimatum alla Terra",
                original: "The Day the Earth Stood Still",
                year: 2008,
            },
        ],
    },
    {
        saga: "Un ponte per Terabithia",
        films: [
            {
                it: "Un ponte per Terabithia",
                original: "Bridge to Terabithia)",
                year: 2007,
            },
        ],
    },
    {
        saga: "Un giorno di ordinaria follia",
        films: [
            {
                it: "Un giorno di ordinaria follia",
                original: "Falling Down",
                year: 1993,
            },
        ],
    },
    {
        saga: "Un uomo qualunque",
        films: [
            {
                it: "Un uomo qualunque",
                original: "He Was a Quiet Man",
                year: 2008,
            },
        ],
    },
    {
        saga: "Un'impresa da Dio",
        films: [
            {
                it: "Un'impresa da Dio",
                original: "Evan Almighty",
                year: 2007,
            },
        ],
    },
    {
        saga: "Una famiglia vincente - King Richard",
        films: [
            {
                it: "Una famiglia vincente - King Richard",
                original: "King Richard",
                year: 2022,
            },
        ],
    },
    {
        saga: "Una notte al museo",
        films: [
            {
                it: "Una notte al museo",
                original: "Night at the Museum",
                year: 2007,
            },
            {
                it: "Una notte al museo 2 - La fuga",
                original: "Night at the Museum: Battle of the Smithsonian",
                year: 2009,
            },
            {
                it: "Una notte al museo 3 - Il segreto del faraone",
                original: "Night at the Museum: Secret of the Tomb",
                year: 2015,
            },
        ],
    },
    {
        saga: "Una notte da leoni",
        films: [
            {
                it: "Una notte da leoni",
                original: "The Hangover",
                year: 2009,
            },
            {
                it: "Una notte da leoni 2",
                original: "The Hangover Part II",
                year: 2011,
            },
            {
                it: "Una notte da leoni 3",
                original: "The Hangover Part III",
                year: 2013,
            },
        ],
    },
    {
        saga: "Una pallottola spuntata",
        films: [
            {
                it: "Una pallottola spuntata",
                original: "The Naked Gun: From the Files of Police Squad!",
                year: 1989,
            },
            {
                it: "Una pallottola spuntata 2½ - L'odore della paura",
                original: "The Naked Gun 2½: The Smell of Fear",
                year: 1991,
            },
            {
                it: "Una pallottola spuntata 33⅓ - L'insulto finale",
                original: "Naked Gun 33⅓: The Final Insult",
                year: 1994,
            },
        ],
    },
    {
        saga: "Una poltrona per due",
        films: [
            {
                it: "Una poltrona per due",
                original: "Trading Places",
                year: 1984,
            },
        ],
    },
    {
        saga: "Una settimana da Dio",
        films: [
            {
                it: "Una settimana da Dio",
                original: "Bruce Almighty",
                year: 2003,
            },
        ],
    },
    {
        saga: "Unbreakable",
        films: [
            {
                it: "Unbreakable - Il predestinato",
                original: "Unbreakable",
                year: 2000,
            },
        ],
    },
    {
        saga: "Up",
        films: [
            {
                it: "Up",
                original: "Up",
                year: 2009,
            },
        ],
    },
    {
        saga: "V per Vendetta",
        films: [
            {
                it: "V per Vendetta",
                original: "V for Vendetta",
                year: 2006,
            },
        ],
    },
    {
        saga: "Van Helsing",
        films: [
            {
                it: "Van Helsing",
                original: "Van Helsing",
                year: 2004,
            },
        ],
    },
    {
        saga: "Venerdì 13",
        films: [
            {
                it: "Venerdì 13",
                original: "Friday the 13th",
                year: 1980,
            },
        ],
    },
    {
        saga: "Journey",
        films: [
            {
                it: "Viaggio al centro della Terra",
                original: "Journey to the Center of the Earth",
                year: 2008,
            },
            {
                it: "Viaggio nell'isola misteriosa",
                original: "Journey 2: The Mysterious Island",
                year: 2012,
            },
        ],
    },
    {
        saga: "Virus letale",
        films: [
            {
                it: "Virus letale",
                original: "Outbreak",
                year: 1995,
            },
        ],
    },
    {
        saga: "Vita di Pi",
        films: [
            {
                it: "Vita di Pi",
                original: "Life of Pi",
                year: 2012,
            },
        ],
    },
    {
        saga: "WALL•E",
        films: [
            {
                it: "WALL•E",
                original: "WALL•E",
                year: 2008,
            },
        ],
    },
    {
        saga: "What Women Want - Quello che le donne vogliono",
        films: [
            {
                it: "What Women Want - Quello che le donne vogliono",
                original: "What Women Want",
                year: 2001,
            },
        ],
    },
    {
        saga: "Whiplash",
        films: [
            {
                it: "Whiplash",
                original: "Whiplash",
                year: 2014,
            },
        ],
    },
    {
        saga: "White Chicks",
        films: [
            {
                it: "White Chicks",
                original: "White Chicks",
                year: 2004,
            },
        ],
    },
    {
        saga: "Wicked",
        films: [
            {
                it: "Wicked",
                original: "Wicked",
                year: 2024,
            },
            {
                it: "Wicked - Parte 2",
                original: "Wicked: For Good",
                year: 2025,
            },
        ],
    },
    {
        saga: "Will Hunting - Genio ribelle",
        films: [
            {
                it: "Will Hunting - Genio ribelle",
                original: "Good Will Hunting",
                year: 1997,
            },
        ],
    },
    {
        saga: "World War Z",
        films: [
            {
                it: "World War Z",
                original: "World War Z",
                year: 2013,
            },
        ],
    },
    {
        saga: "X-Men",
        films: [
            {
                it: "X-Men",
                original: "X-Men",
                year: 2000,
            },
            {
                it: "X-Men 2",
                original: "X2",
                year: 2003,
            },
            {
                it: "X-Men - Conflitto finale",
                original: "X-Men: The Last Stand",
                year: 2006,
            },
        ],
    },
    {
        saga: "Yes Man",
        films: [
            {
                it: "Yes Man",
                original: "Yes Man",
                year: 2008,
            },
        ],
    },
    {
        saga: "Zodiac",
        films: [
            {
                it: "Zodiac",
                original: "Zodiac",
                year: 2007,
            },
        ],
    },
    {
        saga: "Zoolander",
        films: [
            {
                it: "Zoolander",
                original: "Zoolander",
                year: 2002,
            },
            {
                it: "Zoolander 2",
                original: "Zoolander 2",
                year: 2016,
            },
        ],
    },
    {
        saga: "Zootropolis",
        films: [
            {
                it: "Zootropolis",
                original: "Zootopia",
                year: 2016,
            },
        ],
    },
];

// TODO: BADGE CULT

// API key per accedere a TMDb API
const apiKey = "4e4dcff717724b5b605bbb9f0438a391";
// URL base per le chiamate all'API di TMDb
const baseUrl = "https://api.themoviedb.org/3";
// Chiave per salvare lo stato dei film visti nel localStorage
const SEEN_KEY = "movieSeenStatus";

// Mappa per memorizzare i generi cinematografici
let genreMap = {};
// Array per memorizzare i film locali
let localMovies = [];
// Oggetto per memorizzare i metadati dei film
let movieMetadata = {};
// Mappa per tenere traccia dei film visti/dav vedere
let seenMap = loadSeenMap();
// Timeout per la ricerca
let searchTimeout = null;

// Numero massimo di chiamate API simultanee
const MAX_CONCURRENT_REQUESTS = 5;
// Ritardo tra batch di richieste in ms
const REQUEST_DELAY = 200;

// Indici per il virtual scrolling
let visibleStart = 0;
let visibleEnd = 30; // Mostra 30 film alla volta
const batchSize = 30; // Dimensione del batch per il caricamento infinito

// Array di messaggi divertenti da mostrare durante il caricamento
const loadingMessages = [
    "Preparando i popcorn...",
    "Caricamento... ma senza jump scare, promesso!",
    "Stiamo cercando il telecomando...",
    "Un attimo, il gatto ha mangiato la pellicola...",
    "Ricordati di respirare durante le scene intense!",
    "Stiamo aggiungendo effetti speciali...",
    "Caricamento più lento di un horror anni '80...",
    "Ci siamo quasi, non abbandonare la sala!",
    "Stiamo controllando che non ci siano errori di continuity...",
    "Stiamo rendendo questo caricamento più epico di un finale di Christopher Nolan...",
    "Caricamento più lento di uno slow-motion di Zack Snyder...",
    "Un attimo, il buffering sta mangiando i nostri Oscar!",
    "Stiamo cercando di superare il test di Bechdel...",
    "‘Mi dispiace, Dave. Non posso caricare così in fretta.’ (Cit.)",
    "Sembra un piano del Joker, ma è solo il caricamento...",
    "Stiamo rimuovendo le CGI dei baffi...",
    "Stiamo aggiungendo una colonna sonora di Hans Zimmer...",
    "Se il caricamento fosse un genere, sarebbe ‘thriller psicologico’... ",
    "Nessun film è stato danneggiato durante questo caricamento.",
    "Stiamo evitando i cliché... ma il caricamento è inevitabile.",
    "‘Caricare o non caricare?’ - Shakespeare (mi sembra)",
    "Se il caricamento fosse un personaggio, sarebbe Jar Jar Binks... ma cerchiamo di migliorare!",
    "Caricamento più misterioso del significato di ‘Inception’...",
    "‘May the loading be with you.’",
    "Ops, il nostro assistente di regia si è addormentato!",
];

async function processWithConcurrency(
    items,
    processFn,
    concurrency = MAX_CONCURRENT_REQUESTS
) {
    const results = [];
    const queue = [...items];

    async function processQueue() {
        while (queue.length) {
            const item = queue.shift();
            try {
                const result = await processFn(item);
                results.push(result);
            } catch (error) {
                console.error("Error processing item:", item, error);
                results.push(null);
            }
        }
    }

    // Avvia i processi concorrenti
    const workers = Array(concurrency).fill().map(processQueue);
    await Promise.all(workers);

    return results.filter((item) => item !== null);
}

/**
 * Recupera i dati completi di un film da TMDb API
 * @param {Object} params - Parametri per la ricerca del film
 * @param {string} params.title - Titolo del film
 * @param {number} params.year - Anno di uscita
 * @param {number} params.movieId - ID del film su TMDb
 * @returns {Promise<Object|null>} Dettagli completi del film o null se non trovato
 */
async function fetchFullMovieData({ title, year, movieId }) {
    try {
        let movie;

        if (movieId) {
            // Se ha l'ID, fa direttamente le chiamate per dettagli e cast
            const detailsResponse = await fetch(
                `${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=it`
            );
            const detailsData = await detailsResponse.json();

            const creditsResponse = await fetch(
                `${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}&language=it`
            );
            const creditsData = await creditsResponse.json();

            // Estrae il cast (primi 10 attori)
            const allCast =
                creditsData.cast?.slice(0, 10).map((actor) => actor.name) || [];
            // Trova il regista
            const director =
                creditsData.crew?.find((member) => member.job === "Director")
                    ?.name || null;

            // Ritorna un oggetto con tutti i dettagli combinati
            return {
                ...detailsData,
                cast: allCast.slice(0, 10).join(", "),
                cast_full: allCast,
                cast_string: allCast.join(", "),
                director,
                original_year: detailsData.release_date
                    ? new Date(detailsData.release_date).getFullYear()
                    : null,
            };
        } else if (title) {
            // Se ha solo il titolo, prima carca il film
            const searchUrl = `${baseUrl}/search/movie?api_key=${apiKey}&language=it&query=${encodeURIComponent(
                title
            )}${year ? `&year=${year}` : ""}`;
            const searchResponse = await fetch(searchUrl);
            const searchData = await searchResponse.json();

            movie = searchData.results?.[0];

            // Se non trova con l'anno, riprova senza
            if (!movie && year) {
                const fallbackUrl = `${baseUrl}/search/movie?api_key=${apiKey}&language=it&query=${encodeURIComponent(
                    title
                )}`;
                const fallbackResponse = await fetch(fallbackUrl);
                const fallbackData = await fallbackResponse.json();
                movie = fallbackData.results?.[0];
            }

            if (movie) {
                // Se trova il film, recupera dettagli e cast
                const detailsResponse = await fetch(
                    `${baseUrl}/movie/${movie.id}?api_key=${apiKey}&language=it`
                );
                const detailsData = await detailsResponse.json();

                const creditsResponse = await fetch(
                    `${baseUrl}/movie/${movie.id}/credits?api_key=${apiKey}&language=it`
                );
                const creditsData = await creditsResponse.json();

                const allCast =
                    creditsData.cast?.slice(0, 10).map((actor) => actor.name) ||
                    [];
                const director =
                    creditsData.crew?.find(
                        (member) => member.job === "Director"
                    )?.name || null;

                return {
                    ...movie,
                    runtime: detailsData.runtime,
                    cast: allCast.slice(0, 10).join(", "),
                    cast_full: allCast,
                    cast_string: allCast.join(", "),
                    director,
                    original_year: detailsData.release_date
                        ? new Date(detailsData.release_date).getFullYear()
                        : year,
                };
            }
        }

        return null;
    } catch (error) {
        console.error("Errore nel recupero dei dati completi del film:", error);
        return null;
    }
}

/**
 * Recupera la lista dei generi da TMDb
 */
async function fetchGenres() {
    try {
        const response = await fetch(
            `${baseUrl}/genre/movie/list?api_key=${apiKey}&language=it`
        );
        const data = await response.json();

        if (data.genres) {
            // Trasforma l'array dei generi in una mappa ID -> Nome
            genreMap = data.genres.reduce((acc, genre) => {
                acc[genre.id] = genre.name;
                return acc;
            }, {});
        }
    } catch (error) {
        console.error("Errore nel recupero dei generi:", error);
    }
}

/**
 * Crea una card HTML per un film
 * @param {Object} movie - Dettagli del film
 * @returns {HTMLElement} Elemento HTML della card
 */
function createMovieCard(movie) {
    // Template della card con interpolazione delle proprietà del film
    const cardTemplate = `
    <div class="card-wrapper">
        <!-- Pulsante per segnare come visto/non visto -->
        <button class="button-seen ${seenMap[movie.id] ? "seen" : ""}">
            <i class="fa-solid ${
                seenMap[movie.id] ? "fa-eye" : "fa-eye-slash"
            }"></i>
        </button>
        
        <!-- Contenuto principale della card -->
        <div class="card-content">
            <!-- Copertina del film con spinner di caricamento -->
            <div class="card-poster">
                <div class="loading-spinner"></div>
                <img loading="lazy"
                    src="${
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "placeholder.webp"
                    }"
                    alt="${movie.title || "Film"}">
            </div>
            
            <!-- Overlay che appare al hover -->
            <div class="card-overlay">
                <div class="overlay-content">
                    <div class="details">
                        <!-- Generi del film -->
                        ${
                            movie.genre_ids && movie.genre_ids.length > 0
                                ? `<p class="genre">${movie.genre_ids
                                      .map(
                                          (id) =>
                                              genreMap[id] ||
                                              "Genere sconosciuto"
                                      )
                                      .join(", ")}</p>`
                                : ""
                        }
                        
                        <!-- Cast del film -->
                        <p class="cast"><strong>Cast:</strong> ${
                            movie.cast || "Caricamento..."
                        }</p>
                        
                        <!-- Regista -->
                        <p class="director"><strong>Regia:</strong> ${
                            movie.director || "-"
                        }</p>
                        
                        <!-- Metadati (anno e durata) -->
                        <div class="meta-info">
                            ${
                                movie.release_date
                                    ? `<span>${new Date(
                                          movie.release_date
                                      ).getFullYear()}</span>`
                                    : ""
                            }
                            ${
                                movie.release_date && movie.runtime
                                    ? `<span> - </span>`
                                    : ""
                            }
                            ${
                                movie.runtime && movie.runtime > 0
                                    ? `<span>${Math.floor(
                                          movie.runtime / 60
                                      )}h ${movie.runtime % 60}m</span>`
                                    : "<span>Durata non disponibile</span>"
                            }
                        </div>
                    </div>
                    
                    <!-- Trama del film -->
                    <div class="overlay-plot">
                        <strong>Trama</strong>
                        <div class="plot-text">${
                            movie.overview || "Non disponibile"
                        }</div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Titolo del film -->
        <h3 class="card-title">${
            movie.title_it || movie.title || "Titolo non disponibile"
        }</h3>

        <!-- Modale per la visualizzazione mobile -->
        <div class="modal-mobile">
            <div class="modal-content">
                <button class="modal-close"><i class="fas fa-times"></i></button>
                <div class="modal-header">
                    <img loading="lazy" class="modal-poster" src="${
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "placeholder.webp"
                    }" alt="${movie.title || "Film"}">
                    <div class="modal-header-info">
                        <h2 class="modal-title">${
                            movie.title_it ||
                            movie.title ||
                            "Titolo non disponibile"
                        }</h2>
                        <p class="modal-director"><strong>Regia:</strong> ${
                            movie.director || "Non disponibile"
                        }</p>
                        <p class="modal-meta">
                            ${
                                movie.release_date
                                    ? `${new Date(
                                          movie.release_date
                                      ).getFullYear()}`
                                    : ""
                            }
                            ${
                                movie.runtime && movie.runtime > 0
                                    ? ` • ${Math.floor(movie.runtime / 60)}h ${
                                          movie.runtime % 60
                                      }m`
                                    : ""
                            }
                        </p>
                        <button class="modal-button-seen ${
                            seenMap[movie.id] ? "seen" : ""
                        }">
                            <i class="fa-solid ${
                                seenMap[movie.id] ? "fa-eye" : "fa-eye-slash"
                            }"></i>
                        </button>
                    </div>
                </div>
                <div class="modal-body">
                    ${
                        movie.genre_ids && movie.genre_ids.length > 0
                            ? `<p class="modal-genre"><strong>Genere:</strong> ${movie.genre_ids
                                  .map(
                                      (id) =>
                                          genreMap[id] || "Genere sconosciuto"
                                  )
                                  .join(", ")}</p>`
                            : ""
                    }
                    <p class="modal-cast"><strong>Cast:</strong> ${
                        movie.cast_full?.join(", ") || "Non disponibile"
                    }</p>
                    <div class="modal-plot">
                        <strong>Trama</strong>
                        <div class="modal-plot-text">${
                            movie.overview || "Non disponibile"
                        }</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    // Crea un elemento DOM dal template
    const template = document.createElement("template");
    template.innerHTML = cardTemplate.trim();
    const card = template.content.firstChild;

    // Gestione del caricamento dell'immagine
    const img = card.querySelector(".card-poster img");
    const spinner = card.querySelector(".loading-spinner");

    img.addEventListener("load", () => {
        spinner.style.display = "none";
        img.parentElement.classList.add("loaded");
    });

    img.addEventListener("error", () => {
        img.src = "placeholder.webp";
        spinner.style.display = "none";
        img.parentElement.classList.add("loaded");
    });

    // Aggiunge gestori eventi per i pulsanti "visto/non visto"
    const modalSeenBtn = card.querySelector(".modal-button-seen");
    modalSeenBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleSeen(movie.id);

        // Aggiorna entrambi i pulsanti
        seenBtn.classList.toggle("seen");
        modalSeenBtn.classList.toggle("seen");

        // Aggiorna le icone
        const icon = seenMap[movie.id] ? "fa-eye" : "fa-eye-slash";
        seenBtn.innerHTML = `<i class="fa-solid ${icon}"></i>`;
        modalSeenBtn.innerHTML = `<i class="fa-solid ${icon}"></i>`;
    });

    const seenBtn = card.querySelector(".button-seen");
    seenBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleSeen(movie.id);
        seenBtn.classList.toggle("seen");
        seenBtn.innerHTML = seenMap[movie.id]
            ? '<i class="fa-solid fa-eye"></i>'
            : '<i class="fa-solid fa-eye-slash"></i>';
    });

    // Gestione del modale per mobile
    if (window.innerWidth <= 768) {
        const cardContent = card.querySelector(".card-content");
        const modal = card.querySelector(".modal-mobile");
        const closeBtn = modal.querySelector(".modal-close");

        // Chiude il modale cliccando fuori
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
                document.body.style.overflow = "auto";
            }
        });

        cardContent.addEventListener("click", () => {
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });

        closeBtn.addEventListener("click", () => {
            modal.classList.add("closing");
            document.body.style.overflow = "auto";

            const content = modal.querySelector(".modal-content");

            content.addEventListener("animationend", function handler() {
                modal.classList.remove("active", "closing");
                content.removeEventListener("animationend", handler);
            });
        });
    }

    return card;
}

/**
 * Restituisce un messaggio di caricamento casuale
 * @returns {string} Messaggio di caricamento
 */
function getRandomLoadingMessage() {
    return loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
}

/**
 * Crea un elemento HTML per i dettagli
 * @param {string} label - Etichetta del dettaglio
 * @param {string} content - Contenuto del dettaglio
 * @returns {HTMLElement} Elemento HTML del dettaglio
 */
function createDetailElement(label, content) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${label}:</strong> ${content}`;
    return p;
}

/**
 * Raggruppa i film per lettera iniziale del titolo
 * @param {Array} movies - Array di film
 * @returns {Object} Oggetto con film raggruppati per lettera iniziale
 */
function groupMoviesByLetter(movies) {
    const grouped = {};

    movies.forEach((movie) => {
        const movieTitle = movie.title_it || movie.title;
        if (!movieTitle) return;

        let firstChar = movieTitle.trim().charAt(0).toUpperCase();

        // Se non è una lettera A-Z, metti sotto "#"
        if (!firstChar.match(/[A-Z]/i)) {
            firstChar = "#";
        }

        if (!grouped[firstChar]) {
            grouped[firstChar] = [];
        }

        grouped[firstChar].push(movie);
    });

    return grouped;
}

/**
 * Mostra i film nel contenitore
 * @param {Array} movies - Array di film da visualizzare
 */
function displayMovies(movies) {
    const movieContainer = document.querySelector(".movie-cards-container");

    // Usa un document fragment per ridurre i reflow del DOM
    const fragment = document.createDocumentFragment();

    if (movies.length === 0) {
        // Messaggio se non ci sono film
        const emptyMsg = document.createElement("p");
        emptyMsg.style.padding = "20px";
        emptyMsg.textContent = "Nessun risultato trovato";
        fragment.appendChild(emptyMsg);
    } else {
        // Ordina i film per titolo
        const sortedMovies = [...movies].sort((a, b) => {
            const titleA = a.title_it || a.title || "";
            const titleB = b.title_it || b.title || "";
            return titleA.localeCompare(titleB, "it", { sensitivity: "base" });
        });

        // Raggruppa i film per lettera iniziale
        const moviesByLetter = groupMoviesByLetter(sortedMovies);

        // Crea una sezione per ogni lettera
        for (const [letter, movies] of Object.entries(moviesByLetter)) {
            const section = document.createElement("div");

            // Aggiunge l'indicatore della lettera
            const letterElement = document.createElement("div");
            letterElement.classList.add("alphabet-letter");
            letterElement.textContent = letter;
            section.appendChild(letterElement);

            // Crea una riga per i film di questa lettera
            const row = document.createElement("div");
            row.classList.add("movies-row");

            // Limita il numero iniziale di film mostrati per lettera
            const moviesToShow = movies.slice(0, 100);

            // Aggiunge le card dei film alla riga
            for (const movie of moviesToShow) {
                const movieCard = createMovieCard(movie);
                row.appendChild(movieCard);
            }

            section.appendChild(row);
            fragment.appendChild(section);
        }
    }

    // Sostituisce tutto il contenuto in un'unica operazione
    movieContainer.innerHTML = "";
    movieContainer.appendChild(fragment);
}

/**
 * Mostra i film con virtual scrolling
 * @param {Array} movies - Array di film da visualizzare
 */
function displayMoviesVirtual(movies) {
    const movieContainer = document.querySelector(".movie-cards-container");
    movieContainer.innerHTML = "";

    // Mostra solo un sottoinsieme di film
    const visibleMovies = movies.slice(visibleStart, visibleEnd);
    displayMovies(visibleMovies);

    // Aggiunge scroll listener per il caricamento infinito
    movieContainer.addEventListener("scroll", () => {
        if (
            movieContainer.scrollTop + movieContainer.clientHeight >=
            movieContainer.scrollHeight - 100
        ) {
            // Carica più film quando si è vicini al fondo
            visibleEnd += batchSize;
            displayMoviesVirtual(movies);
        }
    });
}

/**
 * Carica la mappa dei film visti dal localStorage
 * @returns {Object} Mappa dei film visti
 */
function loadSeenMap() {
    try {
        return JSON.parse(localStorage.getItem(SEEN_KEY)) || {};
    } catch {
        return {};
    }
}

/**
 * Salva la mappa dei film visti nel localStorage
 * @param {Object} map - Mappa dei film visti
 */
function saveSeenMap(map) {
    localStorage.setItem(SEEN_KEY, JSON.stringify(map));
}

/**
 * Cambia lo stato "visto/non visto" di un film
 * @param {number} id - ID del film
 */
function toggleSeen(id) {
    seenMap[id] = !seenMap[id];
    saveSeenMap(seenMap);
}

/**
 * Filtra i film in base al termine di ricerca e allo stato "visto"
 * @param {string} searchTerm - Termine di ricerca
 */
function filterMovies(searchTerm) {
    const filterState =
        document.getElementById("filter-seen")?.dataset.filter || "all";
    const searchTermLower = searchTerm.toLowerCase();

    // Usa requestAnimationFrame per dividere il lavoro e migliorare le prestazioni
    requestAnimationFrame(() => {
        const filtered = localMovies.filter((movie) => {
            // Filtro per stato "visto"
            const isSeen = !!seenMap[movie.id];
            if (filterState === "seen" && !isSeen) return false;
            if (filterState === "to-see" && isSeen) return false;

            // Se non c'è termine di ricerca, mostra tutto
            if (!searchTerm) return true;

            // Crea una stringa concatenata per la ricerca
            const searchableText = [
                movie.title,
                movie.title_it,
                movie.original_title,
                movie.genre_ids?.map((id) => genreMap[id]).join(" "),
                movie.saga,
                movie.cast_string,
                movie.director,
            ]
                .join(" ")
                .toLowerCase();

            return searchableText.includes(searchTermLower);
        });

        displayMovies(filtered);
    });
}

// Inizializza l'applicazione al caricamento della pagina
window.onload = updateMovieList;

// Gestione della ricerca in tempo reale
document.querySelector(".search-input").addEventListener("input", function (e) {
    const searchTerm = e.target.value.trim();

    // Cancella il timeout precedente per evitare chiamate multiple
    clearTimeout(searchTimeout);

    // Imposta un nuovo timeout per la ricerca
    searchTimeout = setTimeout(() => {
        filterMovies(searchTerm);
    }, 300); // 300ms di ritardo
});

// Gestione del pulsante di reset della ricerca
const searchInput = document.querySelector(".search-input");
const searchClear = document.querySelector(".search-clear");

// Mostra/nasconde il pulsante di reset in base al contenuto
searchInput.addEventListener("input", function (e) {
    if (e.target.value.trim().length > 0) {
        searchClear.style.display = "block";
    } else {
        searchClear.style.display = "none";
    }
    filterMovies(e.target.value);
});

// Resetta la ricerca
searchClear.addEventListener("click", function () {
    searchInput.value = "";
    searchClear.style.display = "none";
    filterMovies("");
    searchInput.focus();
});

// Gestione del filtro "visti/non visti"
document.getElementById("filter-seen").addEventListener("click", () => {
    const btn = document.getElementById("filter-seen");
    const states = ["all", "to-see", "seen"];
    const tooltips = {
        all: "Mostra tutti",
        "to-see": "Mostra da vedere",
        seen: "Mostra visti",
    };
    const current = btn.dataset.filter;
    const next = states[(states.indexOf(current) + 1) % states.length];

    btn.dataset.filter = next;
    btn.setAttribute("data-tooltip", tooltips[next]);

    btn.innerHTML =
        next === "to-see"
            ? '<i class="fa-solid fa-eye-slash"></i>'
            : '<i class="fa-solid fa-eye"></i>';

    filterMovies(document.querySelector(".search-input").value);
});

// Ricarica le card quando la finestra viene ridimensionata
window.addEventListener("resize", function () {
    if (
        (window.innerWidth <= 768 && window.innerWidth > 768 - 1) ||
        (window.innerWidth > 768 && window.innerWidth <= 768 + 1)
    ) {
        displayMovies(localMovies);
    }
});

/**
 * Aggiorna la lista dei film
 */
async function updateMovieList() {
    const movieContainer = document.querySelector(".movie-cards-container");
    movieContainer.innerHTML = `
        <div class="loading-spinner"></div>
        <div class="loading-text">${getRandomLoadingMessage()}</div>
    `;

    // Recupera i generi
    await fetchGenres();

    // Prepara tutti i film da processare
    const allMoviesToProcess = [];
    for (let saga of movies) {
        for (let movieTitles of saga.films) {
            allMoviesToProcess.push({ saga, movieTitles });
        }
    }

    // Processa i film con concorrenza controllata
    localMovies = await processWithConcurrency(
        allMoviesToProcess,
        async ({ saga, movieTitles }) => {
            let movieDetails;

            // Gestione speciale per film senza ID TMDb
            if (movieTitles.tmdb_id === null) {
                return {
                    title: movieTitles.original,
                    title_it: movieTitles.it,
                    original_title: movieTitles.original,
                    release_date: movieTitles.year
                        ? `${movieTitles.year}-01-01`
                        : null,
                    saga: saga.saga,
                    poster_path: null,
                    overview: "Descrizione non disponibile",
                    genre_ids: [],
                    cast_string: "",
                    id: `placeholder-${Math.random()
                        .toString(36)
                        .substr(2, 9)}`,
                };
            }

            // Se ha l'ID TMDb, recupera i dettagli dall'API
            if (movieTitles.tmdb_id) {
                movieDetails = await fetchFullMovieData({
                    movieId: movieTitles.tmdb_id,
                });
            } else {
                // Altrimenti cerca per titolo e anno
                movieDetails = await fetchFullMovieData({
                    title: movieTitles.original,
                    year: movieTitles.year,
                });
            }

            if (movieDetails) {
                movieDetails.saga = saga.saga;
                movieDetails.title_it = movieTitles.it;
                return movieDetails;
            }
            return null;
        }
    );

    // Mostra prima i risultati già ottenuti
    displayMovies(localMovies);

    // console.log("Film caricati:", localMovies.length);
}
