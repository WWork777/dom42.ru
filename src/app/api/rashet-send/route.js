import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json(); // Получаем данные из тела запроса
    // ИСПРАВЛЕНО: Добавили projectName, чтобы код не падал с ошибкой
    const { project, address, phone } = body; 

    const CHAT_ID = "-4219352649"; // Замените на ваш Chat ID
    const BOT_TOKEN = "8410661760:AAGE0zRPTvzVzJOvy_DjfFsqZJCLe-jmMcM"; // Напоминаю: лучше убрать в .env
    const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    // Формируем текст для Telegram (разрешен HTML)
    const text = `
📌 <b>Новая заявка на расчет Дом42</b>
${project ? `🏠 <b>Проект:</b> ${project}` : ''}
📍 <b>Адрес:</b> ${address}
📞 <b>Телефон:</b> ${phone}
    `.trim();

    // Формируем текст для WhatsApp (HTML не работает, используем * для жирного шрифта)
    const maxText = `
📌 Новая заявка на расчет Дом42
${project ? `🏠 *Проект:* ${project}` : ''}
📍 Адрес: ${address}
📞 Телефон: ${phone}
    `.trim();

    let maxSuccess = false;
    let tgSuccess = false;

    const idInstance = '3100517801';
    const apiTokenInstance = '4e23b210658549c881680633b93bb11301a0f304a927433da6';

    // Отправка в WhatsApp
    try {
      const maxRes = await fetch(`https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatId: `79235088330@c.us`, message: maxText }),
      });
      maxSuccess = maxRes.ok;
    } catch (e) { 
      console.error("WA Error:", e); 
    }

    // Отправка в Telegram
    try {
      await axios.post(TELEGRAM_API_URL, { 
        chat_id: CHAT_ID, 
        text: text, 
        parse_mode: "HTML" 
      });
      tgSuccess = true;
    } catch (e) { 
      console.error("TG Error:", e); 
    }

    // Если ни один канал не сработал
    if (!maxSuccess && !tgSuccess) {
      throw new Error("Ошибка при отправке во все каналы");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Заявка отправлена!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Общая ошибка API:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Ошибка при отправке заявки" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}