// --- 1. Contact Form Bridge ---
export const submitContactForm = async (payload: any) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to submit form");
  }
};

// --- 2. Waitlist Form Bridge (NEW) ---
export const submitWaitlistForm = async (payload: any) => {
  try {
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to join waitlist");
  }
};
