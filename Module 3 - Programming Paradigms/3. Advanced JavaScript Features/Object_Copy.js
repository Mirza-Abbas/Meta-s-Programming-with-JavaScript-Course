let car1 = {
    speed: 200,
    color: 'yellow'
}
let car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)