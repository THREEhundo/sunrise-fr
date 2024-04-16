/** PAGES
 *
 * Landing Page
 *
 * Profile Page
 *
 * Sleep Cycle Creation Form Page
 *
 * View Sleep Cycles Calendar
 *
 * Login Page
 *
 * Signup Page
 *
 */

/** TECH
 *
 * HTML
 * CSS
 * TailwindCSS
 * JavaScript
 * React
 * Express
 * MongoDB
 * Passport
 * OAuth
 * Heroku Alternative
 * Nodemon
 * Dotenv
 */

/** Routes
 *
 * /login
 * 		get -> /user/:id
 *
 * /signup
 * 		post -> /user/:id
 *
 * /user/:id
 * 		get -> /user/:id
 * 		put -> /user/:id (name, email, password)
 *
 * /user/:id/schedule
 * 		get -> user/:id/schedule
 * 		put -> user/:id/schedule
 * 		delete -> user/:id/schedule
 *
 * /createSchedule
 * 		get -> /createSchedule
 * 		post -> /createSchedule
 * 		put -> /createSchedule
 * 		delete -> /createSchedule
 */

/**	SCHEMA
 * UserSchema
 * 		Name
 * 		Email
 * 		Password
 * ScheduleSchema
 * 		Departure Date
 * 		Departure Time
 * 		Departure City
 * 		Arrival Date
 * 		Arrival Time
 * 		Arrival City
 * 		Time to Shift
 * 		Hours Shifted Daily
 */

/** Build Order V.1
 * 	1. Add dependencies & dev dependencies
 * 	2. Create dotenv
 * 	3. Connect Database
 * 	4. Create Models
 *  5. Create Controllers & Routes
 * 		- /login
 * 		- /signup
 * 		- /user/:id
 * 		- /user/:id/schedule
 * 		- /createSchedule
 * 	6. Create HTML Pages
 * 		- /login
 * 		- /signup
 * 		- /user/:id
 * 		- /user/:id/schedule
 * 		- /createSchedule
 * 	7. Create Fetch to connect to Database
 * 		- Fetch Form Data
 * 		- Fetch Schedule Data to Create Schedule
 * 		- Fetch User Data
 *	8. Create Middleware & Utilities
		- Auth
		- Error
		- *Generate Tokens
 */

/** Research
 * 	1. Is React-redux necessary for this project?
 * 		- Probably because of the complicated forms & form validations.
 * 	2.
 */
