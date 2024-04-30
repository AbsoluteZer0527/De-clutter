# De-clutter
De-clutter is a gamified task manager website that breaks down complex actions into bite-sized step-by-step checklist activities through AI technology.

Development Space: Github, possibly Replit?
Link To the [Figma Mind Map](https://www.figma.com/file/n2JZvW3xQfoJZ1J62v7Mj9/WIC-Project-De-clutter?type=whiteboard&node-id=0%3A1&t=nx7OU1K0JQjuVVy2-1)

## Webpages
_Homepage:_ Starting with the bedroom, users can navigate to different pages by clicking on different objects such as the window, clock (still in development), calendar (still in development), etc.

_Conversation with the Angel:_ After clicking on the Garden Scene, users can talk with an angel to receive a quest. Users can either: 1. Enter a task idea, which the angel will then break down the task into specific steps, or 2. Enter the progress manually with the given template. After final confirmation with the angel, the quest will be marked as accepted and the angel will generate a flower seed to the user.

_Garden_: When the user receives the seed, they are able to plant the seed down in order to "start the quest". Every time the user marks a checkbox, it will water the flower and it will grow up after a certain percentage. The user can start multiple quests at the same time while completing the task at a specific time and will receive a bonus at the end.

## Mechanics
_MOST IMPORTANT_AI generated task:
Implementation Priorty: 
0. Bad ending: Can't figure out AI, let user input everything and stomp on the whole purpose of this website. 🤡
1. develop a program such that it takes in the user input, process with additional instruction, and output a response within the given format:  
   Examples: User given key words of task: learning c programming language chatgpt takes the keyword with our instruction: "(User input). Create a very specific list of 5 resource and task I can complete step by step learning coding from start and include to-dos. Task only, no explanation needed." chatgpt: give out 5 tasks. Programs: take the 5 tasks in and add them to the to do list on the side. Front end: angel conversation, accept buttom, animation of package the tasks into a flower seed, proceed to garden page.  
   Difficulties encountered:  
     i) How to connect front-end and store user input?  
     ii) How to implement AI into our program.  
     iii) How to process AI answer out.  
2. Advance AI: More choices such as refresh/generate again, more choices and allow users to select.  
3. ULTIMATE IDEAL DELUSIONAL DREAM AI:  
     First lead the user to input in the format of "I want to..."  
   -> feed it to chatgpt with additional instruction:  (User input) Can you generate 5 specific suggestions that I can select from to narrow down my goal and find a place to start. began each suggestions with the phase "I want to".  
   -> chatgpt generate 5 more detailed I want to statement  
   -> User can either: 1. select one or multiple task 2. declutter one specific task more! 3. edit output task  
   -> Choice 2 will make chatgpt take in the "I want to" statment it generate and add on the instruction again. It keeps looping into small tasks (and maybe limit the iteration into MAX 5-6?), and users can select all the tasks they want to accomplish.  
   -> Choice 3 simply allows user changes the output, and then can be apply to choice 1 and 2 again. EX: user: I want to learn how to cook. AI de-cluttered: 1. I want to learn how to cook mexican food. User edit: 1. I want to learn how to cook chinese food. User can then declutter it again or select it.  
   -> output all the small tasks and pack them into a flower seed.  
