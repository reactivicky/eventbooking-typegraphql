import { Field, Float, InputType } from 'type-graphql'

@InputType()
export class EventInput {
	@Field()
	title: string

	@Field()
	description: string

	@Field(() => Float)
	price: number

	@Field(() => String)
	date: Date
}
