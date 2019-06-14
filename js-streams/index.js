streamtest();

function streamtest() {
    const animals = ['dog', 'cat', 'hippopotamus', 'squid', 'unicorn'];

    const res = animals
        .filter(val => val.length <= 7)
        .map(val => val + "!")
        .reduce((acc, val, index, arr) => {
            return acc +
                val.charAt(0).toUpperCase() +
                val.slice(1) +
                (index < arr.length - 1 ? ", " : "");
        }, "Animals: ");

    document.write(res);
}