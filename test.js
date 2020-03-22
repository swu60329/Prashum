
var app = require('../app.js');
var linkedlist = require('../linkedlist.js');
var linknode = require('../linknode.js');


var assert = require("chai").assert;
var mocha  = require('mocha');
var describe = mocha.describe;



describe('Test linkedlist', function(){
    it('Test constructor', function(){
        var linklist = new linkedlist();
    });


    it('Test prepend', function(){
        var linklist = new linkedlist();
        linklist.prepend("1");
        linklist.append("2");
        linklist.prepend("3");
    });

    it('Test append without head',function(){
        var linklist = new linkedlist();
        linklist.append('1');
    });

    it('Test deleteHead', function(){
        var linklist = new linkedlist();
        linklist.deleteHead();
        linklist.prepend("1");
        linklist.deleteHead();
        linklist.prepend("2");
        linklist.prepend("3");
        linklist.deleteHead();
    });

    it('Test getHead', function(){
        var linklist = new linkedlist();
        linklist.prepend("Test getHead()");
        var foo = linklist.getHead();
  
    });

    it('Test getTail', function(){
        var linklist = new linkedlist();
        linklist.getTail();
    });

    it('Test toArray', function(){
        var linklist = new linkedlist();
        linklist.prepend("1");
        var arrayofData = linklist.toArray();
     
    });

    it('Test toString', function(){
        var linklist = new linkedlist();
        linklist.prepend(20);
        var someString = linklist.toLinkString(20);
    });

    it('Test reverse', function(){
        var linklist = new linkedlist();
        linklist.prepend(1);
        linklist.prepend(2);
        linklist.prepend(3);
        linklist.reverse();
  
    });

    it('Test toString(callback)', function(){
        var node = new linknode(20);
        class testCallback{
            print(callback){ console.log(callback);}
        }
        var test = new testCallback();
        var message = node.toString(test.print);
        console.log(message);
    });

    it('Test delete (No data to deleted)', function(){
        var linklist = new linkedlist();
        linklist.delete("1");
    });

    it('Test delete (Head must be deleted)',function(){
        var linklist = new linkedlist();
        linklist.prepend(1);
        linklist.prepend(2);
        linklist.delete(2);
    });

    it('Test delete (Tail must be deleted)', function(){
        var linklist = new linkedlist();
        linklist.prepend(1);
        linklist.delete(1);
    });

    it('Test delete next node', function(){
        var linklist = new linkedlist();
        linklist.prepend(1);
        linklist.append(2);
        linklist.append(3);
        linklist.delete(2);
    });

    it('Test find method', function(){
        var linklist = new linkedlist();
        linklist.find();
        linklist.prepend(1);
        linklist.append(2);
        linklist.find(2);
        linklist.find(5);
    });

});

// describe('Test comparator', function(){

//     it('Test constructor', function(){
//         var 
//     });

// });

