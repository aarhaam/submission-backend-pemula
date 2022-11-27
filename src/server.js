const Hapi = require('@hapi/hapi')

const init = async() => {
    const server = () => ({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    })

    await server.start()
    console.log('server sedang berjalan')
}

init();