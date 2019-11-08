interface User {
    name: string;
    age: number;
}

let customer: User = {
    name: "Thao",
    age: 25
};
// let customer1:User ={
//     name: "thao1"
// }
console.log(customer);

class Shape {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `(x: ${this.x},y:${this.y})`
    }
}
interface Area {
    area():number;
    
}
class Rect extends Shape implements Area{
    constructor(x: number, y:number, public width: number,public height:number){
        super(x,y);
    }
    area(): number {
        return this.width*this.height;
    }

}
const rect = new Rect(5, 5, 10, 20);
console.log(rect.toString());
console.log(rect.area());