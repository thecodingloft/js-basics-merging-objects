let personalDetails = {
    name: 'Samuel',
    age: 32,
    job: {
        title: 'frontend developer',
        skills: ['JS', 'CSS', 'HTML']
    }
}
let addressDetails = {
    city: 'Berlin',
    country: 'Germany'
}
let randomFacts = {
    interests: ['Web Development', 'Fitness', 'Stock Market'],
    favoriteAnimal: 'Cat'
}

// 1 - using object.assign
// Syntax: Object.assign(targetObject, obj1, obj2)
const mergedObjectOne = Object.assign({}, personalDetails, addressDetails, randomFacts);
console.log('--- 1: using Object.assign() ---');
console.log(mergedObjectOne);

// changing property - shallow clone
console.log(' --> shallow clone')
mergedObjectOne.job.title = 'car mechanic';
console.log('job title - original:', personalDetails.job.title)
console.log('job title - changed:', mergedObjectOne.job.title)
console.log(personalDetails)

// 2 - using spread operator
// Syntax: {..obj1, ...obj2}
const mergedObjectTwo = {
    ...personalDetails,
    ...addressDetails,
    ...randomFacts
}
console.log('--- 2: using spread operator ---');

console.log(mergedObjectTwo);

// changing property - shallow clone
console.log(' --> shallow clone')
mergedObjectTwo.job.title = 'cat sitter';
personalDetails.job.title = 'policeman'
console.log('job title - original:', personalDetails.job.title)
console.log('job title - changed:', mergedObjectTwo.job.title)

// 3 - using lodash library
// Syntax: _.merge({}, obj1, obj2)
console.log('--- 3: using lodash libray ---');
const mergedObjectThree = _.merge({}, personalDetails, addressDetails, randomFacts);
console.log(mergedObjectThree);

// changing property - deep clone
console.log(' --> deep clone')
mergedObjectThree.job.title = 'tree cutter';
console.log('job title - original:', personalDetails.job.title)
console.log('job title - changed:', mergedObjectThree.job.title)
