# Task
Create a webpage with a form and button "Submit". Implement validation of form elements when user clicks "Submit".
Form should have the following elements with validation rules: <br />
First name* (text)<br />
Last name* (text)<br />
Birthday* (date + datepicker)<br />
Sex* (radio)<br />
Country* (select)<br />
Email* (email validation)<br />
Password* (password)<br />
Address* (text)<br />
Notes (textarea)<br />
# Requirements
Req. 1 <br />
"*" indicates a required field.<br /><br />
Req. 2<br />
Text fields allow entering all symbols except double and single quotes (' and ").<br /><br />
Req. 3<br />
Date picker should open when the user clicks on a date field. Only valid date can be entered in the date fields.<br /><br />
Req. 4<br />
Email should be a valid email (hint: use regexp to validate email).<br /><br />
Req. 5<br />
Textarea allows entering text.<br /><br />
Req. 6<br />
Fields are validated when the user clicks "Submit". Elements with invalid input are highlighted with a red border. Error
messages are displayed below form elements. When user fixes input data and clicks "Submit" form is validated again.<br /><br />
Req. 7<br />
Error message for every field should correspond to the type of error. e.g. if field "First name" is empty, error message that
field can't be empty is displayed. If it's not empty, but contains forbidden symbols ‑ we should display a message about
forbidden symbols. If email or date fields have an invalid format, the corresponding message should be shown. One field
might have multiple errors. Only one error message must be shown.<br /><br />
Req. 8<br />
You can use jQuery UI to implement the task. Do not use plugins to validate the form.<br /><br />
Req. 9<br />
Show a modal window that validation passed, when entered data is valid. Use third‑party plugins for modal window.<br /><br />
Optional<br />
ES6 usage would be a plus.
