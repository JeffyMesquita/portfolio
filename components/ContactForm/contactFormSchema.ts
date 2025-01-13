import * as z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string({
      required_error: "Por favor, insira um nome",
      description: "Nome",
    })
    .min(3, "O nome deve ter no mínimo 3 caracteres"),
  email: z
    .string({
      required_error: "Por favor, insira um e-mail",
      description: "E-mail",
    })
    .email("Por favor, insira um e-mail válido"),
  phone: z
    .string({
      required_error: "Por favor, insira um telefone",
      description: "Telefone",
    })
    .min(14, "O telefone deve ter no mínimo 14 caracteres"),
  subject: z
    .string({
      required_error: "Por favor, insira um assunto",
      description: "Assunto",
    })
    .min(3, "O assunto deve ter no mínimo 3 caracteres")
    .max(25, "O assunto deve ter no máximo 25 caracteres"),
  message: z
    .string({
      required_error: "Por favor, insira uma mensagem",
      description: "Mensagem",
    })
    .min(10, "A mensagem deve ter no mínimo 10 caracteres"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
