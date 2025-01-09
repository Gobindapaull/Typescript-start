const main = async () => {
    const example = await import("./utils.mts");
    const dir = example.getTemporaryDirectory();
    console.log(dir); // /tmp/-3DB7aI
}

main();
