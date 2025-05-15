// let schools = [
// 	{
// 		name:'mvara',
// 		aggregates:[12,13,25,30,10]
// 	},
// 	{
// 		name:'arua public',
// 		aggregates:[15,6,5,16,26]
// 	},
// 	{
// 		name:'ombaci',
// 		aggregates:[18,10,20,20,14]
// 	},
// 	{
// 		name:'ediofe',
// 		aggregates:[16,23,35,9,7]
// 	},
// 	{
// 		name:'muni',
// 		aggregates:[11,18,28,32,14]
// 	}
// ]

// for (let i=0;i<schools.length;i++){
// 	console.log(schools[i].name)
// 	// console.log(schools[i].aggregates)
// 	for (let j=0;j<schools[i].aggregates.length;j++){
// 		// console.log(schools[i].aggregates[j])
// 		if (schools[i].aggregates[j] < 20) {
// 			console.log(`${schools[i].aggregates[j]}: passsed`)
// 		} else{
// 			console.log('failed')
// 		}
// 	}
// }


let students = [
	{
		name: 'Yaka',
		scores: [60,70,47,90]
	},
	{
		name: 'Sabino',
		scores: [65,70,87,60]
	}
]

// loop through the students array
// console.log D1 if score is greater or equal to 80
// console.log fair for any score less than 80

// do .. while loop

for (let i = 0; i <students.length ; i++) {
	console.log(students[i].name)
	for (let p= 0; p <students[i].scores.length; p++) {
		// console.log(students[i].scores)
		if (students[i].scores[p] >= 80) {
			console.log('D1');
		} else {
			console.log('fair');
		}
	}
}



