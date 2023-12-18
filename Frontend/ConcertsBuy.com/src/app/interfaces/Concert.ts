import { Section } from './../models/Section';

export interface Concert {
  name: string
  id: string
  date: string
  availableTicketsCount:number,
  idOwner:string
  imageCover:string
  location:string
  sections:Section[]
  sectionCount:number
}
