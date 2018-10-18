# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

BOOK_IMAGES = %w(
  Christie
  Die_blechtrommel
  Dragon_Rider Dune
  educated
  enders_game
  geb
  handbook
  neuromancer
  snow
).freeze

BOOKS = %i(
  seveneves
  casino
  duner
  wool
  city
  kill
  player
  kraken
  windup
  mona
  darkness
  neuromancer
  andromeda
  moon
  sheep
  robot
  body
  starship
  empire
  lot
  crew
).freeze

BOOK_NAMES = {
  seveneves: 'Seveneves',
  casino: 'Casino Royale',
  duner: 'Dune',
  wool: 'Wool Omnibus',
  city: 'The City & the City',
  kill: 'All You Need is Kill',
  player: 'Ready Player One',
  kraken: 'Kraken',
  windup: 'The Windup Girl',
  mona: 'Mona Lisa Overdrive',
  darkness: 'The Darkness That Comes Before',
  neuromancer: 'Neuromancer',
  andromeda: 'The Andromeda Strain',
  moon: 'Fool Moon',
  sheep: 'Do Androids Dream of Electric Sheep',
  robot: 'I, Robot',
  body: 'The Three-Body Problem',
  starship: 'Starship Troopers',
  empire: 'The Final Empire',
  lot: "'Salem's Lot",
  crew: 'The Crew',
}.freeze


BOOK_AUTHORS = {
  seveneves: 'Neal Stephenson',
  casino: 'Ian Flemming',
  duner: 'Frank Herbert',
  wool: 'Hugh Howey',
  city: 'China Miéville',
  kill: 'Hiroshi Sakurazaka',
  player: 'Ernest Cline',
  kraken: 'China Miéville',
  windup: 'Paolo Bacigalupi',
  mona: 'William Gibson',
  darkness: 'R. Scott Bakker',
  neuromancer: 'William Gibson',
  andromeda: 'Michael Crichton',
  moon: 'Jim Butcher',
  sheep: 'Philip K. Dick',
  robot: 'Isaac Asimov',
  body: 'Liu Cixin',
  starship: 'Robert A. Heinlein',
  empire: 'Brandon Sanderson',
  lot: "'Stephen King",
  crew: 'Scott Sigler',
}.freeze

