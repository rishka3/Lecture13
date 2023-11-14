
/////////////////////////////////////////// 1

// let div = document.querySelector('div');
// let button1 = document.querySelector('.but_for1');
// let button2 = document.querySelector('.but_for2');
// let button3 = document.querySelector('.but_for3');


// button1.addEventListener('click', function() {
// 	fetch('/page1.html').then(response => {
// 		return response.text(); // объект класса Response
// 	}).then(text => {
//         div.innerHTML = text;
//     })
// });

// button2.addEventListener('click', function() {
// 	fetch('/page2.html').then(response => {
// 		return response.text(); // объект класса Response
// 	}).then(text => {
//         div.innerHTML = text;
//     })
// });

// button3.addEventListener('click', function() {
// 	fetch('/page3.html').then(response => {
// 		return response.text(); // объект класса Response
// 	}).then(text => {
//         div.innerHTML = text;
//     })
// });


/////////////////////////////////////////// 2

// let div = document.querySelector('div');
// let button1 = document.querySelector('.but_for1');
// let i = 1;



// button1.addEventListener('click', function() {
// 	fetch(`/page${i}.html`).then(response => {
// 		return response.text(); // объект класса Response
// 	}).then(text => {
//         div.innerHTML = text;
//     })
// 	if (i==5) {i=1}
// 	else {
// 		i++;
// 	}
// });

/////////////////////////////////////////// 3

// let button1 = document.querySelector('.but_for1');

// button1.addEventListener('click', function() {
// 	// fetch('/ajax.html').then(response => {
// 	fetch('/page1.html').then(response => {
// 		if (response.ok) {
// 			return response.text();
// 		} else {
// 			throw new Error('Ошибка: ' + response.status); 
// 		}

// 		// console.log(response.ok); // выведет true или false
// 	}).then(data =>  {
// 		console.log(data)
// 	}).catch(error => {
// 		console.log(error);
// 	});
// });

/////////////////////////////////////////// 4

// let button1 = document.querySelector('.but_for1');

// button1.addEventListener('click', function() {
// 	let promise = fetch('/ajax.html')
// 	.then(
// 		response => {
// 			if (response.ok) {
// 				return response.text();
// 			} else {
// 				throw new Error('плохой статус ответа');
// 			}
// 		},
// 	).then(
// 		text => {
// 			console.log(text);
// 		}
// 	).catch(
// 		error => {
// 			console.log(error);
// 		}
// 	);
// });

/////////////////////////////////////////// 5

fetch('/page1.html').then(response => {
			if (response.ok) {
				return response.text();
			} else {
				throw new Error('Ошибка: ' + response.status); 
			}
	
			
		}).then(data =>  {
			console.log(data)
		}).catch(error => {
			console.log(error);
		});
	

/////////////////////////////////////////// 6
