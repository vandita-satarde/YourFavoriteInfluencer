import React from 'react'

function AddProducts() {
  return (
    <>
      <h1>Add New Product</h1>
      <form>
        <input type="text" placeholder="Product Name" />
        <input type="text" placeholder="Product Description" />
        <input type="number" placeholder="Product Price" />
        <button type="submit">Add Product</button>
      </form>
    </>
  )
}

export default AddProducts