BOOK_SYN = {
  seveneves: 'What would happen if the world were ending?
A catastrophic event renders the earth a ticking time bomb. In a feverish race against the inevitable, nations around the globe band together to devise an ambitious plan to ensure the survival of humanity far beyond our atmosphere, in outer space.
But the complexities and unpredictability of human nature coupled with unforeseen challenges and dangers threaten the intrepid pioneers, until only a handful of survivors remain...
Five thousand years later, their progeny—seven distinct races now three billion strong—embark on yet another audacious journey into the unknown . . . to an alien world utterly transformed by cataclysm and time: Earth.
A writer of dazzling genius and imaginative vision, Neal Stephenson combines science, philosophy, technology, psychology, and literature in a magnificent work of speculative fiction that offers a portrait of a future that is both extraordinary and eerily recognizable. As he did in Anathem, Cryptonomicon, the Baroque Cycle, and Reamde, Stephenson explores some of our biggest ideas and perplexing challenges in a breathtaking saga that is daring, engrossing, and altogether brilliant. ',
  casino: "Introducing James Bond: charming, sophisticated, handsome, chillingly ruthless and licensed to kill. This, the first of Ian Fleming's tales of secret agent 007, finds Bond on a mission to neutralize a lethal, high-rolling Russian operative called simply \"le Chiffre\" -- by ruining him at the Baccarat table and forcing his Soviet spymasters to \"retire\" him. It seems that lady luck is taken with 007 -- le Chiffre has hit a losing streak. But some people just refuse to play by the rules, and Bond's attraction to a beautiful female agent leads him to disaster and an unexpected savior... ",
  duner: "Set in the far future amidst a sprawling feudal interstellar empire where planetary dynasties are controlled by noble houses that owe an allegiance to the imperial House Corrino, Dune tells the story of young Paul Atreides (the heir apparent to Duke Leto Atreides and heir of House Atreides) as he and his family accept control of the desert planet Arrakis, the only source of the 'spice' melange, the most important and valuable substance in the cosmos. The story explores the complex, multi-layered interactions of politics, religion, ecology, technology, and human emotion as the forces of the empire confront each other for control of Arrakis.
Published in 1965, it won the Hugo Award in 1966 and the inaugural Nebula Award for Best Novel. Dune is frequently cited as the world's best-selling sf novel. ",
  wool: "This Omnibus Edition collects the five Wool books into a single volume. It is for those who arrived late to the party and who wish to save a dollar or two while picking up the same stories in a single package.
The first Wool story was released as a standalone short in July of 2011. Due to reviewer demand, the rest of the story was released over the next six months. My thanks go out to those reviewers who clamored for more. Without you, none of this would exist. Your demand created this as much as I did.
This is the story of mankind clawing for survival, of mankind on the edge. The world outside has grown unkind, the view of it limited, talk of it forbidden. But there are always those who hope, who dream. These are the dangerous people, the residents who infect others with their optimism. Their punishment is simple. They are given the very thing they profess to want: They are allowed outside. ",
  city: "Inspector Tyador Borlú of the Extreme Crime Squad finds deadly conspiracies beneath a seemingly routine murder. From the decaying Beszel, he joins detective Qussim Dhatt in rich vibrant Ul Qoma, and both are enmeshed in a sordid underworld. Rabid nationalists are intent on destroying their neighboring city, and unificationists dream of dissolving the two into one.",
  kill: "There’s one thing worse than dying. It’s coming back to do it again and again… When the alien Gitai invade, Keiji Kiriya is just one of many raw recruits shoved into a suit of battle armor and sent out to kill. Keiji dies on the battlefield, only to find himself reborn each morning to fight and die again and again. On the 158th iteration though, he sees something different, something out of place: the female soldier known as the Bitch of War. Is the Bitch the key to Keiji’s escape, or to his final death?",
  player: "In the year 2045, reality is an ugly place. The only time teenage Wade Watts really feels alive is when he's jacked into the virtual utopia known as the OASIS. Wade's devoted his life to studying the puzzles hidden within this world's digital confines, puzzles that are based on their creator's obsession with the pop culture of decades past and that promise massive power and fortune to whoever can unlock them. When Wade stumbles upon the first clue, he finds himself beset by players willing to kill to take this ultimate prize. The race is on, and if Wade's going to survive, he'll have to win—and confront the real world he's always been so desperate to escape. ",
  kraken: "With this outrageous new novel, China Miéville has written one of the strangest, funniest, and flat-out scariest books you will read this—or any other—year. The London that comes to life in Kraken is a weird metropolis awash in secret currents of myth and magic, where criminals, police, cultists, and wizards are locked in a war to bring about—or prevent—the End of All Things.
In the Darwin Centre at London’s Natural History Museum, Billy Harrow, a cephalopod specialist, is conducting a tour whose climax is meant to be the Centre’s prize specimen of a rare Architeuthis dux—better known as the Giant Squid. But Billy’s tour takes an unexpected turn when the squid suddenly and impossibly vanishes into thin air.
As Billy soon discovers, this is the precipitating act in a struggle to the death between mysterious but powerful forces in a London whose existence he has been blissfully ignorant of until now, a city whose denizens—human and otherwise—are adept in magic and murder.
There is the Congregation of God Kraken, a sect of squid worshippers whose roots go back to the dawn of humanity—and beyond. There is the criminal mastermind known as the Tattoo, a merciless maniac inked onto the flesh of a hapless victim. There is the FSRC—the Fundamentalist and Sect-Related Crime Unit—a branch of London’s finest that fights sorcery with sorcery. There is Wati, a spirit from ancient Egypt who leads a ragtag union of magical familiars. There are the Londonmancers, who read the future in the city’s entrails. There is Grisamentum, London’s greatest wizard, whose shadow lingers long after his death. And then there is Goss and Subby, an ageless old man and a cretinous boy who, together, constitute a terrifying—yet darkly charismatic—demonic duo.
All of them—and others—are in pursuit of Billy, who inadvertently holds the key to the missing squid, an embryonic god whose powers, properly harnessed, can destroy all that is, was, and ever shall be.",
  windup: "Anderson Lake is a company man, AgriGen's Calorie Man in Thailand. Under cover as a factory manager, Anderson combs Bangkok's street markets in search of foodstuffs thought to be extinct, hoping to reap the bounty of history's lost calories. There, he encounters Emiko...
Emiko is the Windup Girl, a strange and beautiful creature. One of the New People, Emiko is not human; instead, she is an engineered being, creche-grown and programmed to satisfy the decadent whims of a Kyoto businessman, but now abandoned to the streets of Bangkok. Regarded as soulless beings by some, devils by others, New People are slaves, soldiers, and toys of the rich in a chilling near future in which calorie companies rule the world, the oil age has passed, and the side effects of bio-engineered plagues run rampant across the globe.
What Happens when calories become currency? What happens when bio-terrorism becomes a tool for corporate profits, when said bio-terrorism's genetic drift forces mankind to the cusp of post-human evolution? Award-winning author Paolo Bacigalupi delivers one of the most highly acclaimed science fiction novels of the twenty-first century. ",
  mona: "William Gibson, author of the extraordinary multiaward-winning novel Neuromancer, has written his most brilliant and thrilling work to date... The Mona Lisa Overdrive. Enter Gibson's unique world - lyric and mechanical, erotic and violent, sobering and exciting - where multinational corporations and high tech outlaws vie for power, traveling into the computer-generated universe known as cyberspace. Into this world comes Mona, a young girl with a murky past and an uncertain future whose life is on a collision course with internationally famous Sense/Net star Angie Mitchell. Since childhood, Angie has been able to tap into cyberspace without a computer. Now, from inside cyberspace, a kidnapping plot is masterminded by a phantom entity who has plans for Mona, Angie, and all humanity, plans that cannot be controlled... or even known. And behind the intrigue lurks the shadowy Yakuza, the powerful Japanese underworld, whose leaders ruthlessly manipulate people and events to suit their own purposes... or so they think.",
  darkness: "The first book in R. Scott Bakker's Prince of Nothing series creates a world from whole cloth-its language and classes of people, its cities, religions, mysteries, taboos, and rituals. It's a world scarred by an apocalyptic past, evoking a time both two thousand years past and two thousand years into the future, as untold thousands gather for a crusade. Among them, two men and two women are ensnared by a mysterious traveler, Anasûrimbor Kellhus - part warrior, part philosopher, part sorcerous, charismatic presence - from lands long thought dead. The Darkness That Comes Before is a history of this great holy war, and like all histories, the survivors write its conclusion. x",
  neuromancer: "The Matrix is a world within the world, a global consensus- hallucination, the representation of every byte of data in cyberspace...
Case had been the sharpest data-thief in the business, until vengeful former employers crippled his nervous system. But now a new and very mysterious employer recruits him for a last-chance run. The target: an unthinkably powerful artificial intelligence orbiting Earth in service of the sinister Tessier-Ashpool business clan. With a dead man riding shotgun and Molly, mirror-eyed street-samurai, to watch his back, Case embarks on an adventure that ups the ante on an entire genre of fiction.
Hotwired to the leading edges of art and technology, Neuromancer ranks with 1984 and Brave New World as one of the century's most potent visions of the future.",
  andromeda: "The United States government is given a warning by the pre-eminent biophysicists in the country: current sterilization procedures applied to returning space probes may be inadequate to guarantee uncontaminated re-entry to the atmosphere. Two years later, seventeen satellites are sent into the outer fringes of space to collect organisms and dust for study. One of them falls to earth, landing in a desolate area of Arizona. Twelve miles from the landing site, in the town of Piedmont, a shocking discovery is made: the streets are littered with the dead bodies of the town's inhabitants, as if they dropped dead in their tracks.",
  moon: "Harry Dresden--Wizard
Lost Items Found. Paranormal Investigations. Consulting. Advice. Reasonable Rates. No Love Potions, Endless Purses, or Other Entertainment.
Business has been slow. Okay, business has been dead. And not even of the undead variety. You would think Chicago would have a little more action for the only professional wizard in the phone book. But lately, Harry Dresden hasn't been able to dredge up any kind of work--magical or mundane.
But just when it looks like he can't afford his next meal, a murder comes along that requires his particular brand of supernatural expertise.
A brutally mutilated corpse. Strange-looking paw prints. A full moon. Take three guesses--and the first two don't count...",
  sheep: "It was January 2021, and Rick Deckard had a license to kill.
Somewhere among the hordes of humans out there, lurked several rogue androids. Deckard's assignment--find them and then...\"retire\" them. Trouble was, the androids all looked exactly like humans, and they didn't want to be found!",
  robot: "The three laws of Robotics:
1) A robot may not injure a human being or, through inaction, allow a human being to come to harm.
2) A robot must obey orders given to it by human beings except where such orders would conflict with the First Law.
3) A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.",
  body: "The Three-Body Problem is the first chance for English-speaking readers to experience this multiple award winning phenomenon from China's most beloved science fiction author, Liu Cixin.
