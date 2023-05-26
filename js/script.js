const time = +prompt('Введіть кількість годин');
const minutes = 60;
const seconds = 60;
const result = minutes * seconds;
if (!time) {
   alert('Invalid result');
   console.log('Invalid result');
} else {
   alert(`You enter ${time * result} seconds`);
   console.log(`User enter ${time * result} seconds`);
}