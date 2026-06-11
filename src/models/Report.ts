import mongoose, { Schema } from "mongoose";

const ReportSchema = new Schema(
  {
    crimeType: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    dateTime: {
      type: String,
      required: true,
   },

    evidenceUrl: {
       type: String,
       default: "",
    },

    description: {
      type: String,
      required: true,
    },

    reporterName: {
      type: String,
      required: true,
    },

    reporterPhone: {
      type: String,
      required: true,
    },

    trackingId: {
      type: String,
      unique: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Report ||
  mongoose.model("Report", ReportSchema);