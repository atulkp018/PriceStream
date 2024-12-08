import React from "react";

function InventoryTable() {
  const mockData = [
    { id: 1, name: "Product A", price: 100, stock: 50 },
    { id: 2, name: "Product B", price: 200, stock: 30 },
    { id: 3, name: "Product C", price: 300, stock: 20 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {mockData.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InventoryTable;
