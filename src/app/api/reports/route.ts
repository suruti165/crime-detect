import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Report from "@/models/Report";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const trackingId =
      `CR-${new Date().getFullYear()}-${Math.floor(
       1000 + Math.random() * 9000
    )}`;

    const report = await Report.create({
      trackingId :trackingId,
      crimeType: body.crimeType,
      location: body.location,
      dateTime: body.dateTime,
      description: body.description,
      reporterName: body.reporterName,
      reporterPhone: body.reporterPhone,
      evidenceUrl: body.evidenceUrl,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Crime report submitted successfully",
        report,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const reports = await Report.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      reports,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch reports",
      },
      { status: 500 }
    );
  }
}