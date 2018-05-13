# jsTestTask
Task
Create a webpage with a form and button "Submit". Implement validation of form elements when user clicks "Submit".
Form should have the following elements with validation rules:
First name* (text)
Last name* (text)
Birthday* (date + datepicker)
Sex* (radio)
Country* (select)
Email* (email validation)
Password* (password)
Address* (text)
Notes (textarea)
Req. 1
* indicates a required field.
Req. 2
Text fields allow entering all symbols except double and single quotes (' and ").
Req. 3
Date picker should open when the user clicks on a date field. Only valid date can be entered in the date fields.
Req. 4
Email should be a valid email (hint: use regexp to validate email).
Req. 5
Textarea allows entering text.
Req. 6
Fields are validated when the user clicks "Submit". Elements with invalid input are highlighted with a red border. Error
messages are displayed below form elements. When user fixes input data and clicks "Submit" form is validated again.
Req. 7
Error message for every field should correspond to the type of error. e.g. if field "First name" is empty, error message that
field can't be empty is displayed. If it's not empty, but contains forbidden symbols ‑ we should display a message about
forbidden symbols. If email or date fields have an invalid format, the corresponding message should be shown. One field
might have multiple errors. Only one error message must be shown.
Req. 8
You can use jQuery UI to implement the task. Do not use plugins to validate the form.
Req. 9
Show a modal window that validation passed, when entered data is valid. Use third‑party plugins for modal window.
Optional
ES6 usage would be a plus.
