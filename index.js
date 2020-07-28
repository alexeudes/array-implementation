const myMap = require('./array-methods/1.map');
const myFilter = require('./array-methods/2.myFilter');
const myReduce = require('./array-methods/3.reduce');

function main() {
    try {
        const peoples = [
            {
                name: 'Alex',
                age: 25
            },
            {
                name: 'Eudes',
                age: 30
            }
        ]

        // Test from myMap
        const names = peoples.myMap((people) => {
            return people.name;
        });

        // Test from myFilter
        const people = peoples.myFilter((people) => {
            return people.name.toLowerCase().indexOf('al') !== -1;
        });

        // Test from myReduce
        const ages = peoples.myMap((people) => {
            return people.age;
        });

        const sumOfAges = ages.myReduce((previousAge, nextAge) => {
            return previousAge + nextAge;
        }, 0);

        console.log('names: ', names);
        console.log('name:', people);
        console.log('sum of ages:', sumOfAges);
    } catch (error) {
        console.error('Error in main method', error);
    }
}

main();