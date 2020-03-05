## Better Professor App Backend 

- [ ] The Base URL: https://a-better-professor.herokuapp.com/

- [ ] The Project Vision: https://www.notion.so/A-Better-Professor-Product-Vision-710c5f2e4cc346df8f6e4c1a81c16bbd

- [ ] Trello Board with Daily Milestones (teams are responsible for maintaining their daily milestones): https://trello.com/b/apD6yvDU/better-professor-app

- [ ] Grading Rubric - https://www.notion.so/Build-Week-Project-Rubrics-c0783f6d9b7e435f9ce47e8cd2d0ee3b


############################################################

# API ENDPOINTS #

## HOW TO -REGISTER AND LOGIN ##

- [ ] Note -- The professors and students have different endpoints to login, because the student array is a child of the professor array. Check your endpoints!

## PROFESSOR REGISTRATION ## 
|DESCRIPTION|TYPE|ENDPOINT|
|register professor (this is different from student registration)|POST|/api/auth/register|

-[ ] Items needed to register
|NAME|TYPE|REQUIRED|DESCRIPTION|
|lastname|string|yes|last name|
|firstname|string|yes|first name|
|username|string|yes|username (required for login, cannot be duplicate)|
|password|string|yes|password (required for login)|
|email|string|yes|email (cannot be duplicate)|
|role:admin|string|no|required to have admin privileges on site, but not required to create an account -- default is 'user' with no permissions|

###Note - (This is our default admin and has an account already set up for easy access - please use him to login, and you won't need to register!):### 

{   
	"lastname":"Franklin",
	"firstname":"Ben",
	"username":"KiteGuy",
	"password":"Password1",
	"email": "kiteguy@email.com",
	"role": "admin"
}


-[ ] - Professor's successful registration returns a token, their username, id, etc.

{
    "token": "some garbled giant string of letters and numbers", 
    "message": "Welcome KiteGuy",
	"id": 1,
	"ETC"
}

#If you already have a Professor set up, you can go straight to login:

## PROFESSOR LOGIN ##
|DESCRIPTION|TYPE|ENDPOINT|
|login professor (this is different from student login)|POST|/api/login|

-[ ] Items needed to login:
|NAME|TYPE|REQUIRED|DESCRIPTION|
|username|string|yes|username - must match registration|
|password|string|yes|password - must match registration|


#Professor's successful login returns a token, username, etc. - Example:
{
    "token": "giant string of letters and numbers",  
    "message": "Welcome KiteGuy"
}

#############################################################

# STUDENT REGISTRATION #
|DESCRIPTION|TYPE|ENDPOINT|
|register student|POST|/api/auth/register/:id| 

###Note -- it would be nice if the id you use here is the same as the professor id, but it's not necessary. Just use 1 if you don't want to think about it.

[] Items needed to register
|NAME|TYPE|REQUIRED|DESCRIPTION|
|lastname|string|yes|last name|
|firstname|string|yes|first name|
|username|string|yes|username (required for login, cannot be duplicate)|
|password|string|yes|password (required for login)|
|email|string|yes|email (cannot be duplicate)|
|professor_id|number|yes|required to add a student to a professor - if unsure, add to professor_id:1|

{   
	"lastname":"Singer",
	"firstname":"Aretha",
	"username":"GoldenVoice",
	"password":"password1",
	"email": "sing@email.com",
	"professor_id": 1
}


-[ ] Items needed to login
|DESCRIPTION|TYPE|ENDPOINT|
|login student|POST|/api/auth/login/student|

-[ ] Items needed to login
|NAME|TYPE|REQUIRED|DESCRIPTION|
|username|string|yes|username - must match registration|
|password|string|yes|password - must match registration|
|professor_id|number|yes|professor the student belongs to, use 1, if you don't have/know one|

{
    "username":"GoldenVoice",
    "password":"password1",
    "professor_id": 1
};

# THE REST OF THE AWESOME ENDPOINTS #

## PROFESSOR'S ENDPOINTS ##
|DESCRIPTION|TYPE|ENDPOINT|
|get a professor's students|GET|/api/user/:id/students|
|get a professor's students, but fancy (nested under the professor -- looks a bit cleaner, yields the same result as the other GET)|GET|/api/users/all-students/:id|
|get professor's messages|GET|/api/users/:id/messages|
|add student|POST|api/users/:id/students (note -- will not use this, as students can register by themselves)|
|add message|POST|/api/users/:id/messages|
|update professor|PUT|/api/users/:id|
|delete professor|DEL|/api/users/:id|


## STUDENTS ENDPOINTS ##
|TYPE|REQUIRED|DESCRIPTION|
|get all students in database (note -- will not use this, since professors can get their specific students)|GET|/api/students|
|get all student by id||/api/students/:id|
|get student's tasks|GET|/api/students/:id/tasks|
|get student's messages|GET|/api/students/:id/messages|
|add student|POST|/api/students|
|update student|PUT|/api/students/:id|
|delete student|DEL|/api/students/:id|
###Note -- in V1, we are not adding the ability for students to POST messages, they can only view their own messages.

## TASKS ENDPOINTS ##
|TYPE|REQUIRED|DESCRIPTION|
|get tasks|GET|/api/tasks|
|get tasks by id|GET|/api/tasks/:id|
|add task|POST|/api/tasks|
|update tasks|PUT|/api/tasks/:id|
|delete tasks|GET|/api/tasks/:id|

## MESSAGES ENDPOINTS ##
|TYPE|REQUIRED|DESCRIPTION
|get messages|GET|/api/messages
|get messages by id|GET|/api/messages/:id
|add message|POST|/api/messages
|update messages|PUT|/api/messages/:id
|delete messages|DEL|/api/messages/:id