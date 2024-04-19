//Q1//
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
  function aboveAge(people){

    arrayAges=people.filter(person =>person.age>=18).map(person=>person.name);
    return arrayAges

  }
  console.log(aboveAge(people));
//Q2
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];
function categorize(){
    items = Object.groupBy(products,({categories})=>categories)
    console.log(items);
}
categorize();
//Q3
const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];

function scoreAverage(){
    const average= (score)=>{
        return score.reduce((sum,score)=>sum + score,0)/score.length;
    }
    const examine= students.filter(students=>
        average(students.scores)>=85);

        const studentNames= examine.map(student=>student.name);
        console.log(studentNames)

}
scoreAverage()

const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };
  function addMethod(){
    car.age = function(){
        let currentYear = 2024
        return currentYear - car.year 
    }
    console.log(car.age())
  }
  addMethod()