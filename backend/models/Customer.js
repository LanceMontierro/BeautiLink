import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  totalVisit: { type: Number, default: 0 },
  lastVisit: { type: Date, default: null },
  preferences: [String],
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
