import { Query, Resolver } from 'type-graphql'

@Resolver()
export default class EventsResolver {
	@Query(() => [String])
	async events() {
		return ['Romantic Cooking!', 'Sailing', 'All-Night Coding']
	}
}
