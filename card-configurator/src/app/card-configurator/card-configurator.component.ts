import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-configurator',
  templateUrl: './card-configurator.component.html',
  imports: [
    ReactiveFormsModule,
    CommonModule 
  ],
  styleUrls: ['./card-configurator.component.css']
})
export class CardConfiguratorComponent {
  cardForm: FormGroup;
  generatedHtml: string = '';
  generatedCss: string = '';
  cardStyles: { [key: string]: string } = {};

  constructor(private fb: FormBuilder) {
    this.cardForm = this.fb.group({
      title: ['Título do Card'],
      width: [300],
      height: [200],
      bgColor: ['#ffffff'],
    });

    this.cardForm.valueChanges.subscribe((values) => {
      this.updatePreview(values);
    });
  }

  updatePreview(values: any): void {
    this.cardStyles = {
      width: `${values.width}px`,
      height: `${values.height}px`,
      backgroundColor: values.bgColor,
    };
  }

  generateCode(): void {
    const { title, width, height, bgColor } = this.cardForm.value;

    this.generatedHtml = `<div class="card"> <h3>${title}</h3> </div>`;
    this.generatedCss = `.card { width: ${width}px; height: ${height}px; background-color: ${bgColor}; border: 1px solid #ccc; border-radius: 4px; }`; 
  } 
  
}


