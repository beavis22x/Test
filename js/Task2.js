function sayHello(name) {
    if (name === 'Mark') {
        console.log('Hi, ' + name + '!');
        return 'Hi, ' + name + '!'
    }
    console.log('Hello, ' + name + '!');
    return 'Hello, ' + name + '!';
}

sayHello('Mark');
sayHello('Oleg');
sayHello('Vladidmir');