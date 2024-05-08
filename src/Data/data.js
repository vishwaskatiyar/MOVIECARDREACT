const MovieData = [
    {
        "name": "Inception",
        "description": "A thief who enters the dreams of others to steal their secrets.",
        "genre": "Science Fiction",
        "price": 9.99,
        "imageUrl": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d9"
    },
    {
        "name": "The Shawshank Redemption",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "genre": "Drama",
        "price": 8.99,
        "imageUrl": "https://images.unsplash.com/photo-1522289219178-4c3b2b0f05c5"
    },
    {
        "name": "The Godfather",
        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "genre": "Crime",
        "price": 10.99,
        "imageUrl": "https://images.unsplash.com/photo-1524483776265-3d7e032fc275"
    },
    {
        "name": "The Dark Knight",
        "description": "When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "genre": "Action",
        "price": 7.99,
        "imageUrl": "https://images.unsplash.com/photo-1564700884573-acf542957b99"
    },
    {
        "name": "Pulp Fiction",
        "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "genre": "Crime",
        "price": 8.49,
        "imageUrl": "https://images.unsplash.com/photo-1617045859401-640f68531c1c"
    },
    {
        "name": "Schindler's List",
        "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        "genre": "Biography",
        "price": 9.49,
        "imageUrl": "https://images.unsplash.com/photo-1554244467-fae536282b27"
    },
    {
        "name": "Forrest Gump",
        "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        "genre": "Drama",
        "price": 7.99,
        "imageUrl": "https://images.unsplash.com/photo-1557258067-7e525c2ed7a2"
    },
    {
        "name": "The Matrix",
        "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        "genre": "Science Fiction",
        "price": 8.99,
        "imageUrl": "https://images.unsplash.com/photo-1605454801867-4f68d6d611e5"
    },
    {
        "name": "The Lord of the Rings: The Return of the King",
        "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "genre": "Fantasy",
        "price": 10.99,
        "imageUrl": "https://images.unsplash.com/photo-1587328258519-8d483d232fef"
    },
    {
        "name": "Fight Club",
        "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
        "genre": "Drama",
        "price": 8.49,
        "imageUrl": "https://images.unsplash.com/photo-1553772207-447ab9c2806b"
    },
    {
        "name": "Goodfellas",
        "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        "genre": "Biography",
        "price": 9.99,
        "imageUrl": "https://images.unsplash.com/photo-1560547231-bf3b0410e64c"
    },
    {
        "name": "Star Wars: Episode V - The Empire Strikes Back",
        "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
        "genre": "Science Fiction",
        "price": 8.99,
        "imageUrl": "https://images.unsplash.com/photo-1589386418592-af0ca3ed31c7"
    },
    {
        "name": "The Lord of the Rings: The Fellowship of the Ring",
        "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "genre": "Fantasy",
        "price": 10.49,
        "imageUrl": "https://images.unsplash.com/photo-1600172921428-fd6e96d0c36c"
    },
    {
        "name": "Inglourious Basterds",
        "description": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        "genre": "War",
        "price": 9.49,
        "imageUrl": "https://images.unsplash.com/photo-1587336569896-f485cabb7d5a"
    },
    {
        "name": "The Silence of the Lambs",
        "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "genre": "Thriller",
        "price": 8.49,
        "imageUrl": "https://images.unsplash.com/photo-1583267304759-1b2b2c56e4b1"
    },
    {
        "name": "Saving Private Ryan",
        "description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        "genre": "War",
        "price": 9.99,
        "imageUrl": "https://images.unsplash.com/photo-1542282084-5e0adbf542d4"
    },
    {
        "name": "The Green Mile",
        "description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        "genre": "Drama",
        "price": 8.99,
        "imageUrl": "https://images.unsplash.com/photo-1587159326136-9c2b22e12c1b"
    },
    {
        "name": "The Prestige",
        "description": "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
        "genre": "Mystery",
        "price": 9.49,
        "imageUrl": "https://images.unsplash.com/photo-1587678243224-9be6c44ef83b"
    },
    {
        "name": "The Departed",
        "description": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        "genre": "Crime",
        "price": 8.99,
        "imageUrl": "https://images.unsplash.com/photo-1612220490253-68ff6d4c8bcb"
    },
    {
        "name": "Gladiator",
        "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        "genre": "Action",
        "price": 9.99,
        "imageUrl": "https://images.unsplash.com/photo-1583968599813-b1f5d766cc46"
    },
    {
        "name": "American History X",
        "description": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
        "genre": "Drama",
        "price": 8.49,
        "imageUrl": "https://images.unsplash.com/photo-1581465432641-59ce4ed36386"
    },
    {
        "name": "The Lion King",
        "description": "A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.",
        "genre": "Animation",
        "price": 7.99,
        "imageUrl": "https://images.unsplash.com/photo-1612762311683-75c37fc0358f"
    },
    {
        "name": "The Dark Knight Rises",
        "description": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
        "genre": "Action",
        "price": 8.99,
        "imageUrl": "https://images.unsplash.com/photo-1564700884573-acf542957b99"
    },
    {
        "name": "Braveheart",
        "description": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
        "genre": "Biography",
        "price": 9.99,
        "imageUrl": "https://images.unsplash.com/photo-1564728683214-3d175e59a88a"
    },
    {
        "name": "The Godfather: Part II",
        "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        "genre": "Crime",
        "price": 10.99,
        "imageUrl": "https://images.unsplash.com/photo-1588386721114-b8e4d4a5ca17"
    },
    {
        "name": "The Wolf of Wall Street",
        "description": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        "genre": "Biography",
        "price": 9.99,
        "imageUrl": "https://images.unsplash.com/photo-1586716973654-ecda494575e1"
    },
    {
        "name": "The Avengers",
        "description": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        "genre": "Action",
        "price": 8.49,
        "imageUrl": "https://images.unsplash.com/photo-1571342069779-7a92955da6f7"
    },
    {
        "name": "Interstellar",
        "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "genre": "Science Fiction",
        "price": 9.99,
        "imageUrl": "https://images.unsplash.com/photo-1590807464350-5b9bbffb8e18"
    },
    {
        "name": "The Sixth Sense",
        "description": "A boy who communicates with spirits seeks the help of a disheartened child psychologist.",
        "genre": "Thriller",
        "price": 7.99,
        "imageUrl": "https://images.unsplash.com/photo-1575869134644-1cf4d214afba"
    },
    {
        "name": "The Martian",
        "description": "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
        "genre": "Science Fiction",
        "price": 9.49,
        "imageUrl": "https://images.unsplash.com/photo-1614931834026-f0b1fb86de28"
    },
    {
        "name": "Avatar",
        "description": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "genre": "Science Fiction",
        "price": 10.49,
        "imageUrl": "https://images.unsplash.com/photo-1597620037335-79526fd67fa1"
    },
    {
        "name": "The Intouchables",
        "description": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
        "genre": "Comedy",
        "price": 8.99,
        "imageUrl": "https://images.unsplash.com/photo-1575611345123-3954d282c370"
    },
    {
        "name": "The Pursuit of Happyness",
        "description": "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional endeavor.",
        "genre": "Biography",
        "price": 7.99,
        "imageUrl": "https://images.unsplash.com/photo-1572304454313-3847a3e46429"
    },
    {
        "name": "The Godfather: Part III",
        "description": "An aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "genre": "Crime",
        "price": 9.99,
        "imageUrl": "https://images.unsplash.com/photo-1588392504717-c95b5bf8b0ea"
    }
]


export default MovieData;  