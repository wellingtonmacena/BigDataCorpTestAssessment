import { Ticket } from "./Ticket";

export class Section   {
  public availableMaximumCount?: number = 0;
  public tickets!:Ticket[]
  constructor(
    public name: string,
    public id: string,
    public availableTicketsCount: number,
    public rowsCount: number,
    public collumnsCount: number,

  ) {
    this.availableMaximumCount = rowsCount! * collumnsCount!;
    this.tickets  =[];
  }


}
