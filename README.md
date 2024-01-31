# Veritus of the Cursed Mirror

## Game Idea

Premise of the game: You are `[Veritus]`, a spirit cursed to live in the mirror. After a long time idling and watching the days go by, you realize there is a bit more going around the Queen's castle than what meets the eye.

Game Style: Text based narrative game where the player slowly progresses through a branch of the story, making decisions that change which branch of the story they are on.

### Plot

After a heavy betrayal at the end of the war, the new Queen of the Queendom has decided to do away with all sources of magic. As the Queen's men start their elimiation of wizards across the lands. 

Arison, an undercover wizard, senses your presence in the mirror and asks you for help. As you navigate through the various tasks given to you, the world decends into chaos once again. Be careful not to be caught.

- [ ] to be expanded
- [ ] or should we let the game write itself at some point?

win condition -> once you get all the wizards out (or as many as you can), you win

### Characters

`[Veritus]`

- this is the player

the Queen

- a character hidden away mostly in her throne room or in her bedroom
- commands most of the things through Winsur 

Winsur

- this is the Queen's right hand man and the main man that executes the Queen's various orders
- he is known for his loyalty and will not fail to follow the Queen's orders

Arison the wizard

- an undercover wizard working in the castle
- plans to hold back the Queens forces for long enough so the remaining wizards can escape
    - knows that the wizards are currently no match for the Queen
- the communication they have will be limited to short amounts of text, mostly Arison giving out quests and `[Veritus]` reporting back the results

NPC Notes from talking to Matt
- dynamic decision making on the backend
    - as the player makes a decision, the NPC knowledge can split into different places
    - now you have X knowledge and new Y knowledge
- we could try implementing different bots that you just can't 

## Implementation

### Inventory

A pocket of things that `[Veritus]` has picked up throughout the rooms. The rules for picking up an object is that `[Veritus]` must be able to see the full object from their point of view (or break the object into pieces and pick out the fullest version they can see). Objects obtained can interact with other objects inside the mirror world if possible.

ex. if a key is left on the table, `[Veritus]` can pick up the key and interact with the door inside the mirror world (the real world will also reflect such a change)

### Date Time

There should be a counter consistently on the screen that has the date and the time. This is important for the narrative as the player should note down the events that are to happen, when and where they happen, and try to go watch. This also controls "down time" (time when no major event is happening) for the player to play around and act.

### A Thing to Note About Altering the World

Learning from the books, `[Veritus]` will be able to grab and use things in the real world. 

When the player does anything in a mirror, there will be a slight glow that might be noticed by NPCs, will raise suspicion immediately. It's important to be careful what times the player is out and about. 

If suspicion is raised, the mirror will be shattered and `[Veritus]` will loose access to said mirror.

### Location and Map

There will be a couple of rooms around the place but no map. `[Veritus]` will have to slowly figure out the orientation of the castle through their trips around the mirrors, reading books, and listening to the NPCs talk. Do note that all things in books and NPC conversations will be flipped (left is right and right is left).

The mirrors will not come named at first but the player can give names to the mirrors to help them navigate around.

### The Library

`[Veritus]` will slowly gain access to the books that have been left out or unorganized. This will provide vital information about the narrative. Not all books will come from the Library, but they should all be documented here

List of books:
- `[of those who we've lost]`
    - just a narrative storybook that expands on the plot
    - gives background information that may help the player make certain decisions
- `[between the seas and the skies]`
    - a geographical book that helps the player orient themselves around the castle
    - it is half written, half drawn (?)
- `[ode to living dead]`
    - a book about light magic, goes over the basics of what light can do
        - unlocks condensation skill which will be used start fires

- books we have sprites for but idk what goes in them rn
- `[the basics of all things potions]`
- `[plants and all things living]`
- `[things that weren't mean to be]`

- [ ] write the books :') but gotta write the full plot first

### Chatbot Implementation

The quests will be given through chatting with Arison. The chatting is limited to XXX characters (we'll have to see through testing) so it won't overcomplicate the number of tests and tokenization of the chatbot. Here is a [link](https://youtu.be/azP_d7SiRDg) that you can reference.

- [ ] determine if we need any other sort of intellgence for the other NPCs
- [ ] figure out the scripted dependence between characters

### Ideas Saved for Later

- illusion magic which will take form of recordings
    - this allows `[Veritus]` to record certain scenes and play it on a mirror
    - used to solve puzzles where there are multiple mirrors in the room
