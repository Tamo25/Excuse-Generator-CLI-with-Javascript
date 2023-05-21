let generateExcuse = () => {
  let excuses = [
    ["the dog", "my granma", "his turtle", "my bird"],
    ["ate", "peed", "crushed", "broke"],
    [
      "before the class",
      "right in time",
      "when I finished",
      "during my lunch",
      "while I was praying",
    ],
  ];

  let excuse = "";

  for (let i = 0; i < excuses.length; i++) {
    const randomIndex = Math.floor(Math.random() * excuses[i].length);
    excuse += excuses[i][randomIndex] + " ";
  }
  excuse = excuse.charAt(0).toUpperCase() + excuse.slice(1);

  return excuse.trim();
};

console.log(generateExcuse());