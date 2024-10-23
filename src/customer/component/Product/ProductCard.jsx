import React from 'react';
import "./ProductCard.css";

function ProductCard({ product }) {
  const {
    imageUrl,
    brand,
    title,
    color,
    discountedPrice,
    price,
    discountPresent,
    size = [], // Default to an empty array if size is undefined
  } = product;

  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      {/* Image Section */}
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={imageUrl}
          alt={title}
        />
      </div>

      {/* Product Details Section */}
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{brand || 'No Brand'}</p>
          <p>{title || 'Untitled Product'}</p>
          <p className="text-sm text-gray-500">Color: {color}</p>
        </div>

        {/* Price and Discount Section */}
        <div className="flex items-center space-x-2 justify-start mt-2">
          <p className="font-semibold">${discountedPrice}</p>
          <p className="line-through opacity-50">${price}</p>
          <p className="text-green-600 font-semibold">
            {discountPresent}% off
          </p>
        </div>

        {/* Available Sizes Section */}
        {size.length > 0 ? (
          <div className="mt-2">
            <p className="text-sm font-medium">Available Sizes:</p>
            <div className="flex space-x-2 mt-1">
              {size.map((s) => (
                <span
                  key={s.name}
                  className="border border-gray-300 px-2 py-1 text-sm rounded"
                >
                  {s.name} ({s.quantity})
                </span>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-500 mt-2">No sizes available</p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
