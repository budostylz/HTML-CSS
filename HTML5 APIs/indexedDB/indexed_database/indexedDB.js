
/*var create_open_database = function () {
  
    //open database
    var openRequest = window.indexedDB.open(db.name, db.version);

    openRequest.onupgradeneeded = function (e) {//database do not exist
        console.log('Upgrade Needed');

        var newVersion = e.target.result;

        if (!newVersion.objectStoreNames.contains(db.courses)) {
            newVersion.createObjectStore(db.storeNames.courses, { autoIncrement: true });//key set to auto increment
        }//end if

    }//end  openRequest.onupgradeneeded 

}//end create_open_database();*/

//database object




/*Course Information*/
var dt = new Date();//use for insertDate and modifiedDate properties of course object


var course = {
    title: 'HTML5 Advanced Topics',
    author: {
        first: 'Craig',
        last: 'Shoemaker'
    },
    student: {
        first: 'Shaun',
        last: 'Lewis'
    },
    courseID: 'html5-advanced',
    insertDate: dt,//insertDate and modifiedDate should be the same
    modifiedDate: dt
}//end course

alert("outside");



/*
//add course to database by creating transaction
 var transaction = db.instance.transaction([db.storeNames.courses], 'readwrite');

var
    store = transaction.objectStore(ds.storeNames.courses), //store instance
    addRequest = store.add(course); //adding course to request

db.setDefaultErrorHandler(addRequest); //check db errors

addRequest.onsuccess = function (e) {//handle success condition

    console.log('Course added');
    console.log('key: ' + e.target.result);


};

*/


//Create or Open Database
$(document).ready(function () {

    alert("inside");

    var create_open_database = function () {
      
        //open database
        var openRequest = window.indexedDB.open(db.name, db.version);

        openRequest.onupgradeneeded = function (e) {//database do not exist
            console.log('Upgrade Needed');

            var newVersion = e.target.result;

            if (!newVersion.objectStoreNames.contains(db.courses)) {
                newVersion.createObjectStore(db.storeNames.courses, { autoIncrement: true });//key set to auto increment
            }//end if

        }//end  openRequest.onupgradeneeded 

    }//end create_open_database();

    //database object

var db = {
    name: 'CrudDB',//database name
    version: 1,// database version
    instance: {
        transaction: function (a, b) {/*a = db.storeNames.courses, b = 'readwrite'*/
            console.log(a + " : " + b);

           
        },

        objectStore: function (c) {
            console.log(c);
        }

    },//data base instance, open/close
    storeNames: {//data stores
        courses: 'courses'
    },
    defaultErrorHandler: function (e) {//receive error information from setDefaultErrorHandler property
        console.log(e);
    },
    setDefaultErrorHandler: function (request) {//output onerror and onblocked requests to defaultErrorHandler property
        if ('onerror' in request) {
            request.onerror = db.defaultErrorHandler;
        }

        if ('onblocked' in request) {
            request.onblocked = db.setDefaultErrorHandler;
        }
    }
}//end db

    //start
    create_open_database();

    var transaction = db.instance.transaction([db.storeNames.courses], 'readwrite');//set transaction

    var store = db.instance.objectStore(db.storeNames.courses); //store instance

    console.log(typeof transaction + " : " + typeof store);



});//end $(document).ready(function ()
























