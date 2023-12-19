import { Ticket } from "./Ticket";

export class Section   {
  public availableMaximumCount: number;
  public rowsCount: number;
  public collumnsCount: number;
  public availableTicketsCount: number;
  constructor(
    public name: string,
    public id: string,
    public tickets:Ticket[]

  ) {
    this.availableMaximumCount = 0;
    this.rowsCount = 0;
    this.collumnsCount = 0;
    this.availableTicketsCount = 0;
  }
}
