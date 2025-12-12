import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Log the payload to ensure we are sending the right data
    console.log(
      "1. Received Payload from Form:",
      JSON.stringify(body, null, 2)
    );

    // Send to Backend
    console.log("2. Sending to https://api.metashopai.com/contactus/create...");
    const res = await fetch("https://api.metashopai.com/contactus/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Mimic a browser request to avoid being blocked
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Origin: "https://metashopai.com",
        Referer: "https://metashopai.com/",
      },
      body: JSON.stringify(body),
    });

    console.log(
      `3. Backend responded with Status: ${res.status} ${res.statusText}`
    );

    // Get the raw text first (don't assume it's JSON yet)
    const responseText = await res.text();

    // Attempt to parse it as JSON
    let data;
    try {
      data = JSON.parse(responseText);
      console.log("4. Successfully parsed JSON response.");
    } catch (e) {
      // If parsing fails, it's HTML. Log the first 500 characters to see the error message.
      console.error("❌ CRITICAL ERROR: Backend returned HTML, not JSON.");
      console.error("--- Raw Response Start ---");
      console.error(responseText.slice(0, 500));
      console.error("--- Raw Response End ---");

      return NextResponse.json(
        {
          message: `Backend Error (${res.status}): The server returned an HTML error page instead of data.`,
        },
        { status: res.status || 500 }
      );
    }

    if (!res.ok) {
      return NextResponse.json(
        { message: data.message || "Failed to submit to backend" },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Proxy Error:", error);
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
