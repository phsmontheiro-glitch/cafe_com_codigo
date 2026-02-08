import axios from 'axios' 

class NoticiasService {
    async prepararConteudoJornal() {
        try {
            //* NEWSAPI principal
           const query = encodeURIComponent('(programação OR software OR "inteligência artificial" OR gadget OR startup) AND NOT (medicina OR planta OR agricultura)') 
           const res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&language=pt&sortBy=relevancy&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`, {
            headers: { 'User-Agent': 'CafeComCodigoApp' }
        }) 

            let noticiasRaw = res.data.articles 

            if (!noticiasRaw || noticiasRaw.length === 0) throw new Error("NewsAPI vazia") 

            return this.formatarRetorno(noticiasRaw) 

        } catch (error) {
            console.log("NewsAPI não trouxe nada em PT. Buscando o TOP GLOBAL na Dev.to (Inglês aceito!)...") 
            
            try {
            //* DEV.TO suporte
                const resDev = await axios.get('https://dev.to/api/articles?top=1&per_page=5') 
                
                const noticiasDev = resDev.data.map(a => ({
                    title: a.title,
                    description: a.description,
                    urlToImage: a.social_image || a.cover_image || "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v882y1696vdf6u9p1y67.png",
                    url: a.url
                })) 

                return this.formatarRetorno(noticiasDev) 

            } catch (err) {
                return this.conteudoPadrao() 
            }
        }
    }

    formatarRetorno(noticias) {
        return {
            data: new Date().toLocaleDateString('pt-BR'),
            sumario: noticias.map(n => n.title),
            noticias: noticias
        } 
    }

    conteudoPadrao() {
        return {
            data: new Date().toLocaleDateString('pt-BR'),
            sumario: ["O Café está quentinho! ☕"],
            noticias: [{
                title: "Nenhum bug encontrado, apenas café!",
                description: "As APIs de notícias estão em manutenção, mas seu jornal continua firme. Aproveite para revisar seus códigos!",
                urlToImage: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe",
                url: "#"
            }]
        } 
    }
}

export default new NoticiasService() 
