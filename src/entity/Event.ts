import { Field, Float, ID, ObjectType } from 'type-graphql'
import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from 'typeorm'

@ObjectType()
@Entity()
export class Event extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number

	@Field()
	@Column()
	title: string

	@Field()
	@Column()
	description: string

	@Field(() => Float)
	@Column({ type: 'real' })
	price: string

	@Field(() => String)
	@Column()
	date: Date
}