Set against the backdrop of China's Cultural Revolution, a secret military project sends signals into space to establish contact with aliens. An alien civilization on the brink of destruction captures the signal and plans to invade Earth. Meanwhile, on Earth, different camps start forming, planning to either welcome the superior beings and help them take over a world seen as corrupt, or to fight against the invasion. The result is a science fiction masterpiece of enormous scope and vision.",
  starship: "\"Starship Troopers\" is a classic novel by one of science fiction's greatest writers of all time and is now a Tri-Star movie. In one of Heinlein's most controversial bestsellers, a recruit of the future goes through the toughest boot camp in the universe -- and into battle with the Terran Mobile Infantry against mankind's most frightening enemy.",
  empire: "In a world where ash falls from the sky, and mist dominates the night, an evil cloaks the land and stifles all life. The future of the empire rests on the shoulders of a troublemaker and his young apprentice. Together, can they fill the world with color once more?
In Brandon Sanderson's intriguing tale of love, loss, despair and hope, a new kind of magic enters the stage — Allomancy, a magic of the metals.",
  lot: "Thousands of miles away from the small township of 'Salem's Lot, two terrified people, a man and a boy, still share the secrets of those clapboard houses and tree-lined streets. They must return to 'Salem's Lot for a final confrontation with the unspeakable evil that lives on in the town.",
  crew: "It is the best-kept and worst-kept secret in the Planetary Union navy. The PUV James Keeling, a warship that does things that no other ship can do. It is a weapon, and a liability. The rumor is that eighty percent of the people assigned to the Keeling die before their two-year stint is up. That rumor is the reason for the ship’s nickname — they call the Keeling “the Crypt,” because it is full of the dead.Those with a promising career, those with connections, those that can can avoid service on the Keeling do just that.
