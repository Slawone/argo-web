const sendPhp = async (req) => {
  const data = await req.json();

  // Получаем URL PHP с env
  const PHP_URL = process.env.SEND_PHP_URL;

  // Пересылаем данные на PHP
  const response = await fetch(PHP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return new Response(JSON.stringify(result), { status: 200 });
};

export const POST = sendPhp;
