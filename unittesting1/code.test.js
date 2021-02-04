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

it("no quantity specified", () => {
  expect(
    orderTotal({
      items: [{ name: "shoes", price: 3 }],
    })
  ).toBe(3);
});

it("Happy Path", () => {
  expect(
    orderTotal({
      items: [
        { name: "shoes", price: 20, quantity: 2 },
        { name: "shirt", price: 10, quantity: 3 },
      ],
    })
  ).toBe(70);
});
