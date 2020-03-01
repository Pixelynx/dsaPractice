const log = console.log;

const fizzBuzz = () => {
    for(let i = 0; i <= 100; i++) {
        if(i%3 === 0 && i%5 === 0) log(i, " :FIZZBUZZ");
        else if(i%3 === 0) log(i, " :FIZZ");
        else if(i%5 === 0) log(i, " :BUZZ")
        else log(i);
    };
};

fizzBuzz();