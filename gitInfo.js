/*
    For this section of the assessment you will be putting together a 
    cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "git is a program, it is a version control system that allows you and your team to track changes to code project, prevent bugs, and you are able to view the whole history of changes and fixes."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what 
    GitHub is.
*/

//CODE HERE

let gitHubDefinition = "Is a wedbsite, not a program. It acts as a cloud backup for all your projects if you push them out to gitHub, meaning all your versions and commits can be viewd in a web based form from anywhere."

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing 
    information about different git 
    commands.  Each object should contain 'description' and 'code' 
    properties.  The 'description' property 
    will be a string with a description of what that git command does.  
    The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' 
    properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

const init = {description:"Initialize a local reposity in this folder", code:"git init"}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' 
    properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

const clone = {description:"Used to target an existing repo and create a clone", code:"git clone"}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' 
    properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

const status = {description:"Allows you to see the status of the 'staging area' or what is ready to be committed to the repo", code:"git status"}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' 
    properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

const add = {description:"Add allows you to put changes made to a code onto a 'staging area', to be ready for commiting to the repo", code:"git add"}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' 
    properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

const commit ={description:"Commits everything that has been added to the 'staging area' by using the 'git add' command.", code:"git commit -m 'enter commit message her'"}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' 
    properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

const push = {description:"Push allows you to get your folder or file onto GitHub or other websites/apps as a back up of your local repository.", code:"git psuh"}
