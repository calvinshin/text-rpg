# text-rpg
A command line interface text based RPG prototype. This will be using constructors to join objects into an environment.

## General Architecture
The application uses global variables  to contain the game elements. 

The functional elements are:
- An object holding all the rooms
- A hero object
- A current room object

There are also other global elements that help with design of the game. These include a global.spacer variable, which allows for consistent formatting throughout the application.

![Global spacer formatting](/demo/globalspacer.png)

## Constructors

There are several constructors used in the application.

### Character Constructor
The character constructor creates all characters in the game, including the hero. In order to properly use the constructor, another file is required to manually input the character's stats. An example is displayed below from the heroCreator.js file:

![heroCreator.js](/demo/heroCreator.png)

### Item Constructor
Similar to the character constructor, the item constructor must have another file that adds elements to the object. Further examples are shown below in the #Hangman-Game section.

### Room Constructor
The room contains all of the objects that are associated in the room. All objects, except for the hero, are tied to a room. 

## room.inspect()
![Example of a room.inspect](/demo/inspect.png)
The game is heavily dependent on [Inquirer](https://www.npmjs.com/package/inquirer), a node package that prompts the user's input. To keep the application running, any function will eventually lead to a new inquirer prompt. The values available for room.inspect() are dependent on the available interactive elements in the room. For example, the interact and attack options are only available when there is a character in the room.

## Hangman Game
The hangman game is a special item in the rpg that uses two new constructors, a Letter constructor and a Hangman Game constructor. A user may interact with the hangman object, which then prompts the user if they want to start a new hangman game.

Below are some elements of the game as highlights:

![n complexity search](/demo/hangmanSearch.png)
- The hangman object creates an array of 26 length to identify the status of each letter. This allows for searching for a letter an n-complexity search.

![fs search](/demo/hangmanFS.png)
- The hangman object derives possible strings from a .txt file. Similar functionality will be used to create and save a user's progress through the game.