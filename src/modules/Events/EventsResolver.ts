import { Query, Resolver } from 'type-graphql'
import { Event } from '../../entity/Event'

@Resolver()
export default class EventsResolver {
	@Query(() => [Event])
	async events() {
		return Event.find()
	}
}
