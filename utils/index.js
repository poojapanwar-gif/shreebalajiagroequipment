import axios from "axios";
export const baseURL = "https://stagingapi.modxcomputers.com/api";


const api = axios.create({
  baseURL: baseURL,
});
const setAuthToken = (token) => {
  if (token) {
    // If the token exists, set it as the default Authorization header for all requests
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // If there's no token, remove the Authorization header
    delete api.defaults.headers.common["Authorization"];
  }
};
export const fetchTopMenu = async () => {
  try {
    const response = await api.get("/top-menu");
    const result = response.data;
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchBottomMenu = async () => {
  try {
    const response = await api.get("/bottom-menu");
    const result = response.data;
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchMobileMenu = async () => {
  try {
    const response = await api.get("/mobile-menu");
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const fetchHomeCategory = async () => {
  try {
    const response = await api.get("/subcategories");
    const result = response.data;
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const filterValues = async() => {}

export const fetchHomeCustomPc = async() => {
  try {
    const response = await api.get("/product-category/custom-pc");
    const result = response.data;
    return result.data;
  } catch (error) {
    console.log(error);
  }
}
export const fetchHomePreBuiltPc = async() => {
  try {
    const response = await api.get("/product-category/pre-built-pc");
    const result = response.data;
    return result.data;
  } catch (error) {
    console.log(error);
  }
}
export const fetchHomeBanners = async() => {
  try {
    const response = await api.get(`banner?source=web&_t=${Date.now()}`);
    const result = response.data;
    return result.data;
  } catch (error) {
    console.log(error);
  }
}
export const fetchMobileHomeBanners = async() => {
  try {
    const response = await api.get(`banner?source=app&_t=${Date.now()}`);
    const result = response.data;
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export const fetchHomeSection = async() => {
  try {
    const response = await api.get("home-section?source=web");
    const result = response.data;
    return result.data;
  } catch (error) {
    console.log(error);
  }
}
export const fetchBestSeller = async() => {
  try {
    const response = await api.get("best-seller-product");
    const result = response.data;
    return result.data;
  } catch (error) {
    console.log(error);
  }
}
export const fetchCategoryProducts = async() => {
  try {
    const response = await api.get("categoryProducts");
    const result = response.data;
    return result.data;
  } catch (error) {
    console.log(error);
  }
}
export const fetchHomeFAQ = async() => {
  try {
    const response = await api.get("faqs");
    const result = response.data;
    return result.data;
  } catch (error) {
    console.log(error);
  }
}
export const fetchFooter = async () => {
  try {
    const response = await api.get("footer");
    console.log("Footer API response:", response.data);
    return response.data;   // maybe just return response.data
  } catch (error) {
    console.log("Error fetching footer:", error);
  }
};
export const fetchDescription = async (slug, opts = {}) => {
  const { depth, fullPath } = opts || {};

  // Choose order based on depth if supplied (1=category, 2=subcategory, >=3=subSubcategory)
  const ordered = depth === 1
    ? [
        `categories/${slug}`,
        `subcategories/${slug}`,
        `subSubcategories/${slug}`,
      ]
    : depth === 2
    ? [
        `subcategories/${slug}`,
        `categories/${slug}`,
        `subSubcategories/${slug}`,
      ]
    : depth >= 3
    ? [
        `subSubcategories/${slug}`,
        `subcategories/${slug}`,
        `categories/${slug}`,
      ]
    : [
        `categories/${slug}`,
        `subcategories/${slug}`,
        `subSubcategories/${slug}`,
      ];

  const extract = (payload) => {
    // Normalize { data: {...} } or direct {...}
    const obj = payload?.data && typeof payload.data === "object" && !Array.isArray(payload.data)
      ? payload.data
      : payload;

    let d = obj?.description || obj?.metaDescription || obj?.longDescription || obj?.content || null;
    if (d) return d;

    // Fallback for combined product-category payload shape
    const node =
      payload?.data?.[0]?.subSubCategory?.[0] ||
      payload?.data?.[0]?.subCategory?.[0] ||
      payload?.data?.[0]?.category?.[0];
    if (node) {
      return node.description || node.metaDescription || null;
    }
    return null;
  };

  for (const endpoint of ordered) {
    try {
      const response = await api.get(endpoint);
      const desc = extract(response?.data);
      if (desc) return desc;
    } catch (error) {
      const status = error?.response?.status;
      if (status && status !== 404) {
        console.log(`Error fetching description from ${endpoint}:`, error);
      }
    }
  }

  // As a last resort, try product-category/<fullPath> if provided
  if (fullPath) {
    try {
      const response = await api.get(`product-category/${fullPath}`);
      const desc = extract(response?.data);
      if (desc) return desc;
    } catch (error) {
      const status = error?.response?.status;
      if (status && status !== 404) {
        console.log(`Error fetching description from product-category/${fullPath}:`, error);
      }
    }
  }

  return null;
};
export const fetchTableData = async (slug) => {
  try {
    const response = await api.get(`/categrized-product/${slug}`);
    const result = response.data;
    return result;
  } catch (error) {
    console.error("Error submitting quote request:", error);
    throw error; // Re-throw to handle in the calling component
  }
};

export const submitQuoteRequest = async (quoteData) => {
  try {
    const response = await api.post("/users/quotes", quoteData);
    const result = response.data;
    return result;
  } catch (error) {
    console.error("Error submitting quote request:", error);
    throw error; // Re-throw to handle in the calling component
  }
};
