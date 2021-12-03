const {Student, School} = require ('./models');

Student.create({
    name: 'Harry Potter',
    year: 4,
    major: 'Defense Against the Dark Arts'
})
.then(function(newStudent){
    console.log(newStudent.toJSON());
})
.catch(function(err){
    console.log('ERROR!', err);
})
Student.create({
    name: 'Hermione Granger',
    year: 4,
    major: 'Potions, Beasts'
})
.then(function(newStudent){
    console.log(newStudent.toJSON);
})
.catch(function(err){
    console.log('ERROR!', err);
})
Student.create({
    name: 'Ronald Weisley',
    year: 4,
    major: 'Shady Friendships'
})
.then(function(newStudent){
    console.log(newStudent.toJSON());
})
.catch(function(err){
    console.log('ERROR!', err);
})