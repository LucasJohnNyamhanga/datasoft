// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../app/Config/nodeMailer";
import {
  emailDetailRow,
  emailEyebrow,
  emailStackedRow,
  escapeHtml,
  renderEmailShell,
} from "../../app/Config/emailTemplate";

const briefLabels: Record<string, string> = {
  projectType: "Project Type",
  serviceInterest: "Service Interest",
  layoutStatus: "Design / Layout Status",
  budget: "Estimated Budget",
  timeline: "Timeline",
};

const briefOptionLabels: Record<string, Record<string, string>> = {
  projectType: {
    new: "Brand New Project",
    upgrade: "Upgrading an Existing One",
    unsure: "Not Sure Yet",
  },
  serviceInterest: {
    software: "Software or a System",
    website: "Website",
    networking: "Computer Networking",
    graphics: "Graphics Design",
    mixed: "More Than One / Not Sure Yet",
  },
  layoutStatus: {
    ready: "Yes, It's Ready",
    idea: "I Have an Idea, Need Guidance",
    none: "No, DataSoft Should Give Me Options",
  },
  budget: {
    "under-500k": "Under TZS 500,000",
    "500k-2m": "TZS 500,000 – 2,000,000",
    "2m-5m": "TZS 2,000,000 – 5,000,000",
    "above-5m": "Above TZS 5,000,000",
    unsure: "Not Sure Yet, Need Advice",
  },
  timeline: {
    urgent: "As Soon as Possible (2 Weeks)",
    "1month": "Within 1 Month",
    "1to3months": "1 – 3 Months",
    flexible: "No Rush, Quality First",
  },
};

function resolveBriefValue(key: string, rawValue: string) {
  const label = briefOptionLabels[key]?.[rawValue];
  return escapeHtml(label ?? rawValue);
}

interface EmailFields {
  fullName: string;
  email: string;
  orgName: string;
  project: string;
  projectType?: string;
  serviceInterest?: string;
  layoutStatus?: string;
  budget?: string;
  timeline?: string;
}

function buildEmailHtml(fields: EmailFields) {
  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Africa/Dar_es_Salaam",
    dateStyle: "full",
    timeStyle: "short",
  });

  const briefRows = (
    ["projectType", "serviceInterest", "layoutStatus", "budget", "timeline"] as const
  )
    .filter((key) => fields[key])
    .map((key) => emailStackedRow(briefLabels[key], resolveBriefValue(key, fields[key] as string)))
    .join("");

  const bodyHtml = `
    ${emailEyebrow("Client Details")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
      ${emailDetailRow("Full Name", escapeHtml(fields.fullName))}
      ${emailDetailRow("Phone / Email", escapeHtml(fields.email))}
      ${emailDetailRow("Organisation", fields.orgName ? escapeHtml(fields.orgName) : "—")}
    </table>

    ${
      briefRows
        ? `<div style="margin:22px 0 8px;">
      ${emailEyebrow("Project Brief")}
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${briefRows}
      </table>
    </div>`
        : ""
    }

    <div style="margin:22px 0 4px;">
      ${emailEyebrow("Project Details")}
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="background-color:#ffffff;border:1px solid #e9dfc4;border-left:3px solid #d4a017;border-radius:8px;padding:18px 20px;font-family:'Montserrat',Arial,sans-serif;font-size:15px;line-height:1.6;color:#17201a;white-space:pre-wrap;">${escapeHtml(fields.project)}</td>
        </tr>
      </table>
    </div>`;

  return renderEmailShell({
    previewText: `New project inquiry from ${fields.fullName}`,
    eyebrow: "Internal Notification",
    heading: "New Project Inquiry",
    heroNote: "A visitor submitted the brief form on datasoft.co.tz — details below.",
    bodyHtml,
    footerNote: `Submitted ${submittedAt} (East Africa Time) · Sent automatically from the contact form at datasoft.co.tz`,
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    fullName,
    email,
    orgName,
    project,
    projectType,
    serviceInterest,
    layoutStatus,
    budget,
    timeline,
  } = req.body;

  if (!fullName || !email || !project) {
    return res
      .status(200)
      .json({ message: "Missing required fields.", success: false });
  }

  const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  try {
    await transporter.sendMail({
      ...mailOptions,
      replyTo: looksLikeEmail ? email : undefined,
      subject: `New Project Inquiry — ${fullName}`,
      html: buildEmailHtml({
        fullName,
        email,
        orgName,
        project,
        projectType,
        serviceInterest,
        layoutStatus,
        budget,
        timeline,
      }),
    });

    res.status(200).json({ message: "Mail Sent Successful", success: true });
  } catch (error: any) {
    console.log(error);
    res
      .status(200)
      .json({ message: "Mail Sent Failed, Try Later.", success: false });
  }
}
