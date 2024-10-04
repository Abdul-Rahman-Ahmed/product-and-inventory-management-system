const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
  {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    supplierID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    orderQuantity: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["Done", "Pending", "Canceled"],
    },
  },
  { timestamps: true }
);

const Orders = mongoose.model("Orders", ordersSchema);
module.exports = Orders;
