export const gerarHtmlJornal = (dadosJornal, nomeUsuario, emailUsuario) => {
    const { data, sumario, noticias } = dadosJornal;

    //* Estilizando os tópicos do sumário
    const htmlSumario = sumario.map(topico => 
        `<li style="margin-bottom: 8px;">🔥 ${topico}</li>`
    ).join('')

    //* Estilizando as notícias detalhadas
    const htmlNoticias = noticias.map(n => `
        <div style="margin-bottom: 40px; padding-top: 20px; border-top: 1px solid #333;">
            <img src="${n.urlToImage}" style="width: 100%; border-radius: 12px; margin-bottom: 15px;">
            <h2 style="font-size: 22px; color: #ffffff; margin: 0 0 10px 0;">${n.title}</h2>
            <p style="color: #aaaaaa; line-height: 1.6; font-size: 16px;">${n.description}</p>
            <a href="${n.url}" style="color: #ff9800; text-decoration: none; font-weight: bold;">Ler matéria completa...</a>
        </div>
    `).join('')

    return `
        <div style="background-color: #0d1117; color: #ffffff; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px 20px;">
            <div style="max-width: 600px; margin: 0 auto;">
                <header style="text-align: center; margin-bottom: 30px;">
                    <p style="color: #8b949e; font-size: 12px; text-transform: uppercase;">${data} | Edição Semanal</p>
                    <h1 style="color: #ff9800; font-size: 32px; margin: 10px 0;">☕ Café com Código</h1>
                    <p style="color: #c9d1d9;">Olá, ${nomeUsuario}! Pegue seu café e confira o que rolou no mundo tech.</p>
                </header>

                <div style="background-color: #161b22; border-left: 4px solid #ff9800; padding: 20px; margin-bottom: 40px; border-radius: 4px;">
                    <h3 style="margin-top: 0; color: #ff9800;">🎯 No radar de hoje:</h3>
                    <ul style="list-style: none; padding: 0; color: #c9d1d9; font-size: 15px;">
                        ${htmlSumario}
                    </ul>
                </div>

                ${htmlNoticias}

            <footer style="margin-top: 50px; text-align: center; border-top: 1px solid #333; padding-top: 20px;">
                <div style="background-color: #21262d; padding: 15px; border-radius: 8px; display: inline-block;">
        <a href="http://localhost:3000/descadastrar/${emailUsuario}" 
           style="color: #f85149; text-decoration: none; font-size: 14px; font-weight: bold;">
           Cancelar Inscrição
        </a>
    </div>

    <p style="color: #8b949e; font-size: 10px; margin-top: 20px;">
        Este jornal é enviado semanalmente para os inscritos do Café com Código.<br>
        Fontes: NewsAPI / Dev.to
        </p>
        <p style="color: #586069; font-size: 11px; margin-top: 5px;">
            © 2026 Desenvolvedor Pedro Monteiro
        </p>
        </footer>
            </div>
        </div>`
}
