class B {
    a = 1;
    constructor() {
        this.a = 2;
    }
}
const obj = {
    foo: {
        bar: {
            baz: 42,
        },
    },
};

if (obj?.foo?.bsar?.baz === 42) {
    console.log(1)
}
if (obj?.foo?.bar?.baz === 42) {
    console.log(2)
}
const baz = obj?.foo?.bar?.baz; // 42

const safe = obj?.qux?.baz; // undefined
