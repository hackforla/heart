'use strict';
// get the dependencies
var recreate = false;
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('heart.db');
var http = require('http');
var fs = require("fs");
var querystring = require('querystring');
var verbose = true;

// utilities
var evaluateForEach = function (values, evaluator) {
    var output = "";
    values.forEach(function (value) { output = output + evaluator(value); });
    return output;
}

var getName = function (value) {
    var parts = value.split(":");
    return parts[0];
}


var getSize = function (value) {
    var parts = value.split(":");
    return parts[1];
}

var evaluateForEachName = function (values, evaluator) {
    var output = "";
    values.forEach(function (value) { output = output + evaluator(getName(value)); });
    return output;
}

var empty = function(value)
{
    return !value || value == "";
}


// main program

// database and form variables
// var variables = ["ID:20", "Name:55", "Address:55", "City:40", "State:5", "Zip Code:10", "Phone:20", "Email:50"];
var variables = [
    "ID:20",
    "Date Record Created:20",
    "First Name:40",
    "Middle Name:40",
    "Last Name:40",
    "Driver's License:20",
    "SSN:20",
    "Date of Birth:20",
    "AKA 1:50",
    "AKA 2:50",
    "AKA 3:50",
    "Phone Number:20",
    "Email Address:50",
    "Clinic Attended:50",
    "Date Closed - No Obligation Form:20",
    "Date Closed - Client has Warrant:20",
    "Date Closed - Client has no Tickets:20",
    "Date Obligation Form Completed:20",
    "Date Waiting for background check:20",
    "Date of Attorney Review:20",
    "Date Sent to Court:20",
    "Date Received from Court:20",
    "Date Status Sent to Participant:20",
    "Date Closed - Complete:20"
    ];
var serviceVariables = [
    "ID:20",
    "Service:50",
    "Date Service Completed:20",
    "Notes:60"
];
var citationVariables = [
    "ID:20",
    "Citation Number:20",
    "Course Code:20",
    "Violation Number:20",
    "Citation Status:30",
    "Notes:60"
];
var lastVariableName = getName(variables[variables.length - 1]);

var addComma = function (value) {
    return (value == lastVariableName ? "" : ", ");
};

var sql = function (value) { return (!value ? "''" : "'" + value.replace("'", "''") + "'"); }

// web page navigation
var commands = ["Process clients", "List clients"];

// build web page from template.htm file
var template = fs.readFileSync('template.htm').toString().split("<%>");

// optionally, re-create the client table in the database
if (recreate) db.run("drop table if exists client",
    function(err)
    {
        if (err)
        {
            console.log("Error");
            process.exit(0);
        }
        next1();
    });
else next1();

// create table in database if not there
var next1 = function()
{
    var query = "create table if not exists client (" +
        evaluateForEachName(variables,
            function (value) {
                return "[" + value + "] text" + (value == lastVariableName ? " " : ", ");
            }) +
        ")";
    if (verbose) console.log(query);
    db.run(query, function (err) { if (err) { console.log("Error " + err); process.exit(0); } next2(); });
}

