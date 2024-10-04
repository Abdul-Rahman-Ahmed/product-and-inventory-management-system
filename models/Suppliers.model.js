const mongoose = require("mongoose");

const suppliersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Suppliers = mongoose.model("Suppliers", suppliersSchema);
module.exports = Suppliers;
