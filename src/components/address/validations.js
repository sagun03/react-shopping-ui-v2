import { isValid, z } from "zod"

const addressSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  mobile: z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits"),
  pincode: z.string().regex(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, "Invalid pincode"),
  street: z.string().min(5, "Street must be at least 5 characters"),
  city: z.string().min(3, "City must be at least 3 characters"),
  state: z.string().min(3, "State must be at least 3 characters")
})

export const performValidations = (state) => {
  try {
    const result = addressSchema.parse({
      name: state.contact.name,
      mobile: state.contact.mobile,
      pincode: state.address.pincode,
      street: state.address.street,
      city: state.address.city,
      state: state.address.state
    })
    return {
      isValid: true,
      data: result
    }
  } catch (error) {
    return {
      isValid: false,
      errors: error.errors
    }
  }
}
