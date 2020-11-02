import { Arg, Mutation } from 'type-graphql'

export default class CreateEventsResolver {
	@Mutation(() => String)
	async createEvent(@Arg('name') name: string) {
		return name
	}
}
