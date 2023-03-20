// Array.prototype.values() this method returns a new object that contains the value for each index in an  Array

const items = ['pen','ruler','set','book']

const itemValue = items.values();

for(item of itemValue){
    console.log(item)
}