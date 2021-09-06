const amqp = require('amqplib')

const msg = {number: 19}
connect();
async function connect() {
    try {
        const connection = await amqp.connect('amqp://localhost:5000')
        const channel = await connection.createChannel()
       const result = await channel.assertQueue('jobs')
       channel.sendToQueue('jobs', Buffer.from(JSON.stringify(msg)))
       console.log(`job sent successfully ${msg.number}`)

    }
    catch(ex) {
        console.error(ex)
    }

}

                         