function Counter() {

    // advantage of closures  - not accessible, due to private variable

    // disadvantage - over memory usage, some variables are not garbage collectable, hence memory leaks

    // garbage collector - js engine clears up memory itself when unused variables are seen

    var count = 0;

    this.incrementCounter = () => {
        count++;
        console.log(count);
    }

    this.decrementCounter = () => {
        count--;
        console.log(count);
    }
}

countAction = new Counter();
countAction.incrementCounter();
countAction.incrementCounter();
countAction.incrementCounter();
countAction.decrementCounter();
countAction.decrementCounter();
countAction.decrementCounter();