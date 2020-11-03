import { Query, Resolver } from 'type-graphql'
import { Event } from '../../entity/Event'
import { events } from '../../index'

@Resolver()
export default class EventsResolver {
	@Query(() => [Event])
	async events() {
		return events
	}
}
