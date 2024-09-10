import { Schema, model } from "mongoose";
import type { Address } from "@/types/Address";

const AddressSchema = new Schema<Address>({
  userId: { type: String, required: true },
  fio: { type: String, required: true },
  companyName: { type: String },
  region: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  index: { type: Number, required: true },
  houseNum: { type: String, required: true },
  number: { type: String, required: true },
});

const AddressModel = model<Address>("Address", AddressSchema);

export default AddressModel;
