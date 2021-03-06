import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm'
import { Route } from './route'
import { User } from './user'

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({
    unique: true,
    length: 80
  })
  public name: string

  @Column({
    length: 80
  })
  public description: string

  @ManyToMany(type => Route, route => route.roles)
  public routes: Route[]

  @ManyToMany(type => User, user => user.roles)
  public user: User[]
}