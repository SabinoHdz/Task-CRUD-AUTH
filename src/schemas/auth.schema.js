const z = require("zod");
const registerSchema = z.object({
  username: z
    .string({
      required_error: "username is required",
    })
    .min(2)
    .max(50),
  email: z.string({ required_error: "email is required" }).email({
    message: "invalid email",
  }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(8, {
      message: "password must be at least 8 characters",
    })
    .max(36),
});

const loginSchema = z.object({
  email: z.string({ required_error: "email is required" }).email({
    message: "invalid email",
  }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(8, {
      message: "password must be at least 8 characters",
    })
    .max(36),
});

module.exports = { registerSchema, loginSchema };
