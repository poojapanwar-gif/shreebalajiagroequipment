// utils/ga.js
// GA4 via GTM helpers (JS-only, safe in browser)

const getDL = () => {
    if (typeof window === "undefined") return null;
    window.dataLayer = window.dataLayer || [];
    return window.dataLayer;
  };
  
  const safePush = (obj) => {
    const dl = getDL();
    if (!dl) return;
    try {
      dl.push(obj);
    } catch (e) {
      console.warn("GA push failed:", e);
    }
  };
  
  // Map your product object to GA4 "item" format
  export const mapToGA4Item = (item, { listId = "", listName = "" } = {}) => {
    const price =
      (typeof item?.priceSale === "number" && item.priceSale > 0
        ? item.priceSale
        : item?.regularPrice) || 0;
  
    return {
      item_id: item?.sku || item?._id || item?.slug || "",
      item_name: item?.name || "",
      currency: "INR",
      price: Number(price) || 0,
      quantity: Number(item?.quantity || 1),
      item_brand: item?.brand?.name || item?.brand || "",
      item_category: item?.category?.name || item?.category?.slug || "",
      item_category2: item?.subCategory?.name || item?.subCategory?.slug || "",
      item_variant: item?.variant || "",
      item_list_id: listId,
      item_list_name: listName,
    };
  };
  
  // ---- GA4 Ecommerce events (fire via GTM Custom Event triggers) ----
  
  export const gaViewItem = (product, { listId = "", listName = "" } = {}) => {
    const gaItem = mapToGA4Item(product, { listId, listName });
    safePush({
      event: "view_item",
      ecommerce: { items: [gaItem] },
    });
  };
  
  export const gaAddToCart = (product, { listId = "", listName = "" } = {}) => {
    const gaItem = mapToGA4Item(product, { listId, listName });
    const value = Number(gaItem.price) * (gaItem.quantity || 1);
    safePush({
      event: "add_to_cart",
      ecommerce: { currency: "INR", value, items: [gaItem] },
    });
  };
  
  export const gaRemoveFromCart = (product, { listId = "", listName = "" } = {}) => {
    const gaItem = mapToGA4Item(product, { listId, listName });
    const value = Number(gaItem.price) * (gaItem.quantity || 1);
    safePush({
      event: "remove_from_cart",
      ecommerce: { currency: "INR", value, items: [gaItem] },
    });
  };
  
  export const gaBeginCheckout = (items = []) => {
    const mapped = items.map((it) => mapToGA4Item(it));
    const value = mapped.reduce((sum, it) => sum + (Number(it.price) * (it.quantity || 1)), 0);
    safePush({
      event: "begin_checkout",
      ecommerce: { currency: "INR", value, items: mapped },
    });
  };

  export const gaPurchase = (order) => {
  if (!order) return;
  const items = (order.items || []).map((it) => mapToGA4Item(it));
  const value = order.total || 0

  safePush({
    event: "purchase",
    ecommerce: {
      transaction_id: order.id || order._id || "", // unique order ID
      currency: "INR",
      value,
      items,
      tax: Number(order.tax || 0),
      shipping: Number(order.shipping || 0),
      coupon: order.coupon || "",
    },
  });
  console.log("value", value)
};
  