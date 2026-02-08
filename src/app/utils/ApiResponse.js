class ApiResponse {
    static success(res, data, message = "Operação realizada com sucesso", status = 200) {
        return res.status(status).json({
            success: true,
            message,
            data
        }) 
    }

    static error(res, message = "Erro interno no servidor", status = 500, details = null) {
        return res.status(status).json({
            success: false,
            message,
            error: details
        }) 
    }
}

export default ApiResponse 
