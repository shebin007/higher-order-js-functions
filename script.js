// Well commented higher order js for future reference

// datas
const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2015},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  

//   forEach

// companies.forEach((company)=>{
//     console.log(company);
// })

// filter

// age above 20

// const ageAbove = ages.filter((age) => {
//     if(age >= 20){
//         return true;
//     }
// })

// shorthand for age above 20s

const ageAbove = ages.filter((age) => age >= 20);


// company only retail
// const Retailonly = companies.filter((company) => {
//     if(company.category === 'Retail'){
//         return true;
//     }
// } )

// shorthand company only retail
const Retailonly = companies.filter((company ) => company.category === 'Retail' );


// filter comapnies from 198*

const company80 = companies.filter((company) => (company.start >= 1980 && company.start <= 1990));
 
// filter company lasted 10 years

const companylastten = companies.filter(company => ((company.end - company.start ) >=  10));


// Map shrothand

// company name array

const CmpnyNames = companies.map(company =>`${company.name } [${company.start} to ${company.end}]`);

// square age

const sqrAge = ages
                .map(age => Math.sqrt(age))
                .map(age => age*age);


// SORT

// sort company ASC start date

// const compSort = companies.sort((a,b) => {
//     if(a.start > b.start){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// })

// shorthand sort company ASC start date

const compSort = companies.sort((a,b) => (a.start > b.start ? 1 : -1));


// REDUCE

// total age
const TotalAge = ages.reduce((total,age) => {
    return total + age
},0);

// total years company

const totalYear = companies.reduce((total,company) => (total + (company.end - company.start)),0);

// console.log(ageAbove);

// console.log(Retailonly);

// console.log(company80);

// console.log(companylastten);

// console.log(sqrAge);

// console.log(compSort);

// console.log(TotalAge);

console.log(totalYear);