But still, the ship must fight, and for that, it needs a crew. The navy assigns the worst of the worst: cowards, thieves, murderers, rapists or those with nowhere else to go, no way to opt out. Your choice is simple: be executed for your crimes, or serve two years on the keeling.If you make it out alive, your record is wiped clean and you get a fresh start.
For this crew of just over 100 souls, it will be the longest two years they have ever faced. What is this ship? Where did it come from? And why, oh, why, won’t everyone stop screaming…",
}.freeze




User.destroy_all
Bookshelf.destroy_all
demo = User.create(username: "Demo User", password: 'starwars')
demo.set_initial_shelves!
5.times do
  user = User.create(username: Faker::Pokemon.unique.name, password: 'starwars')
  user.set_initial_shelves!
end

Book.destroy_all
books = []
BOOKS.each do |book|
  temp_book = Book.create!(
    title: BOOK_NAMES[book],
    author: BOOK_AUTHORS[book],
    synopsis: BOOK_SYN[book],
    published: Faker::Date.backward(8000),
    edition: "1st",
    language: ['English', 'Mandarin', 'German', 'Klingon', 'Japanese'].sample,
    isbn: Faker::Number.number(8),
    length: Faker::Number.number(3),
    format: ['Hardcover', 'Paperback', 'e-Book'].sample,
    original_title: BOOK_NAMES[book],
    publisher: Faker::Book.publisher
  )

  f = File.open("app/assets/images/#{book}.jpg")
  temp_book.image = f
  f.close
  temp_book.save

end

# 30.times do
#   books << Book.create(
#     title: Faker::Superhero.unique.name,
#     author: Faker::RockBand.unique.name,
#     synopsis: Faker::Lovecraft.unique.paragraphs(3).join(" \n"),
#     published: Faker::Date.backward(8000),
#     edition: "1st",
#     language: ['English', 'Gaelic', 'German', 'Klingon', 'Farsi', 'Ruby'].sample,
#     isbn: Faker::Number.number(8),
#     length: Faker::Number.number(3),
#     format: ['Hardcover', 'Paperback', 'e-Book'].sample,
#     original_title: Faker::Lovecraft.tome,
#     publisher: Faker::Book.publisher
#   )
# end
#
# books.each do |book|
#   f = File.open("app/assets/images/handbook.jpg")
#   book.image = f
#   f.close
#   book.save
# end

Review.destroy_all
users = User.all
books = Book.all
book = Book.first
90.times do
  Review.create(
    user_id: users.sample.id,
    book_id: books.sample.id,
    rating: rand(1..5),
    body: Faker::StarWars.quote
  )
end

15.times do
  Review.create(
    user_id: users.sample.id,
    book_id: book.id,
    rating: rand(1..5),
    body: Faker::StarWars.quote
  )
end

books.each do |bk|
  Review.create(
    user_id: demo.id,
    book_id: bk.id,
    rating: rand(1..5),
    body: Faker::StarWars.quote
  )
end



15.times do
  Bookshelf.create(title: Faker::Color.unique.color_name, owner_id: users.sample.id)
end

bookshelves = Bookshelf.all

Bookshelving.destroy_all

80.times do
  Bookshelving.create(book_id: books.sample.id, bookshelf_id: bookshelves.sample.id)
end
