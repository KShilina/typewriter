// const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {

//   setTimeout(() => {
//     process.stdout.write(char);
    
// }, 1000) 
// }

const sentence = "hello there from lighthouse labs";
const speed = 50;

for (let i = 0; i < sentence.length; i++) {
  setTimeout( () =>{
    process.stdout.write(sentence[i]);
   // console.log(sentence[i]);
  }, i*speed);
}