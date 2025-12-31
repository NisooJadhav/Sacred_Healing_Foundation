"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

type Product = {
  id: string;
  title: string;
  price?: string;
  description?: string;
  image?: string;
  category?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, items, updateQuantity, removeFromCart } = useCart();
  const cartItem = items.find((it) => it.id === product.id);

  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{
        background: "var(--color-lotus-section)",
        boxShadow: "var(--shadow-sacred)",
      }}
      data-aos="fade-up"
      data-aos-duration="700"
    >
      {/* ================= IMAGE ================= */}
      <div
        className="relative w-full h-44 sm:h-56"
        style={{ background: "var(--color-lotus-bg)" }}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-purple-300">
            No image
          </div>
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {product.title}
        </h3>

        {product.category && (
          <div
            className="inline-block text-xs px-2 py-1 rounded-full text-white mt-2"
            style={{ background: "var(--color-lotus-purple)" }}
          >
            {product.category}
          </div>
        )}

        {product.price && (
          <div className="text-purple-600 font-bold mt-3">
            {product.price}
          </div>
        )}

        {product.description && (
          <p className="text-sm text-gray-600 mt-2">
            {product.description}
          </p>
        )}

        {/* ================= ACTIONS ================= */}
        <div className="mt-4 flex items-center justify-between gap-3">
          {!cartItem ? (
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                })
              }
              className="inline-block bg-[var(--color-lotus-purple)] text-white px-4 py-2 rounded-full text-sm font-medium shadow"
            >
              Add to Cart
            </button>
          ) : (
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow">
              <button
                onClick={() => {
                  if (cartItem.quantity <= 1) removeFromCart(cartItem.id);
                  else updateQuantity(cartItem.id, cartItem.quantity - 1);
                }}
                className="px-2 py-1 bg-[var(--color-lotus-section)] rounded text-lg"
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span className="px-3 text-sm font-medium">
                {cartItem.quantity}
              </span>

              <button
                onClick={() =>
                  updateQuantity(cartItem.id, cartItem.quantity + 1)
                }
                className="px-2 py-1 bg-[var(--color-lotus-section)] rounded text-lg"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}