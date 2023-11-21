const TOKEN = "6537642931:AAE5yLS0ufYcaGmshynCIwurVwrP6XyVRbc";
        const CHAT_ID = "-1001990460320";
        const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;




        document
            .querySelector("#footer__form")
            .addEventListener("submit", async function (e) {
                console.log('fsdk')
                e.preventDefault();
                let message = `<b>Форма отправки футера</b>\n`;
                message += `<b>Сообщение:</b>  ${this.comment.value}\n\n`;
                message += `<b>Имя:</b> ${this.name.value}\n`;
                message += `<b>Номер телефона:</b> ${this.phone.value}\n`;
                await axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message
                });
                window.location.href = 'thanks.html'
            });

            document
            .querySelector("#recall__form")
            .addEventListener("submit", async function (e) {
                console.log('fsdk')
                e.preventDefault();
                let message = `<b>Форма отправки связаться с нами</b>\n\n`;
                message += `<b>Имя:</b>  ${this.name.value}\n`;
                message += `<b>Номер телефона:</b> ${this.phone.value}\n`;
              await  axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message
                });
                window.location.href = 'thanks.html'
            });

           