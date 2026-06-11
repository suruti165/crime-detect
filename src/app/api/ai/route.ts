import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const description =
      body.description.toLowerCase();

    let response = "";

    // Theft
    if (
      description.includes("stolen") ||
      description.includes("theft") ||
      description.includes("mobile") ||
      description.includes("phone") ||
      description.includes("bag") ||
      description.includes("wallet") ||
      description.includes("bike stolen") ||
      description.includes("robbery")
    ) {
      response = `
Crime Category: Theft / Robbery
Risk Level: Medium

Suggested Action:
• Visit nearest police station
• File FIR immediately
• Keep bill/IMEI/ownership proof ready
• Check nearby CCTV if possible
`;
    }

    // Cyber Crime
    else if (
      description.includes("hack") ||
      description.includes("cyber") ||
      description.includes("otp") ||
      description.includes("fraud") ||
      description.includes("bank") ||
      description.includes("instagram") ||
      description.includes("whatsapp") ||
      description.includes("telegram") ||
      description.includes("online scam") ||
      description.includes("upi")
    ) {
      response = `
Crime Category: Cyber Crime
Risk Level: High

Suggested Action:
• Call Cyber Helpline 1930
• Block bank/payment account
• Change passwords immediately
• Save screenshots and proof
`;
    }

    // Harassment / Threat
    else if (
      description.includes("threat") ||
      description.includes("harass") ||
      description.includes("blackmail") ||
      description.includes("abuse") ||
      description.includes("bully")
    ) {
      response = `
Crime Category: Harassment / Threat
Risk Level: High

Suggested Action:
• Save chats/screenshots
• Do not delete evidence
• Contact nearest police station
• Consider cyber complaint if online
`;
    }

    // Violence / Assault
    else if (
      description.includes("attack") ||
      description.includes("fight") ||
      description.includes("violence") ||
      description.includes("injury") ||
      description.includes("murder") ||
      description.includes("beaten")
    ) {
      response = `
Crime Category: Assault / Violence
Risk Level: High

Suggested Action:
• Seek medical help immediately
• Contact police emergency service
• Preserve evidence and witnesses
`;
    }

    // Missing Person / Kidnap
    else if (
      description.includes("kidnap") ||
      description.includes("missing") ||
      description.includes("not found")
    ) {
      response = `
Crime Category: Missing Person / Kidnapping
Risk Level: High

Suggested Action:
• Contact police immediately
• Share recent photo/details
• Inform relatives and nearby stations
`;
    }

    // Drugs / Illegal Activity
    else if (
      description.includes("drug") ||
      description.includes("illegal") ||
      description.includes("smuggling")
    ) {
      response = `
Crime Category: Illegal Activity
Risk Level: Medium

Suggested Action:
• Report anonymously if needed
• Inform local police authority
• Avoid direct confrontation
`;
    }

    // Default
    else {
      response = `
Crime Category: General Complaint
Risk Level: Low

Suggested Action:
• Provide complete details
• Visit nearest police station
• Keep any evidence ready
`;
    }

    return NextResponse.json({
      success: true,
      response,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "AI failed",
      },
      { status: 500 }
    );
  }
}