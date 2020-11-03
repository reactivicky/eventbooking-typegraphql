import 'reflect-metadata'
import express from 'express'
import { createSchema } from './utils/createSchema'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'

import { Event } from 'src/entity/Event'
// import { createConnection } from 'typeorm'

export const events: Event[] = []

const main = async () => {
	// await createConnection()

	const schema = await createSchema()

	const server = new ApolloServer({
		schema,
		context: ({ req, res }: any) => ({ req, res }),
	})

	const app = express()
	app.use(
		cors({
			credentials: true,
			origin: 'http://localhost:3000',
		})
	)

	server.applyMiddleware({ app })

	app.listen({ port: 4000 }, () =>
		console.log(`🚀 Server ready at http://localhost:4000/graphql`)
	)
}

main()
