import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, projectName } = body;

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, message: "Email обязателен" }),
        { status: 400 },
      );
    }

    const CHAT_ID = "-4219352649";
    const BOT_TOKEN = "8410661760:AAGE0zRPTvzVzJOvy_DjfFsqZJCLe-jmMcM";

    // Текст для ТГ
    const text = `
📩 <b>Запрос сравнения (Email)</b>
🏠 <b>Источник:</b> ${projectName}
📧 <b>Email:</b> ${email}
    `.trim();

    // Текст для WhatsApp
    const maxText = `
📩 Запрос сравнения (Email)
🏠 Источник: ${projectName}
📧 Email: ${email}
    `.trim();

    const idInstance = "3100517801";
    const apiTokenInstance =
      "4e23b210658549c881680633b93bb11301a0f304a927433da6";

    // Параллельная отправка
    await Promise.allSettled([
      // WhatsApp
      fetch(
        `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chatId: `79235088330@c.us`,
            message: maxText,
          }),
        },
      ),
      // Telegram
      axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "HTML",
      }),
    ]);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
