import _ from "lodash";
import db from "../../lib/db";

// import config from "../../lib/config";

export default async function handler(req, res) {
  try {
    const { method } = req;

    switch (method) {
      case "POST": {
        const data = req.body;

        console.log("Data received - %j", data);
        if (
          _.some(
            ["name", "phoneNumber", "address", "email"],
            (key) => !_.has(data, key)
          ) ||
          _.isEmpty(data.tasks)
        ) {
          return res.status(400).json({
            success: false,
            error: "Incorrect Data",
          });
        }

        await db.insert("lead", { ...data, tasks: JSON.stringify(data.tasks) });

        return res.status(200).json({ success: true });
      }
      default:
        return res.status(400).json({ error: "Not found" });
    }
  } catch (error) {
    console.log("Error: %j", {
      message: error.message,
      stack: error.stack,
      error,
    });

    return res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
}
