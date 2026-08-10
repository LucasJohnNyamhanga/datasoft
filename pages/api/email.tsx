// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../app/Config/nodeMailer";

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

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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
    .map(
      (key) => `
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid #e9dfc4;">
          <p style="margin:0 0 4px;font-family:'Montserrat',Arial,sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#8a6b12;font-weight:700;">
            ${briefLabels[key]}
          </p>
          <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-size:15px;color:#17201a;font-weight:600;">
            ${resolveBriefValue(key, fields[key] as string)}
          </p>
        </td>
      </tr>`,
    )
    .join("");

  const detailRow = (label: string, value: string) => `
      <tr>
        <td style="padding:10px 0;width:38%;font-family:'Montserrat',Arial,sans-serif;font-size:13px;color:#59645c;vertical-align:top;">
          ${label}
        </td>
        <td style="padding:10px 0;font-family:'Montserrat',Arial,sans-serif;font-size:15px;color:#17201a;font-weight:600;vertical-align:top;">
          ${value}
        </td>
      </tr>`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Project Inquiry</title>
  </head>
  <body style="margin:0;padding:0;background-color:#e9dfc4;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#e9dfc4;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:#fbf6e7;border-radius:12px;overflow:hidden;box-shadow:0 20px 50px rgba(13,44,78,0.18);">

            <tr>
              <td style="background:linear-gradient(135deg,#163f6d 0%,#0d2c4e 60%);padding:40px 40px 32px;">
                <p style="margin:0 0 10px;font-family:'Montserrat',Arial,sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#f0c550;font-weight:700;">
                  DataSoft Tanzania
                </p>
                <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.3;color:#fbf6e7;font-weight:400;">
                  New Project Inquiry
                </h1>
                <div style="margin-top:18px;height:2px;width:64px;background:linear-gradient(135deg,#f0c550 0%,#d4a017 65%);"></div>
              </td>
            </tr>

            <tr>
              <td style="padding:36px 40px 8px;">
                <p style="margin:0 0 18px;font-family:'Montserrat',Arial,sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#591421;font-weight:700;">
                  Client Details
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${detailRow("Full Name", escapeHtml(fields.fullName))}
                  ${detailRow("Phone / Email", escapeHtml(fields.email))}
                  ${detailRow("Organisation", fields.orgName ? escapeHtml(fields.orgName) : "—")}
                </table>
              </td>
            </tr>

            ${
              briefRows
                ? `<tr>
              <td style="padding:20px 40px 8px;">
                <p style="margin:0 0 4px;font-family:'Montserrat',Arial,sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#591421;font-weight:700;">
                  Project Brief
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${briefRows}
                </table>
              </td>
            </tr>`
                : ""
            }

            <tr>
              <td style="padding:28px 40px 40px;">
                <p style="margin:0 0 10px;font-family:'Montserrat',Arial,sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#591421;font-weight:700;">
                  Project Details
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color:#ffffff;border:1px solid #e9dfc4;border-left:3px solid #d4a017;border-radius:8px;padding:18px 20px;font-family:'Montserrat',Arial,sans-serif;font-size:15px;line-height:1.6;color:#17201a;white-space:pre-wrap;">${escapeHtml(fields.project)}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="background:linear-gradient(165deg,#642233 0%,#591421 55%,#4c1119 100%);padding:24px 40px;">
                <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-size:12px;color:#e9c7ce;">
                  Submitted ${escapeHtml(submittedAt)} (East Africa Time)
                </p>
                <p style="margin:6px 0 0;font-family:'Montserrat',Arial,sans-serif;font-size:12px;color:#c9455f;">
                  Sent automatically from the contact form at datasoft.co.tz
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
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
