import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {

    definition: {
        openapi: "3.0.0",
        info: {
            title: "Google Keep.........",
            description: "This is the replica of google keep.User can register and login, user can do request for forgot password and he can reset password using that shared credentionals. User can login and perform note CRUD."
        },
        servers: [
            {
                url: "http://localhost:3000"
            },
        ],
        tags: [
            {
                "name": "Google keep using express CLI",
                "description": "This is the replica of google keep"
            }
        ],
    },
    apis: ["./src/routes/*.js"], // Point this to the correct files where you document your route

}

export const swaggerSpec = swaggerJsdoc(swaggerOptions);