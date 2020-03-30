import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [
    {
      id: '1',
      featured: true,
      title: 'Onward',
      description: 'Two teenage elf brothers, Ian and Barley Lightfoot, go on an journey to discover if there is still a little magic left out there in order to spend one last day with their father, who died when they were too young to remember him.',
      year: 2020,
      posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dj5nsOPEbkyr_Yn2TH5Aj7s4y0PazNrvx7HUJYoFa7KQZqqE',
      rating: 4.4
    },
    {
      id: '2',
      featured: true,
      title: 'Bloodshot',
      description: "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine - Bloodshot. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
      year: 2020,
      posterUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSk-Xjs0S4KVnLByZNpAT-oaFmzlcS8xVzJL9sGTXUIRw7s2aMh',
      rating: 5
    },
    {
      id: '3',
      featured: true,
      title: 'Titanic',
      description: "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
      year: 1997,
      posterUrl: 'https://1.bp.blogspot.com/-oFEkhHaUY24/XZRCFUedclI/AAAAAAAAFUE/j2HEPlHp6HoNk7BveDhfLoWHtIYtdkLkACLcBGAsYHQ/s1600/pic_quark_1569997226442.jpg',
      rating: 5
    },
    {
      id: '4',
      featured: true,
      title: '1917',
      description: "During World War I, two British soldiers -- Lance Cpl. Schofield and Lance Cpl. Blake -- receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver a message that could potentially save 1,600 of their fellow comrades -- including Blake's own brother.",
      year: 2020,
      posterUrl: 'https://assets1.ignimgs.com/2019/09/30/1917-button-1569856860793.jpg',
      rating: 4
    }
  ];

  constructor() { }

  public getMovies(): Movie[] {
    return this.movies;
  }

  public getMovie(id: string): Movie {
    return this.movies.filter(m => m.id === id)[0];
  }

  public feature(id: string) {
    this.getMovie(id).featured = true;
  }

  public hide(id: string) {
    this.getMovie(id).featured = false;
  }

  public updateMovie(id: string, update: { title: string, description: string, year: number}) {
    const movie = this.getMovie(id);
    movie.title = update.title;
    movie.description = update.description;
    movie.year = update.year;
  }

}

export type Movie = {
  id: string;
  featured: boolean;
  title: string;
  description: string;
  year: number;
  posterUrl: string;
  rating: number;
};
