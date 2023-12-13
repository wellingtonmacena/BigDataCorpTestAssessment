import { Injectable } from '@angular/core';
import { Concert } from '../interfaces/Concert';
import axios from 'axios';

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

  async getConcert(id:String):Promise<Concert>{

    let response = await axios({
      method:'get',
      url:`https://6579f3cf1acd268f9afa76ca.mockapi.io/api/v1/concerts/${id}`
    })

    return response.data
  }

}
