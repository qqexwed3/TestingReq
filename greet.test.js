const greet = require('./greet');
test('Write a method greet(name)', () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
})

test('Handle nulls by introducing a stand-in. For example', () => {
    expect(greet(null)).toBe("Hello, my friend.");
})

test('Handle shouting. When name is all uppercase, then the method should shout back to the user', () => {
    expect(greet("JERRY")).toBe("HELLO JERRY!");
})

test('Handle two names of input. When name is an array of two names, then both names should be printed', () => {
    const arrayname = ["Jill", "Jane"];
    expect(greet(arrayname)).toBe("Hello, Jill and Jane.");
})

test('Handle arbitrarily names of input. When name represents more than two names', () => {
    const arrayname1 = ["Amy", "Brian", "Charlotte"];
    expect(greet(arrayname1)).toBe("Hello, Amy, Brian, and Charlotte.");
})

test('Allow mixing of normal and shouted names by separating the response into two greetings', () => {
    const arrayname2 = ["Amy", "BRIAN", "Charlotte"];
    expect(greet(arrayname2)).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
})
   

