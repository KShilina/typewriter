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
    if (i === sentence.length-1){
      process.stdout.write('\n'); // \n stands for jumping to the next command line
    }
   // console.log(sentence[i]);
  }, i*speed);
 
}


// const sentence = "hello there from lighthouse labs";
// const delay = 50;

// for (let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(sentence[i]);
//     if (i === sentence.length - 1) {
//       // add a newline character after printing the last letter
//       process.stdout.write("\n");
//     }
//   }, i * delay);
// }