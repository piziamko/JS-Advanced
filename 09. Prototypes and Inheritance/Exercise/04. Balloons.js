function solution() {

    class Balloon {
        constructor(color, hasWeight) {
            this.color = color;
            this.hasWeight = hasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength) {
            super(color, hasWeight);
            this._ribbon = { color: ribbonColor, length: ribbonLength };
        }

        get ribbon() {
            return this._ribbon;
        }

    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
            super(color, hasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return { Balloon, PartyBalloon, BirthdayBalloon };
}


// let a = solve()
// let class1 = new a.Balloon('red', 45)
// console.log(class1);
// let class2 = new a.PartyBalloon('red', 45, 'blue', 1000)
// console.log(class2);
// let class3 = new a.BirthdayBalloon('red', 45, 'purple', 10, 'text')

// console.log(class3.ribbon);
