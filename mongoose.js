import mongoose from "mongoose";

export const mongoosedatabse = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("Connected to database");
  } catch (error) {
    console.error(error);
  }
};

mongoosedatabse();
