const requestLogger = (request, response, next) => {
    console.log("Metodi: ", request.method)
    console.log("Polku: ", request.path)
    console.log("Runko: ", request.body)
    console.log("---")
    next()
}

const unknownEndpoints = (request, response, next) => {
    response.status(404).send({error: "tuntematon päätepiste"})
}

const errorHandler = (error, request, response, next) => {
    console.log(error.message)

    if (error.name === "CastError" && error.kind === "ObjectId") {
        return response.status(400).send({error: "epämuodostunut id"})
    } else if (error.name === "ValidationError") {
        return response.status(400).json({error: error.message})
    }

    next(error)
}

module.exports = {
    requestLogger,
    unknownEndpoints,
    errorHandler
}