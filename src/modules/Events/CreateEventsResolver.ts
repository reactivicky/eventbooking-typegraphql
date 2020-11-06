import { EventInput } from './EventsInputs/EventInput'
import { Arg, Mutation } from 'type-graphql'

import { Event } from '../../entity/Event'

export default class CreateEventsResolver {
	@Mutation(() => Event)
	async createEvent(
		@Arg('event') { title, description, price, date }: EventInput
	): Promise<Event> {
		const event = await Event.create({
			title,
			description,
			price: price as any,
			date,
		}).save()

		return event
	}
}
