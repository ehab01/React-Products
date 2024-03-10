const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { id: "5", value: "Stationary", label: "Stationary", checked: false },
      { id: "6", value: "Cups", label: "Cups", checked: false },
      { id: "7", value: "Organizers", label: "Organizers", checked: false },
    ],
  },
  {
    id: "price",
    name: "Price Range",
    options: [
      {
        id: "1",
        value: '{"min":1,"max":10}',
        label: "1$ - 10$",
        checked: false,
      },
      {
        id: "2",
        value: '{"min":10,"max":50}',
        label: "10$ - 50$",
        checked: false,
      },
      {
        id: "3",
        value: '{"min":50,"max":100}',
        label: "50$ - 100$",
        checked: false,
      },
    ],
  },
];

export default filters;
