


// 6. Am pus exercitiul 6 sub forma de comentariu deoarece daca pun 'type="module"' in fisierul html, 
// nu imi functioneaza canvas-urile, as fi recunoscator daca m-ati ajuta cu un sfat pentru asta.

/*import { Person } from './person.js';


const firstPerson = new Person('Jonson','175','brown','green','70');
firstPerson.speakEnglish();

const secondPerson = new Person('Manuela','170','blonde','blue','60');
secondPerson.dyeHair();
secondPerson.wearGlasses();

const thirdPerson = new Person('Cristiansen','185','brown','hazy','75');
thirdPerson.canRun();
*/



// 1.
const myArray = ['Love', 'I', 'JavaScript'];
console.log(myArray);
myArray.shift();
myArray.shift();
myArray.unshift('Love');
myArray.unshift('I');
console.log(myArray);

// 2.
var array =  ["Paul", 1, false, { name: "Jon Snow"}, [1, 2, 3],
null, undefined, function() { console.log('Test')} ]

array.forEach(function(item, index, array) 
{ 
    console.log('Pozitie: ' + index + ' Valoare: ' + item );
}
)
for (var i = 0; i < array.length; i++) {
    console.log('Tipul elementului: ' + typeof array[i]);
}



// 3, 4.
const canvas =  document.getElementById("canvasId");
/**  @type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d');

const mario = new Image();
mario.src = 'mario.png'
const MARIO_WIDTH = 32;
const MARIO_HEIGHT = 39;
let marioX = 0;
let marioY = 0;
mario.onload = () => {
    context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, 0, 0, MARIO_WIDTH, MARIO_HEIGHT)
                     }

document.addEventListener("keydown", function(event) {
    context.clearRect(0, 0, 605, 403);
    switch(event.key) {
        case 'w': {
            if (marioY > 0) {
            marioY -= 10;
            }
            break;
        }
        case 's': {
            if (marioY < 361) {
            marioY += 10;
            }
            break;
        }
        case 'a': {
            if (marioX > 0) {
            marioX -= 10;
            }
            break;
        }
        case 'd': {
            if (marioX < 573) {
            marioX += 10;
            }
            break;
        }
    }
    context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT)
});



// 5.
const canvas2 =  document.getElementById("canvasClick");
/**  @type {CanvasRenderingContext2D} */
const context2 = canvas2.getContext('2d');

const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    context2.fillStyle = "#00FFFF";
    context2.fillRect(180, 180, 40, 40);
});
