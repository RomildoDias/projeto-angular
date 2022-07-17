import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector:'app-course-list',
    templateUrl:'./course-list.component.html'
})
export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [{
            id: 1,
            nome: 'Angulaev: forms',
            imagemUrl: './assets/images/forms.png',
            price: 99.99,
            code: 'xps-1425',
            duration: 120,
            rating: 4.4,
            releseDate:'Dezembro, 3, 2022'
        
        },
        {
            id: 2,
            nome: 'Angulaev: http',
            imagemUrl: './assets/images/http.png',
            price: 97.99,
            code: 'lps-1225',
            duration: 60,
            rating: 4,
            releseDate:'dezembro, 4, 2022'
        
        }]
    }
}[]