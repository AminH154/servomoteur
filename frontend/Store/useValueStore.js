import { create } from "zustand";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "./../lib/axios";

export const useValueStore = create(() => ({
  SetValue: async (valueObj) => {
    try {
        console.log("Value object:", valueObj);
      await axiosInstance.post("/value/setValue", valueObj);
      toast.success("Value added successfully");
    } catch (error) {
      console.error("Error fetching value:", error);
      toast.error("Error adding value");
    }
  },
}));
