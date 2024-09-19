import React from 'react';

const ProductCard = ({ productName, productPrice, stockQuantity, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-sm mx-auto flex flex-col items-center">
      <img src={imageUrl} alt={productName} className="rounded-lg w-full h-auto" />
      <h2 className="text-xl font-semibold mt-4">{productName}</h2>
      <p className="text-gray-600 mt-2">{`￥${productPrice}/件`}</p>
      <p className="text-gray-500 mt-1">数量库存: {stockQuantity}件</p>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4 hover:bg-blue-600">
        立即购买
      </button>
    </div>
  );
};

export default ProductCard;