const orderTotal = require("./code");

it("Works", () => {
  expect(1).toBe(1);
});

it("Quantity", () => {
  expect(
    orderTotal({
      items: [{ name: "shoes", price: 2, quantity: 3 }],
    })
  ).toBe(6);
});
