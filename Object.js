let std={
    id:'C119004',
    name:'Yahye',
    age: 23
}

//show all info in object
console.log(std)

//show object property
console.log(std['id'])
console.log(std['name'])

//or
console.log(std.id)
console.log(std.name)

for(key in std)
console.log(key+':'+std[key])