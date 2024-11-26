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
      border: ['1px solid #000'],
      fontSize: [16],
      fontColor: ['#000000'],
      bgImage: ['']
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
      border: values.border,
      backgroundImage: values.bgImage ? `url(${values.bgImage})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  }

  generateCode(): void {
    const { title, width, height, bgColor, border, fontSize, fontColor, bgImage } = this.cardForm.value;

    this.generatedHtml = `<div class="card"><h3>${title}</h3></div>`;
    this.generatedCss = `
.card {
  width: ${width}px;
  height: ${height}px;
  background-color: ${bgColor};
  border: ${border};
  ${bgImage ? `background-image: url(${bgImage});` : ''}
  background-size: cover;
  background-position: center;
  color: ${fontColor};
  font-size: ${fontSize}px;
}`;
  }
}
