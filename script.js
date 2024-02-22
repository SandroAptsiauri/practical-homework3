//  1.setTimeout ფუნქცია იყენებს callback-ს,
// დაწერეთ მისი promise-ზე დადაფუძნებული
// ალტერნატივა
// ● (მაგ: mySetTimeout(delay).then(...)
// function mySetTimeout(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//       reject();
//     }, delay);
//   });
// }
// mySetTimeout(2000).then(() => {
//   console.log("2 second");
// });
// 2.გამოიყენე პირველ დავალებაში შექმნილი
// ფუნქცია, რათა განავრცო ჩვენს მიერ
// დაწერილი “Toy Shop” შემდეგი პირობის
// იმპლემენტაციით:
// ➔ სათამაშოს დამზადებას სჭირდება
// დაახლოებით 3 წამი. (დროის მითითება
// შესაძლებელი უნდა იყოს დინამიურად)

// function makeToys(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.1) {
//         resolve("Undefected");
//       } else {
//         reject("Defected");
//       }
//     }, delay);
//   });
// }

// function sellToys(status) {
//   return new Promise((resolve, reject) => {
//     if (status == "Undefected") {
//       if (Math.random() > 0.7) {
//         resolve("Toy has been sold");
//       } else {
//         reject("Toy was unsuccessful");
//       }
//     }
//   });
// }
// makeToys(3000)
//   .then((status) => sellToys(status))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// 1.დაწერე ფუნქცია expo, რომელიც იქნება
// რეკურსიული ფუნქცია და მიიღებს
// არგუმენტად:
// ● ა) ციფრს ბ) ხარისხს და გ) callback - ს და
// დააბრუნებს მიღებული ციფრის ხარისხს
// მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5
// *5)
// function expo(number, expon, callback) {
//   if (expon === 0) {
//     callback(1);
//   } else {
//     expo(number, expon - 1, (result) => {
//       callback(result * number);
//     });
//   }
// }

// expo(2, 4, (result) => {
//   console.log("result:", result);
// });
// 2.fetch ფუნქციის გამოყენებით წამოიღე
// მონაცემები მოცემული მისამართიდან და
// გამოიტანე DOM-ში პოსტის სახით
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     const postsContainer = document.getElementById("posts-container");
//     data.forEach((post) => {
//       const postElement = document.createElement("div");
//       postElement.innerHTML = `
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//       `;
//       postsContainer.appendChild(postElement);
//     });
//   })
//   .catch((error) => console.error("შეცდომა:", error));

// 3.დაწერე ასინქრონული ფუნქცია, რომელიც
// არგუმენტად იღებს ობიექტს და აკეთებს
// deep copy-ს
// ● ფუნქციამ უნდა გამოიძახოს reject თუ
// არგუმენტი არ არის ობიექტი. თუ
// ყველაფერი კარგად არის, გამოიძახოს
// resolve კოპირებული ობიექტით

// function deepCopy(obj) {
//     return new Promise((resolve, reject) => {
//       if (typeof obj !== 'object' || obj === null) {
//         reject(new Error('Argument is not an object'));
//       } else {
//         setTimeout(() => {
//           try {
//             const copiedObj = JSON.parse(JSON.stringify(obj));
//             resolve(copiedObj);
//           } catch (error) {
//             reject(error);
//           }
//         }, 0);
//       }
//     });
//   }
//   const originalObj = {
//     name: 'John',
//     age: 30,
//     address: {
//       city: 'New York',
//       country: 'USA'
//     }
//   };

//   deepCopy(originalObj)
//     .then((copiedObj) => {
//       console.log('Original object:', originalObj);
//       console.log('Copied object:', copiedObj);
//     })
//     .catch((error) => {
//       console.error('Error:', error.message);
//     });
