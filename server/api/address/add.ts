import { defineEventHandler, readBody } from "h3";
import AddressModel from "@/server/models/Address";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const address = new AddressModel({
    userId: body.userId,
    fio: body.fio,
    companyName: body.companyName,
    region: body.region,
    city: body.city,
    street: body.street,
    index: body.index,
    houseNum: body.houseNum,
    number: body.number,
    email: body.email,
  });

  await address.save();

  return { message: "address added successfully" };
});
