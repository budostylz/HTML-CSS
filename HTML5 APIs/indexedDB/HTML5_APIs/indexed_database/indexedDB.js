/*
    NoSql Like Database

    Database: InitDB

    Schema: #        Key        Value
            1        key         Object
                                    courses: 
                                    

*/

var create_open_database = function () {
    
    //open database
    var openRequest = window.indexedDB.open('InitDB', 1);

    openRequest.onupgradeneeded = function (e) {//database do not exist
        console.log('Upgrade Needed');

        var newVersion = e.target.result;

        if (!newVersion.objectStoreNames.contains('courses')) {
            newVersion.createObjectStore('courses',
                {
                    autoIncrement: true
                });
        }//end if

    }//end  openRequest.onupgradeneeded 

    //expose errors
    openRequest.onerror = function (e) {
        openRequest.onblocked = console.log(e.name  + " : " + e.message);
    }//end openRequest.onerror 

    //success
    openRequest.onsuccess = function (e) {//database exists
        console.log('Database open');

        //set aside instance of open database
        //declared in earlier scope
        initDB = e.target.result;

        //delete_database();

    }//end openRequest.onsuccess 


}//end create_open_database();

var delete_database = function () {
    
    if (typeof initDB !== undefined) {

        console.log('Closing the database...');
        initDB.close();//close database before deletion

        console.log('Attempting to delete the database...');

        var deleteRequest = indexedDB.deleteDatabase('InitDB');//request to delete database

        //get errors
        deleteRequest.onerror = function (e) {
            deleteRequest.onerror = deleteRequest.onblocked = console.log(e.name + " : " + e.message);
        }//end deleteRequest.onerror 

        deleteRequest.onsuccess = function () {
            console.log('Database deleted');
        }//end deleteRequest.onsuccess
      

    }//end if
        
}//end delete_database()

//start
create_open_database();



