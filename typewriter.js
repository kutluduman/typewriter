const sentence = "hello there from lighthouse labs";
let count = 50;

for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write("\n" + char);
  }, count);
  count+=50;
 
};
