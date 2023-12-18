import { Injectable } from '@angular/core';
import { Concert } from '../interfaces/Concert';
import axios from 'axios';
import { Ticket } from '../models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class ConcertsService{

  constructor() { }

  async getAllConcerts():Promise<Concert[]>{

    let response = await axios({
      method:'get',
      url:'https://6579f3cf1acd268f9afa76ca.mockapi.io/api/v1/concerts'
    })

    return response.data
  }

  async getAllTicketsByConcertId(id: string):Promise<Ticket[]>{

    let response = await axios({
      method:'get',
      //url:'https://6579f3cf1acd268f9afa76ca.mockapi.io/api/v1/tickets'
      url: 'https://091bf8a7-8d49-4c9e-bf33-a93195ce4313.mock.pstmn.io'
    })

    return response.data
  }

  async getConcertById(id:String):Promise<Concert>{

    let response = await axios({
      method:'get',
      url:`https://6579f3cf1acd268f9afa76ca.mockapi.io/api/v1/concerts/${id}`
    })

    return response.data
  }

}
