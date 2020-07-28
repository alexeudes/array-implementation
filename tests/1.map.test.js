const myMap = require('../array-methods/1.map');

const mockCallback = jest.fn((people) => people.name);
Array.prototype.myMap([{name: 'Alex', age: 25}, {name: 'Eudes', age: 30}], mockCallback);

expect(mockCallback.mock.calls.length).toBe(2);
expect(mockCallback.mock.calls).toBe('Alex');
expect(mockCallback.mock.calls[1][0]).toBe('Eudes');