// Q. Create an companies to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix".

// a. Remove the first company from the companiesay.
// b. Remove Uber & Add Ola in its place.
// c. Add Amazon at the end.

//Create an companies to store companies
let companies = [];
companies.push("Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix");
console.log(companies);

// a. Remove the first company from the companiesay.
companies.shift();
console.log("shift", companies);

// b. Remove Uber & Add Ola in its place.
companies.splice(2, 1, "Ola");
console.log(companies);

// c. Add Amazon at the end.
companies.push("Amazon");
console.log(companies);