// run the web server and process incoming requests
var next2 = function() {
    console.log("Starting server");

    http.createServer(function (request, response) {

        var next3 = function () {
            var hide = false;
            var obligationCompletedField = "Date Obligation Form Completed";
            var noObligationField = "Date Closed - No Obligation Form";
            var hasWarrantField = "Date Closed - Client has Warrant";
            var noTicketField = "Date Closed - Client has no Tickets";
            var obligationCompleted = form[obligationCompletedField];
            var noObligation = form[noObligationField];
            var hasWarrant = form[hasWarrantField];
            var noTicket = form[noTicketField];
            var html = template[0] +
                evaluateForEach(commands, function (value) { return template[1].replace("@", value).replace("@", value); }) +
                template[2] +
                evaluateForEach(variables,
                    function (value) {
                        var variable = getName(value);
                        var output = "";
                        if (variable == obligationCompletedField && (!empty(noObligation) || !empty(hasWarrant) || !empty(noTicket))) hide = true;
                        if (!hide && (empty(obligationCompleted) || (variable != noObligationField && variable != hasWarrantField && variable != noTicketField ))) {
                            output = template[3].replace("@caption", variable).replace("@name", variable).replace("@value", "%" + variable).replace("@size", getSize(value))
                                .replace("@options", value == variables[0] ? " class='id'" : " class='other'");
                        }
                        //if (variable == obligationCompletedField && empty(obligationCompleted)) hide = true;
                        return output;
                   }) +
                template[4];
            //var hide = false;
            variables.forEach(function (value)
            {
                var variable = getName(value);
                //if (variable == obligationCompletedField && (!empty(noObligation) || !empty(hasWarrant) || !empty(noTicket))) hide = true;
                //if (!hide && (empty(obligationCompleted) || !variable in { noObligationField, hasWarrantField, noTicketField } )) {
                    html = html.replace("%" + variable, !form[variable] ? "" : form[variable]);
                //}
                //if (variable == obligationCompletedField && empty(obligationCompleted)) hide = true;
            });
            html = html
                .replace("@action", action)
                .replace("@action", action)
                .replace("@command", command)
                .replace("@command", command)
                .replace("@message", message)
                .replace("@lookup", action == "Look up" ? "checked" : "")
                .replace("@add", action == "Add" ? "checked" : "")
                .replace("@update", action == "Update" ? "checked" : "")
                .replace("@delete", action == "Delete" ? "checked" : "");
            response.end(html);
        }

        // access database as requested
        var next4 = function() {
            form = querystring.parse(body);
            if (!form["action"]) form["action"] = "Look up";
            action = form["action"];
            if (!form["command"]) form["command"] = commands[0];
            command = form["command"];
            response.setHeader('Content-Type', 'text/html'); // required for next call to work!
            var found = -1;
            var id = form[getName(variables[0])];
            console.log("Received request: id = " + id + ". Command = " + command + ". Action = " + action);
            if (!empty(id)) {
                var query = "select *, 1 as Ordering from Client where ID = " + sql(id) + " union select 'zzzzzzzz' " +
                    evaluateForEachName(variables, function (value) {
                        return (value == lastVariableName ? "" : ", ''");
                    }) + ", 2 order by Ordering";
                if (verbose) console.log(query);
                db.each(query, next5)
            }
            else {
                message = "ID not specified.";
                evaluateForEachName(variables,
                    function (value) {
                    form[value] = "";
                    })
                next3();
            }
        }

        // process the request (find, add, update)
        var next5 = function (err, row) {
            var idField = getName(variables[0]);
            var id = form[idField];
            var idData = row[idField];
            if (err) { console.log("Error " + err); process.exit(0); }
            rowNumber++;
            var query;
            console.log("Row " + rowNumber + " " + id + ", data " + idData + ", " + command + ", " + action);
            if (rowNumber > 1) {
            } else if (!empty(id) && idData == 'zzzzzzzz' && action == "Add") {
                message = "ID " + id + " not found.  It has been added.";
                query = "insert into client values (" + evaluateForEachName(variables, function (value) { return sql(form[value]) + addComma(value); }) + ")";
                if (verbose) console.log(query);
                db.run(query,
                    function (err) {
                        if (err) { console.log("Error " + err); process.exit(0); }
                        console.log(id + " added");
                        next3();
                    });
            } else if (!empty(id) && idData != 'zzzzzzzz' && action == "Add") {
                message = "ID " + id + " already added.  Cannot add gain.";
                next3();
            } else if (!empty(id) && idData != 'zzzzzzzz' && action == "Update") {
                message = "ID " + id + " found.  It has been updated.";
                query = "update client set " + evaluateForEachName(variables, function (value) { return "[" + value + "] = " + sql(form[value]) + addComma(value); }) +
                    " where [" + idField + "] = " + sql(id);
                if (verbose) console.log(query);
                db.run(query,
                    function (err) {
                        if (err) { console.log("Error " + err); process.exit(0); }
                        console.log(id + " updated");
                        next3();
                    });
            }
            else if (!empty(id) && idData != 'zzzzzzzz' && action == "Look up") {
                message = "ID " + id + " found.  Data is displayed.";
                query = "select * from Client where [" + idField + "] = " + sql(id);
                action = "Update";
                if (verbose) console.log(query);
                db.each(query,
                    function (err, row) {
                        if (err) { console.log("Error " + err); process.exit(0); }
                        console.log("Looked up existing data for " + id + ".");
                        variables.forEach(function (value) { var variable = getName(value); form[variable] = row[variable]; });
                        next3();
                    });
            } else if (action == "Delete") {
                message = "Delete not currently allowed.";
                next3();
            } else if (empty(id)) {
                message = "ID not specified.";
                next3();
            } else {
                message = "ID " + id + " not found.";
                next3();
            }
        }

        var body = "";
        request.on('data', function (chunk) {
            body += chunk;
        });
        request.on('end', next4);
        var form;
        var action;
        var command;
        var rowNumber = 0;
        var message = "";

    }).listen(8080);
}

