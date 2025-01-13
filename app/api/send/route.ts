import { Resend } from 'resend';
import { type NextRequest } from 'next/server';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

function createEmailHTML(
  name: string,
  phone: string,
  email: string,
  subject: string,
  message: string,
) {
  const formattedPhone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

  return `
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novo Contato - Site da Advogada</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #ffffff;
            margin: 0;
            padding: 0;
            background-color: #121212;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #1e1e1e;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #60a5fa;
            color: #ffffff;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            padding: 20px;
        }
        .footer {
            background-color: #2a2a2a;
            color: #a0a0a0;
            text-align: center;
            padding: 10px;
            border-radius: 0 0 8px 8px;
            font-size: 12px;
        }
        h1 {
            color: #ffffff;
            margin: 0;
            font-size: 24px;
        }
        .field {
            margin-bottom: 20px;
            border-left: 3px solid #60a5fa;
            padding-left: 15px;
        }
        .field-label {
            font-weight: bold;
            color: #60a5fa;
            margin-bottom: 5px;
        }
        .field-value {
            background-color: #2a2a2a;
            padding: 10px;
            border-radius: 4px;
        }
        @media only screen and (max-width: 600px) {
            .container {
                width: 100%;
                margin: 0;
                border-radius: 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Novo Contato Recebido</h1>
        </div>
        <div class="content">
            <p>Prezado, Jeferson</p>
            
            <p>Uma nova mensagem foi recebida através do seu site. Seguem os detalhes do contato:</p>

            <div class="field">
                <div class="field-label">Nome:</div>
                <div class="field-value">${name}</div>
            </div>

            <div class="field">
                <div class="field-label">E-mail:</div>
                <div class="field-value">${email}</div>
            </div>

            <div class="field">
                <div class="field-label">Telefone:</div>
                <div class="field-value">${formattedPhone}</div>
            </div>

            <div class="field">
                <div class="field-label">Assunto:</div>
                <div class="field-value">${subject}</div>
            </div>

            <div class="field">
                <div class="field-label">Mensagem:</div>
                <div class="field-value">${message}</div>
            </div>

            <p>Recomenda-se entrar em contato com ${name} assim que possível para oferecer a assistência necessária.</p>

            <p>Atenciosamente,<br>Sistema de Contato do Site</p>
        </div>
        <div class="footer">
            Este e-mail foi gerado automaticamente. Por favor, não responda diretamente a esta mensagem.
        </div>
    </div>
</body>
</html>
  `;
}

export async function POST(req: NextRequest) {
  const { name, phone, email, subject, message } = await req.json();

  const html = createEmailHTML(name, phone, email, subject, message);

  try {
    const { data, error } = await resend.emails.send({
      from: `Contato <no-reply@jeffymesquita.dev>`,
      to: ['je_2742@hotmail.com', 'jefejefe274227@gmail.com'],
      subject: subject,
      html: html,
    });

    if (error) {
      return {
        status: 500,
        body: { error },
      };
    }

    return {
      status: 200,
      body: { data },
    };
  } catch (error) {
    return {
      status: 500,
      body: { error },
    };
  }
}
