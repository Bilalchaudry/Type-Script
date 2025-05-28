const carMakers: string[] = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [
  ['F150'],
  ['Corolla'],
  ['Camry'],
  ['Civic']
]

// Help with inference when extracting values from an array
const firstCar = carMakers[0]; // it have type string because we defined carMakers as string[] array

const lastCar = carMakers.pop(); // it have type string because we defined carMakers as string[] array

// Prevent incompatible values
carMakers.push(100); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// help with 'map', 'forEach', 'reduce', 'filter', and 'slice'
const upperCaseCarMakers = carMakers.map((car: string): string => {
  return car.toUpperCase();
}
);  

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2023-10-01', new Date('2023-10-02')];
importantDates.push(100); // Error: Argument of type 'number' is not assignable to parameter of type 'Date | string'.
importantDates.push('2023-10-03'); // This is fine, because '2023-10-03' is a string
importantDates.push(new Date('2023-10-04')); // This is fine, because new Date() is a Date object