
export class Ticket   {

  constructor(
    public id: string,
    public isSold: boolean,
    public seatCode: number,
    public section: number,
    public userId: number,
    public concertId: number,
  ) {

  }
}
