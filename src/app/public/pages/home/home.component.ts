import { Component, OnInit } from '@angular/core';
import { ParishService } from '../../service/parish.service';
import { Parish } from '../../models/parish';
import { SkillsService } from '../../service/skills.service';
import { Skills } from '../../models/skills';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  workers = [
    {
      name: 'Sam Baker',
      cell: '8767826546',
      image:
        'https://www.axa.co.uk/globalassets/new-website/business/carpenters/carpenter_v2_masthead.jpg?width=1600&mode=crop&heightratio=0.5625&quality=80',
      skill: 'Carpenter',
      location: 'St. Catherine',
      rate: 7500,
      rateType: 'Day',
      rateNegotiable: true,
      rating: 4.5,
      reviews: 52,
    },
    {
      name: 'David Bannings',
      cell: '8764528797',
      image:
        'https://nigerianprice.com/wp-content/uploads/2022/05/cost-of-painting-nigeria.jpg',
      skill: 'Painter',
      location: 'Kingston',
      rate: 3100,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 3.2,
      reviews: 12,
    },
    {
      name: 'Sheldon White',
      cell: '8762348936',
      image:
        'https://www.neit.edu/wp-content/uploads/2021/06/Types-of-Electricians-1024x633.jpg',
      skill: 'Electrician',
      location: 'St. James',
      rate: 3500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 2.5,
      reviews: 32,
    },
    {
      name: 'Paul Bartley',
      cell: '8768736523',
      image: 'https://www.orkin.com.jm/wp-content/uploads/2018/09/image2.jpg',
      skill: 'Pest Control',
      location: 'Westmoreland',
      rate: 5500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 4.8,
      reviews: 61,
    },
    {
      name: 'Sam Baker',
      cell: '8767826546',
      image:
        'https://www.axa.co.uk/globalassets/new-website/business/carpenters/carpenter_v2_masthead.jpg?width=1600&mode=crop&heightratio=0.5625&quality=80',
      skill: 'Carpenter',
      location: 'Kingston',
      rate: 7500,
      rateType: 'Day',
      rateNegotiable: true,
      rating: 4.5,
      reviews: 52,
    },
    {
      name: 'David Bannings',
      cell: '8764528797',
      image:
        'https://nigerianprice.com/wp-content/uploads/2022/05/cost-of-painting-nigeria.jpg',
      skill: 'Painter',
      location: 'Kingston',
      rate: 3100,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 3.2,
      reviews: 12,
    },
    {
      name: 'Sheldon White',
      cell: '8762348936',
      image:
        'https://www.neit.edu/wp-content/uploads/2021/06/Types-of-Electricians-1024x633.jpg',
      skill: 'Electrician',
      location: 'Kingston',
      rate: 3500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 2.5,
      reviews: 32,
    },
    {
      name: 'Paul Bartley',
      cell: '8768736523',
      image: 'https://www.orkin.com.jm/wp-content/uploads/2018/09/image2.jpg',
      skill: 'Pest Control',
      location: 'Kingston',
      rate: 5500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 4.8,
      reviews: 61,
    },
    {
      name: 'Sam Baker',
      cell: '8767826546',
      image:
        'https://www.axa.co.uk/globalassets/new-website/business/carpenters/carpenter_v2_masthead.jpg?width=1600&mode=crop&heightratio=0.5625&quality=80',
      skill: 'Carpenter',
      location: 'Kingston',
      rate: 7500,
      rateType: 'Day',
      rateNegotiable: true,
      rating: 4.5,
      reviews: 52,
    },
    {
      name: 'David Bannings',
      cell: '8764528797',
      image:
        'https://nigerianprice.com/wp-content/uploads/2022/05/cost-of-painting-nigeria.jpg',
      skill: 'Painter',
      location: 'Kingston',
      rate: 3100,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 3.2,
      reviews: 12,
    },
    {
      name: 'Sheldon White',
      cell: '8762348936',
      image:
        'https://www.neit.edu/wp-content/uploads/2021/06/Types-of-Electricians-1024x633.jpg',
      skill: 'Electrician',
      location: 'Kingston',
      rate: 3500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 2.5,
      reviews: 32,
    },
    {
      name: 'Paul Bartley',
      cell: '8768736523',
      image: 'https://www.orkin.com.jm/wp-content/uploads/2018/09/image2.jpg',
      skill: 'Pest Control',
      location: 'Kingston',
      rate: 5500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 4.8,
      reviews: 61,
    },
    {
      name: 'Sam Baker',
      cell: '8767826546',
      image:
        'https://www.axa.co.uk/globalassets/new-website/business/carpenters/carpenter_v2_masthead.jpg?width=1600&mode=crop&heightratio=0.5625&quality=80',
      skill: 'Carpenter',
      location: 'Kingston',
      rate: 7500,
      rateType: 'Day',
      rateNegotiable: true,
      rating: 4.5,
      reviews: 52,
    },
    {
      name: 'David Bannings',
      cell: '8764528797',
      image:
        'https://nigerianprice.com/wp-content/uploads/2022/05/cost-of-painting-nigeria.jpg',
      skill: 'Painter',
      location: 'Kingston',
      rate: 3100,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 3.2,
      reviews: 12,
    },
    {
      name: 'Sheldon White',
      cell: '8762348936',
      image:
        'https://www.neit.edu/wp-content/uploads/2021/06/Types-of-Electricians-1024x633.jpg',
      skill: 'Electrician',
      location: 'Kingston',
      rate: 3500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 2.5,
      reviews: 32,
    },
    {
      name: 'Paul Bartley',
      cell: '8768736523',
      image: 'https://www.orkin.com.jm/wp-content/uploads/2018/09/image2.jpg',
      skill: 'Pest Control',
      location: 'Kingston',
      rate: 5500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 4.8,
      reviews: 61,
    },
    {
      name: 'Sam Baker',
      cell: '8767826546',
      image:
        'https://www.axa.co.uk/globalassets/new-website/business/carpenters/carpenter_v2_masthead.jpg?width=1600&mode=crop&heightratio=0.5625&quality=80',
      skill: 'Carpenter',
      location: 'Kingston',
      rate: 7500,
      rateType: 'Day',
      rateNegotiable: true,
      rating: 4.5,
      reviews: 52,
    },
    {
      name: 'David Bannings',
      cell: '8764528797',
      image:
        'https://nigerianprice.com/wp-content/uploads/2022/05/cost-of-painting-nigeria.jpg',
      skill: 'Painter',
      location: 'Kingston',
      rate: 3100,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 3.2,
      reviews: 12,
    },
    {
      name: 'Sheldon White',
      cell: '8762348936',
      image:
        'https://www.neit.edu/wp-content/uploads/2021/06/Types-of-Electricians-1024x633.jpg',
      skill: 'Electrician',
      location: 'Kingston',
      rate: 3500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 2.5,
      reviews: 32,
    },
    {
      name: 'Paul Bartley',
      cell: '8768736523',
      image: 'https://www.orkin.com.jm/wp-content/uploads/2018/09/image2.jpg',
      skill: 'Pest Control',
      location: 'Kingston',
      rate: 5500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 4.8,
      reviews: 61,
    },
    {
      name: 'Sam Baker',
      cell: '8767826546',
      image:
        'https://www.axa.co.uk/globalassets/new-website/business/carpenters/carpenter_v2_masthead.jpg?width=1600&mode=crop&heightratio=0.5625&quality=80',
      skill: 'Carpenter',
      location: 'Kingston',
      rate: 7500,
      rateType: 'Day',
      rateNegotiable: true,
      rating: 4.5,
      reviews: 52,
    },
    {
      name: 'David Bannings',
      cell: '8764528797',
      image:
        'https://nigerianprice.com/wp-content/uploads/2022/05/cost-of-painting-nigeria.jpg',
      skill: 'Painter',
      location: 'Kingston',
      rate: 3100,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 3.2,
      reviews: 12,
    },
    {
      name: 'Sheldon White',
      cell: '8762348936',
      image:
        'https://www.neit.edu/wp-content/uploads/2021/06/Types-of-Electricians-1024x633.jpg',
      skill: 'Electrician',
      location: 'Kingston',
      rate: 3500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 2.5,
      reviews: 32,
    },
    {
      name: 'Paul Bartley',
      cell: '8768736523',
      image: 'https://www.orkin.com.jm/wp-content/uploads/2018/09/image2.jpg',
      skill: 'Pest Control',
      location: 'Kingston',
      rate: 5500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 4.8,
      reviews: 61,
    },
    {
      name: 'Sam Baker',
      cell: '8767826546',
      image:
        'https://www.axa.co.uk/globalassets/new-website/business/carpenters/carpenter_v2_masthead.jpg?width=1600&mode=crop&heightratio=0.5625&quality=80',
      skill: 'Carpenter',
      location: 'Kingston',
      rate: 7500,
      rateType: 'Day',
      rateNegotiable: true,
      rating: 4.5,
      reviews: 52,
    },
    {
      name: 'David Bannings',
      cell: '8764528797',
      image:
        'https://nigerianprice.com/wp-content/uploads/2022/05/cost-of-painting-nigeria.jpg',
      skill: 'Painter',
      location: 'Kingston',
      rate: 3100,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 3.2,
      reviews: 12,
    },
    {
      name: 'Sheldon White',
      cell: '8762348936',
      image:
        'https://www.neit.edu/wp-content/uploads/2021/06/Types-of-Electricians-1024x633.jpg',
      skill: 'Electrician',
      location: 'Kingston',
      rate: 3500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 2.5,
      reviews: 32,
    },
    {
      name: 'Paul Bartley',
      cell: '8768736523',
      image: 'https://www.orkin.com.jm/wp-content/uploads/2018/09/image2.jpg',
      skill: 'Pest Control',
      location: 'Kingston',
      rate: 5500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 4.8,
      reviews: 61,
    },
    {
      name: 'Sam Baker',
      cell: '8767826546',
      image:
        'https://www.axa.co.uk/globalassets/new-website/business/carpenters/carpenter_v2_masthead.jpg?width=1600&mode=crop&heightratio=0.5625&quality=80',
      skill: 'Carpenter',
      location: 'Kingston',
      rate: 7500,
      rateType: 'Day',
      rateNegotiable: true,
      rating: 4.5,
      reviews: 52,
    },
    {
      name: 'David Bannings',
      cell: '8764528797',
      image:
        'https://nigerianprice.com/wp-content/uploads/2022/05/cost-of-painting-nigeria.jpg',
      skill: 'Painter',
      location: 'Kingston',
      rate: 3100,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 3.2,
      reviews: 12,
    },
    {
      name: 'Sheldon White',
      cell: '8762348936',
      image:
        'https://www.neit.edu/wp-content/uploads/2021/06/Types-of-Electricians-1024x633.jpg',
      skill: 'Electrician',
      location: 'Kingston',
      rate: 3500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 2.5,
      reviews: 32,
    },
    {
      name: 'Paul Bartley',
      cell: '8768736523',
      image: 'https://www.orkin.com.jm/wp-content/uploads/2018/09/image2.jpg',
      skill: 'Pest Control',
      location: 'Kingston',
      rate: 5500,
      rateType: 'Job',
      rateNegotiable: true,
      rating: 4.8,
      reviews: 61,
    },

  ];
  parishes!: Parish[];
  skills!: Skills[];

  constructor(private parishService: ParishService, private skillService: SkillsService) {}

  ngOnInit(): void {
    this.getParishes();
    this.getSkills();
  }

  getParishes(){
    this.parishService.getAllParish().subscribe((allParishes:any) =>{
      this.parishes = allParishes.data;
    })
  }

  getSkills(){
    this.skillService.getAllSkills().subscribe((allSkills:any) =>{
      this.skills = allSkills.data;
    })
  }

}
