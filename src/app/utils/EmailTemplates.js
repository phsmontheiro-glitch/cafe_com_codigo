export const templateBoasVindas = (nome, link) => {
    return `
    <div style="background-color: #0d1117; padding: 40px; font-family: 'Segoe UI', Tahoma, sans-serif; text-align: center;">
        <div style="max-width: 500px; margin: 0 auto; background-color: #161b22; border: 1px solid rgba(255, 152, 0, 0.5); border-radius: 8px; padding: 30px; box-shadow: 0 0 20px rgba(0,0,0,0.5);">
            
            <h1 style="color: #ff9800; font-size: 28px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 2px;">
                Olá, ${nome}! ☕
            </h1>
            
            <p style="color: #c9d1d9; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                E-mail cadastrado com sucesso! Agora só precisamos confirmar sua inscrição para você começar a receber as notícias mais quentes da tecnologia.
            </p>
            
            <div style="margin-bottom: 30px;">
                <a href="${link}" 
                   style="background-color: transparent; color: #ff9800; border: 2px solid #ff9800; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 25px; display: inline-block; text-transform: uppercase; transition: 0.3s;">
                   Confirmar Inscrição
                </a>
            </div>
            
            <p style="color: #8b949e; font-size: 12px; border-top: 1px solid #30363d; padding-top: 20px;">
                Se você não solicitou este e-mail, pode ignorá-lo com segurança.
            </p>
            
            <div style="margin-top: 10px; color: #ff9800; font-weight: bold; font-size: 14px;">
            Café com Código 
            </div>

            <p style="color: #586069; font-size: 11px; margin-top: 5px;">
            © 2026 Desenvolvedor - Pedro Monteiro
        </p>

        </div>
    </div>`;
}