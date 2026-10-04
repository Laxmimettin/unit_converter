const inputValue = document.getElementById("inputValue");
const resultValue = document.getElementById("resultValue");

const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");

const swapBtn = document.getElementById("swapBtn");
const copyBtn = document.getElementById("copyBtn");

const resultText = document.getElementById("resultText");
const quickGrid = document.getElementById("quickGrid");

const categories = document.querySelectorAll(".category");

let currentCategory = "length";

/* -----------------------------
   Unit Data
----------------------------- */

const units = {
  length: {
    meter: {
      name: "Meter",
      symbol: "m",
      factor: 1,
    },

    kilometer: {
      name: "Kilometer",
      symbol: "km",
      factor: 1000,
    },

    centimeter: {
      name: "Centimeter",
      symbol: "cm",
      factor: 0.01,
    },

    foot: {
      name: "Foot",
      symbol: "ft",
      factor: 0.3048,
    },

    inch: {
      name: "Inch",
      symbol: "in",
      factor: 0.0254,
    },

    mile: {
      name: "Mile",
      symbol: "mi",
      factor: 1609.344,
    },
  },

  weight: {
    kilogram: {
      name: "Kilogram",
      symbol: "kg",
      factor: 1,
    },

    gram: {
      name: "Gram",
      symbol: "g",
      factor: 0.001,
    },

    pound: {
      name: "Pound",
      symbol: "lb",
      factor: 0.45359237,
    },

    ounce: {
      name: "Ounce",
      symbol: "oz",
      factor: 0.0283495231,
    },
  },
};

/* -----------------------------
   Populate Dropdowns
----------------------------- */

function populateUnits() {
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  const categoryUnits = units[currentCategory];

  Object.keys(categoryUnits).forEach((unitKey) => {
    const unit = categoryUnits[unitKey];

    const option1 = document.createElement("option");

    option1.value = unitKey;
    option1.textContent = `${unit.name} (${unit.symbol})`;

    fromUnit.appendChild(option1);

    const option2 = document.createElement("option");

    option2.value = unitKey;
    option2.textContent = `${unit.name} (${unit.symbol})`;

    toUnit.appendChild(option2);
  });

  /* Default selections */

  if (currentCategory === "length") {
    fromUnit.value = "meter";
    toUnit.value = "foot";
  } else {
    fromUnit.value = "kilogram";
    toUnit.value = "pound";
  }

  updateQuickConversions();
  convert();
}

/* -----------------------------
   Conversion Function
----------------------------- */

function convert() {
  const value = parseFloat(inputValue.value);

  if (inputValue.value === "") {
    resultValue.value = "";

    resultText.textContent = "Enter a value to begin";

    return;
  }

  if (Number.isNaN(value)) {
    resultValue.value = "";

    resultText.textContent = "Please enter a valid number";

    return;
  }

  const categoryUnits = units[currentCategory];

  const fromFactor = categoryUnits[fromUnit.value].factor;
  const toFactor = categoryUnits[toUnit.value].factor;

  /*
        First convert the value to
        the base unit.
    */

  const baseValue = value * fromFactor;

  /*
        Then convert the base unit
        into the selected target unit.
    */

  const convertedValue = baseValue / toFactor;

  const roundedValue = formatNumber(convertedValue);

  resultValue.value = roundedValue;

  const fromName = categoryUnits[fromUnit.value].name;
  const toName = categoryUnits[toUnit.value].name;

  resultText.textContent = `${formatNumber(value)} ${fromName} = ${roundedValue} ${toName}`;
}

/* -----------------------------
   Format Number
----------------------------- */

function formatNumber(number) {
  if (Number.isInteger(number)) {
    return number.toString();
  }

  return Number(number.toFixed(6)).toString();
}

/* -----------------------------
   Category Selection
----------------------------- */

categories.forEach((button) => {
  button.addEventListener("click", () => {
    categories.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    currentCategory = button.dataset.category;

    inputValue.value = "";

    populateUnits();
  });
});

/* -----------------------------
   Live Conversion
----------------------------- */

inputValue.addEventListener("input", convert);

fromUnit.addEventListener("change", convert);

toUnit.addEventListener("change", convert);

/* -----------------------------
   Swap Units
----------------------------- */

swapBtn.addEventListener("click", () => {
  const currentFrom = fromUnit.value;
  const currentTo = toUnit.value;

  fromUnit.value = currentTo;
  toUnit.value = currentFrom;

  convert();
});

/* -----------------------------
   Copy Result
----------------------------- */

copyBtn.addEventListener("click", async () => {
  if (!resultValue.value) {
    return;
  }

  try {
    await navigator.clipboard.writeText(resultValue.value);

    copyBtn.textContent = "✓";

    setTimeout(() => {
      copyBtn.textContent = "⧉";
    }, 1200);
  } catch (error) {
    alert("Unable to copy result.");
  }
});

/* -----------------------------
   Quick Conversion Cards
----------------------------- */

function updateQuickConversions() {
  quickGrid.innerHTML = "";

  let quickData;

  if (currentCategory === "length") {
    quickData = [
      ["1 km", "1000 m"],
      ["1 m", "100 cm"],
      ["1 ft", "0.3048 m"],
      ["1 mile", "1.609344 km"],
    ];
  } else {
    quickData = [
      ["1 kg", "1000 g"],
      ["1 lb", "0.453592 kg"],
      ["1 oz", "28.3495 g"],
      ["1000 g", "1 kg"],
    ];
  }

  quickData.forEach(([from, to]) => {
    const card = document.createElement("div");

    card.className = "quick-item";

    card.innerHTML = `
            <strong>${from}</strong>
            <span>= ${to}</span>
        `;

    quickGrid.appendChild(card);
  });
}

/* -----------------------------
   Start Application
----------------------------- */

populateUnits();
