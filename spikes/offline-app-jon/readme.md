Small Nodejs web server for data entry of profile. Saves data in SQLite. Set up to use port 8080 (can be changed). Creates needed SQLite table (Client) if not present. Variable recreate at the beginning can be set to true to force recreation of the table if desired.

Uses Bootstrap, HTML. Pulls basic HTML code from a template.htm file. It has several segments, separated by <%>. Two of these are used in iterators to generate controls for navigation and data entry based on lists in the code. One such list drives many code actions: Creation of the data table with appropriate fields, setup of the edit controls, placing these controls in classes for reference by jquery methods in the page.

Code consists of 4 files: app.js (Nodejs program), template.htm (html with merge fields), package.json (to be placed in same folder so that "npm install" will load all dependencies including SQLite), and heart.db (the SQLite database). They are uploaded as heart.zip.
