import { SectionInterface } from '../interfaces/SectionInterface';

export class Section implements SectionInterface {
  public availableMaximumCount: number;

  constructor(
    public name: string,
    public id: string,
    public availableTicketsCount: number,
    public rowsCount: number,
    public collumnsCount: number,

  ) {
    this.availableMaximumCount = rowsCount * collumnsCount;
  }
}
