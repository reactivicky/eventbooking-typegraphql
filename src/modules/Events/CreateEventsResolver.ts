import { EventInput } from './EventsInputs/EventInput'
import { Arg, Mutation } from 'type-graphql'
import { v4 } from 'uuid'

import { Event } from '../../entity/Event'
import { events } from '../../index'

export default class CreateEventsResolver {
	@Mutation(() => Event)
	async createEvent(
		@Arg('event') { title, description, price, date }: EventInput
	) {
		const event = {
			_id: v4(),
			title,
			description,
			price: +price,
			date,
		}

		events.push(event)

		return event
	}
}
