function carFactory(data) {
    let res = {};
    res.model = data.model;
    
    let engineEnum = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    }

    let carriageEnum = {
        hatchback: function (color) {
            return {
                type: "hatchback",
                color
            }
        },
        coupe: function (color) {
            return {
                type: "coupe",
                color
            }
        }
    }

  if (data.power <= 90) {
    res.engine = engineEnum["Small engine"]
  } else if (data.power <= 120) {
    res.engine = engineEnum["Normal engine"]
  } else {
    res.engine = engineEnum["Monster engine"];
  }

    res["carriage"] = carriageEnum[data.carriage](data.color)

  let size = data.wheelsize % 2 === 0 ? data.wheelsize -1: data.wheelsize;
    res.wheels = new Array(4).fill(size);
    
    // console.table(res);
  return res;
}

// Variant 0

function carFactory(data) {
  let res = {};
  res.model = data.model;

  if (data.power <= 90) {
    res.engine = {
      power: 90,
      volume: 1800,
    };
  } else if (data.power <= 120) {
    res.engine = {
      power: 120,
      volume: 2400,
    };
  } else {
    res.engine = {
      power: 200,
      volume: 3500,
    };
  }

  if (data.carriage === "hatchback") {
    res.carriage = {
      type: "hatchback",
      color: data.color,
    };
  } else {
    res.carriage = {
      type: "coupe",
      color: data.color,
    };
  }
  let size;
    if (data.wheelsize % 2 !== 0) {
        size = data.wheelsize
    } else {
        size = data.wheelsize - 1;
  }
  res.wheels = [size, size, size, size];

//   console.table(res);
  return res
}

carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
console.log("---------------------------------------------");
carFactory({
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
});

// Variant 2

function solve({ model, power, color, carriage, wheelsize }) {
    const storageEngines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ]
    const storageCarriage = [
        { type: "hatchback", color: "" },
        { type: "coupe", color: "" },
    ]
    const getWheels = s => {
        const arr = []
        arr.length = 4
        return s % 2 === 0 ? arr.fill(s - 1) : arr.fill(s)
    }

    return {
        model,
        engine: storageEngines.reduce((a, v) =>
            Math.abs(a.power - power) < Math.abs(v.power - power) ? a : v
        ),
        carriage: { type: carriage, color },
        wheels: getWheels(wheelsize),
    }
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));
