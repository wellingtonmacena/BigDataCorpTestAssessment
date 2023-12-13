import { SectionInterface } from '../interfaces/SectionInterface';

export class Section implements SectionInterface {
  public availableMaximumCount: number;
  public collumns: number[];
  public rows: number[];

  constructor(
    public name: string,
    public id: string,
    public availableTicketsCount: number,
    public rowsCount: number,
    public collumnsCount: number,

  ) {
    this.availableMaximumCount = rowsCount * collumnsCount;
    this.collumns  = [];
    this.rows  = [];

    for (let index = 0; index < rowsCount; index++) {
      this.rows.push(index+1);
    }

    for (let index = 0; index < collumnsCount; index++) {
      this.collumns.push(index+1);
    }
  }
}
