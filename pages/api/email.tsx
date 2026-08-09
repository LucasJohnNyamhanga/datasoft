// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../app/Config/nodeMailer";

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

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Email From Datasoft Customer Service",
      text: "datasoft.co.tz",
      html: `<h1>Full Name:</h1><p> ${fullName} </p><p/>
        <h1>Email or Phone Number:</h1><p> ${email} </p><p/>
        <h1>Organisation Name:</h1><p> ${orgName} </p><p/>
        <h1>Project Type:</h1><p> ${projectType || "—"} </p><p/>
        <h1>Service Interest:</h1><p> ${serviceInterest || "—"} </p><p/>
        <h1>Existing Layout/Design:</h1><p> ${layoutStatus || "—"} </p><p/>
        <h1>Budget:</h1><p> ${budget || "—"} </p><p/>
        <h1>Timeline:</h1><p> ${timeline || "—"} </p><p/>
        <h1>Project Details</h1><p> ${project} </p><p/>
        `,
    });

    res.status(200).json({ message: "Mail Sent Successful", success: true });
  } catch (error: any) {
    console.log(error);
    res
      .status(200)
      .json({ message: "Mail Sent Failed, Try Later.", success: false });
  }
}
