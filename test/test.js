
var app = require('../app.js');
var linkedlist = require('../routes/linkedlist.js');
var linknode = require('../routes/linknode.js');
var count = require('../routes/count.js')
var comparator = require('../routes/comparator.js');


var assert = require("chai").assert;
var mocha  = require('mocha');
var describe = mocha.describe;



describe('Test linkedlist', function(){
    it('Test constructor', function(){
        var linklist = new linkedlist();
        assert.strictEqual(linklist.toLinkString(), '');
    });

    it('Test prepend', function(){
        var linklist = new linkedlist();
        linklist.prepend("1");
        linklist.append("2");
        linklist.prepend("3");
        assert.strictEqual(linklist.toLinkString(), '3');
    });

    it('Test append without head',function(){
        var linklist = new linkedlist();
        linklist.append('1');
        assert.strictEqual(linklist.toLinkString(), '1');
    });

    it('Test deleteHead', function(){
        var linklist = new linkedlist();
        linklist.deleteHead();
        linklist.prepend("1");
        linklist.deleteHead();
        linklist.prepend("2");
        linklist.prepend("3");
        linklist.deleteHead();
        assert.strictEqual(linklist.toLinkString(), '2');
    });

    it('Test getHead', function(){
        var linklist = new linkedlist();
        linklist.prepend("1");
        var foo = linklist.getHead();
        assert.equal(foo,1);

    });

    it('Test getTail', function(){
        var linklist = new linkedlist();
        linklist.prepend('1');
        linklist.append('2');
        var foo = linklist.getTail();
        assert.equal(foo, 2);
    });

    it('Test toArray', function(){
        var linklist = new linkedlist();
        linklist.prepend("1");
        assert.equal(linklist.toArray()[0],"1");

    });

    it('Test toString', function(){
        var linklist = new linkedlist();
        linklist.prepend(20);
        var someString = linklist.toLinkString(20);
        assert.strictEqual(someString, '20');
    });

    it('Test reverse', function(){
        var linklist = new linkedlist();
        linklist.prepend(1);
        linklist.prepend(2);
        linklist.prepend(3);
        linklist.reverse();
        assert.strictEqual(linklist.toLinkString(), '1');
  
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
        assert.strictEqual(linklist.toLinkString(), '');
    });

    it('Test delete (Head)',function(){
        var linklist = new linkedlist();
        linklist.prepend(1);
        linklist.prepend(2);
        linklist.delete(2);
        assert.strictEqual(linklist.toLinkString(), '1');
    });

    it('Test delete (Tail)', function(){
        var linklist = new linkedlist();
        linklist.prepend(1);
        linklist.delete(1);
        assert.strictEqual(linklist.toLinkString(), '');
    });

    it('Test delete next node', function(){
        var linklist = new linkedlist();
        linklist.prepend(1);
        linklist.append(2);
        linklist.append(3);
        linklist.delete(2);
        assert.equal(linklist.getHead(),1);
        assert.equal(linklist.getTail(),3);
    });

    it('Test find method', function(){
        var linklist = new linkedlist();
        linklist.find();
        linklist.prepend(1);
        linklist.append(2);
        var test_find = linklist.find(2);
        assert.equal(test_find, 2);
    });

    it('Test find method case can not fine', function(){
        var linklist = new linkedlist();
        linklist.find();
        linklist.prepend(1);
        linklist.append(2);
        var test_find = linklist.find(3);
        assert.equal(test_find, null);
    });

});

 describe('Test count', function(){

    it('Test call class cnt_vst', function(){
         var cnt = new count();
         assert.strictEqual(cnt.bclicks , 0);
         assert.strictEqual(cnt.nclicks , 0);
     });

     it('Test setCnt_blog method', function(){
        var cnt = new count();
        cnt.setCnt_blog(1)
        assert.strictEqual(cnt.bclicks , 1);
    });

    it('Test setCnt_news method', function(){
        var cnt = new count();
        cnt.setCnt_news(1)
        assert.strictEqual(cnt.nclicks , 1);
    });

    it('Test addPage_blog method', function(){
        var cnt = new count();
        cnt.addPage_blog()
        assert.strictEqual(cnt.bclicks , 1);
    });

    it('Test addPage_news method', function(){
        var cnt = new count();
        cnt.addPage_news()
        assert.strictEqual(cnt.nclicks , 1);
    });

    it('Test getCount_b method', function(){
        var cnt = new count();
        var test_mth = cnt.getCount_b()
        assert.strictEqual(test_mth , 0);
    });

    it('Test getCount_n method', function(){
        var cnt = new count();
        var test_mth = cnt.getCount_n()
        assert.strictEqual(test_mth , 0);
    });

 });

