import { User } from "../models/user.model.js";

export const SetValue = async (req, res) => {
  try {
    const { value } = req.body;
    if (!value) {
      return res.status(400).json({ message: "Value is required" });
    }
    let user = await User.findOne({ type: "servomotor" });

    if (user) {
      
      user.value = value.toString(); 
      await user.save();
    } else {
      user = new User({ type: "servomotor", value: value.toString() });
      await user.save();
    }

    return res.status(200).json({
      message: "Value saved successfully",
    });
  } catch (error) {
    console.error("Error saving value:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


