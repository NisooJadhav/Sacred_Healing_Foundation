"use client";

import { useMemo } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const WHATSAPP_NUMBER = "8793877913";

  const { items, updateQuantity, removeFromCart, total, clear } = useCart();

  const hasItems = items.length > 0;

  // Function to create the message for WhatsApp
  const createWhatsAppMessage = () => {
    const itemsList = items
      .map((item) => `${item.title} x ${item.quantity} - ${item.price}`)
      .join("\n");

    const message = `
Hi, I'd like to inquire about the following items in my cart:
${itemsList}

Total: ${new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(total)}

Please confirm the order.
    `;
    return encodeURIComponent(message);
  };

  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      {/* ================= PAGE TITLE ================= */}
      <h1
        className="text-3xl font-bold mb-6"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        Your Cart
      </h1>

      {/* ================= EMPTY CART ================= */}
      {!hasItems && (
        <div
          className="p-8 bg-white rounded-xl shadow-lg text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Your cart is empty.
        </div>
      )}

      {/* ================= CART CONTENT ================= */}
      {hasItems && (
        <div className="space-y-6">
          {/* Cart Items */}
          <div
            className="bg-white rounded-xl shadow-lg p-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {items.map((it, idx) => (
              <div
                key={it.id}
                className="flex items-center gap-4 py-3 border-b last:border-b-0 bg-white rounded-lg shadow-sm p-3"
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                <div className="relative w-20 h-20 bg-gray-100 rounded overflow-hidden">
                  {it.image && (
                    <Image
                      src={it.image}
                      alt={it.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="flex-1">
                  <div className="font-semibold">{it.title}</div>
                  <div className="text-sm text-gray-600">{it.price}</div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    value={it.quantity}
                    onChange={(e) =>
                      updateQuantity(
                        it.id,
                        Math.max(1, Number(e.target.value || 1))
                      )
                    }
                    className="w-16 px-2 py-1 border rounded text-center"
                  />
                  <button
                    onClick={() => removeFromCart(it.id)}
                    className="text-sm text-red-500 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div
            className="flex items-center justify-between"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div>
              <button
                onClick={() => clear()}
                className="px-4 py-2 border rounded"
              >
                Clear Cart
              </button>
            </div>

            <div
              className="text-right bg-white rounded-lg shadow-md p-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="text-sm text-gray-600">Total</div>
              <div className="text-2xl font-bold">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(total)}
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${createWhatsAppMessage()}`}
                target="_blank"
                className="inline-block mt-3 bg-[var(--color-lotus-purple)] text-white px-4 py-2 rounded"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
