// lib/api.ts

// 🟢 YOUR PRIVATE ACCESS KEY
const ACCESS_KEY = "8b30a147-c47e-4011-bee9-1295529000f1";

export const submitContactForm = async (payload: any) => {
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: `New Contact: ${payload.name}`,
        from_name: "MetaShop Contact Us",
        ...payload,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return { success: true, ...data };
  } catch (error: any) {
    throw new Error(error.message || "Failed to submit form");
  }
};

export const submitWaitlistForm = async (payload: any) => {
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: "New Waitlist Signup",
        from_name: "MetaShop Waitlist",
        ...payload,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return { success: true, ...data };
  } catch (error: any) {
    throw new Error(error.message || "Failed to join waitlist");
  }
};
