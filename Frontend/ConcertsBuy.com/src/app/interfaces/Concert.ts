import { SectionInterface } from "./SectionInterface"

export interface Concert {
  name: string
  id: string
  date: string
  availableTicketsCount:number,
  idOwner:string
  imageCover:string
  location:string
  sections:SectionInterface[]
}
