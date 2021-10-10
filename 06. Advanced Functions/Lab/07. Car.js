function cars(input) {
    const data = {}

    const res = {
        create: (name, inherits, value) =>
            (data[name] = inherits ? Object.create(data[value]) : {}),
        set: (name, k, v) => (data[name][k] = v),
        print: name => {
            const entry = []
            for (const key in data[name]) {
                entry.push(`${key}:${data[name][key]}`)
            }
            console.log(entry.join(","))
        },
    }

    input.forEach(x => {
        const [c, n, k, v] = x.split(" ")

        res[c](n, k, v)
    })
}
