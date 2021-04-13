// const fetchData = callback => {
//   setTimeout(() => {
//     callback('Done!');
//   }, 1500);
// }

// setTimeout(() => {
//   console.log('Timer is done');
//   fetchData(text => {
//     console.log(text)
//   });
// }, 2000);


const fetchDataWithPromise = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
}

setTimeout(() => {
  console.log('Timer is done!');
  fetchDataWithPromise()
    .then(text => {
      console.log(text);
      return fetchDataWithPromise();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');


let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
 
prom.then(handleSuccess, handleFailure);