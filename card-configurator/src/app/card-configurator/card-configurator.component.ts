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
      content: ['Texto do card'],
      width: [300], // Valor inicial para o slider
      height: [200], // Valor inicial para o slider
      bgColor: ['#ffffff'],
      border: ['1px solid #000'],
      borderRadius: [8],
      fontSize: [16],
      fontColor: ['#000000'],
      bgImage: [''],
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
      borderRadius: `${values.borderRadius}px`,
      backgroundImage: values.bgImage ? `url(${values.bgImage})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  }

  generateCode(): void {
    const {
      title,
      content,
      width,
      height,
      bgColor,
      border,
      borderRadius,
      fontSize,
      fontColor,
      bgImage,
    } = this.cardForm.value;

    this.generatedHtml = `
<div class="card">
  <h3>${title}</h3>
  <p>${content}</p>
</div>`;

    this.generatedCss = `
.card {
  width: ${width}px;
  height: ${height}px;
  background-color: ${bgColor};
  border: ${border};
  border-radius: ${borderRadius}px;
  ${bgImage ? `background-image: url(${bgImage});` : ''}
  background-size: cover;
  background-position: center;
  color: ${fontColor};
  font-size: ${fontSize}px;
  padding: 16px;
  box-sizing: border-box;
}
.card h3 {
  margin: 0 0 8px 0;
  font-size: ${fontSize}px;
}
.card p {
  margin: 0;
  font-size: ${fontSize - 2}px;
}`;
  }
}