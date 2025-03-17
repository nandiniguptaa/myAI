import { NextApiRequest, NextApiResponse } from "next";
import { getUserQueries } from "@/actions/streaming"; // Adjust path based on location

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({ queries: getUserQueries() });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
