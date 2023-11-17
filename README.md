# Veritus of the Cursed Mirror

## Game Idea

Premise of the game: You are \[Veritus\], a spirit cursed to live in the mirror until the end of their days. All you know is the cold darkness of the mirror's library and the Queen who saved you from your demise.

### Plot

Between deafening silence of the days and the Queen's small requests, \[Veritus\] starts to get used to the small library they have been cursed to live in.

Over the course of the days, the Queen comes and asks for more and more information from the player. The player can choose to answer through the knowledge of the library, which the Queen knows nothing of. The player watches as the Queen is falls into another bout of paranoia that someone is going overtake her. (The player may never come to know but it was the Queen's very own sister who backstabbed her years ago, in hopes of getting the throne. Since then, the Queen has never trusted another whole heartedly.) 

The Queen often comes asking for help with potions and magical spells, each being worse than the other. If her trust in \[Veritus\] grows to a certain degree, she will find ways to help make \[Veritus\] stronger. Little by little, paranoia eats away at the Queen until somehow, the fury is directed towards the wizards of the north. (The player may never come to know, but this was a plan by Winsur in hopes that pointing all her paranoia towards and tangible object then wiping out the object can cure their beloved Queen.)

As preparations fall into place and more of the wizards' territory is destroyed, the player can do nothing(?) but watch as the story unfolds. Everything the player can do depends on how the player plays the early days and how much agency they can earn. Read the books and play well, for the fate of the wizards is in the hands of \[Veritus\].

### Characters

\[Veritus\]

- this is the player, the name that the Queen has given the player.
- you don't remember anything about the past, all you remember is the library stuck here with you

the Queen

- this is the only direct source of contact to the outside world for the player for a long time
- she wanders around the castle trying to root out all those who try to undermine her, the player doesn't know why but she has grown paranoid of all creatures in the world
    - believing that the player are not a creature like those in the overworld, she trusts the player a bit more
    - her trust is important, the player will have to build it up overtime
- the player will grow to realize, she may be the Queen of a grand nation, but she is very much alone.
- due to her paranoia, the Queen slowly grows delusional over the course of the game

Winsur

- this is the Queen's right hand man, a morally grey character that does not do with anything
- the player will never be able to communicate with Winsur but will have to fight him for the Queen's trust
    - if the player chooses to help with wizards, they will be at odds with Winsur

Arison the wizard

- a dark wizard that knows a thing or two about curses
- the only other NPC that realizes the player's existence in \[cursed mirror\]s
    - Arison may not be able to directly communicate with the player, they can watch \[recording\] files that are played on \[cursed mirrors\]
- will be the key to interacting and helping the wizards fight back against the Queen

### Possible Endings

Ending 1: helping the Queen annihilate all those who worry her

- this is the simple straightforward ending where the player can just follow the storyline
    - the game will gear the player towards this ending continously
- all the player has to do is listen and follow the Queen's word intently to reach this ending

Ending 2: take down the Queen

- somewhere somehow, the player realizes that the Queen was not a good character and turns against her
    - there should be hints hidden in the books and hints after getting the Queen to give the player more "eyes"
- the player must stay hidden while maintaining or gaining the Queen's trust until the very end
- to get this ending, the player must gain enough trust with the Queen early on to unlock agency with the mirrors
    - using the mirrors, the player can then "interact" with other characters, the player cannot take the Queen down alone

Ending 3: shattered

- this is just the unfortunate end
- the player figures out the path towards ending 2, works towards it, but is caught by the Queen
- in her delusional state, she shatters every last mirror, tossing the player into darkness for the rest of the eternity
- this ending can pop up any time in the second half of the game, it will also be hinted if the player is getting close to driving the Queen crazy through the threats the Queen will toss at the player


## Implementation

### Inventory

Just a small pocket that can hold at max:

- 3 \[recording\] files
- 1 \[book\]
- a notepad (space is also limited by word count?)

notepad is used to keep track of things the player finds in the library and important events

### Date Time

There should be a counter consistently on the screen that has the date and the time. This is important for the narrative as the player should note down the events that are to happen, when and where they happen, and try to go watch. This also controls "down time" (time when no major event is happening) for the player to play around the Library. 

### Trackers (hidden from player)

Trackers will be an intger number between 1 to 20 (inclusive) and start out at 10. Anything above 10 will enhance the effect and under 10 will cause the opposite effect to happen.

Here is the major stats that is tracked individually for all major characters:

- `trust` how much this character will listen to your input and not question it and how much they will ask for you input
- `opinion` how good this character's opinion of the player is, a better opinion does not mean that they NPC will trust the character, but they are more willing to listen to the player's ideas with an open mind

### Agency

The player does not have a lot of agency to begin with but can grow to gain more agency depending on the `trust` level they have with the Queen. This is the only NPC that the player can directly interact with through text. The Queen character should be implemented through a rule-based chatbot that the player can freely chat to. The chatting is limited to XXX characters (we'll have to see through testing) so it won't overcomplicate the number of tests and tokenization of the chatbot. Here is a [link](https://youtu.be/Ea9jgBjQxEs) that you can reference.

#### The Cursed Library

This place is located and constantly accessable starting from the beginning of the game. This is where the player would spend most of their offtime and gain the knowledge to steer the game in the direction that they want.

There will be a list of book titles that the player can access but other than the starter book, all books will be locked by some sort of minigame.

List of books (will be completed as the plotline is flushed out):
- \[the basics of all things potions\]
    - this is the starter book and will function more as a "tutorial" than an actual informational book, it should cover aspects the player may get confused about and look for information on

- [ ] figure out what minigames to implement with the books

#### Mirrors

The mirror aspect of the game gives the player a huge boost in agency. However, 

Mirrors allow for two different things: viewing and recording.

Viewing:
- in the starter book, there is a \[eyes of the cursed\] potion that will turn any mirror into a \[cursed mirror\]
    - as \[Vertius\] of the Cursed Mirror, the player can look through any \[cursed mirror\], however the player can only look through one at a time
- the player cannot create this potion or pour it upon other mirrors, the goal is to get the Queen to do it for you
- this is quite important to pick out special pieces of information and give more power to "date/time" 

Recoding:
- \[Veritus\] will be able to record any scene they witness themselves through a mirror, there is a limit to how much time can be recorded
- each new recording would be saved to a \[recording\] file and will be stored in the "inventory"
- \[recording\] objects can be reviewed by \[Veritus\] or played on a \[cursed mirror\] for others to see
    - this will be the primary method for interaction with characters that are not the Queen

- [ ] figure out an interface for this
