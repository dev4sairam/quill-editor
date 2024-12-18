import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-angular-project';

  // separateDialCode = false;
	// SearchCountryField = SearchCountryField;
	// CountryISO = CountryISO;
  // PhoneNumberFormat = PhoneNumberFormat;
	// preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	// phoneForm = new FormGroup({
	// 	phone: new FormControl(undefined, [Validators.required])
	// });

	// changePreferredCountries() {
	// 	this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	// }
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });

  @Input() phoneNumber: any
  @Input() iso: any
  @Input() dialCode: any
  @Output() enteredNumber: EventEmitter<any> = new EventEmitter<any>();

  isoCodeAfterChange: CountryISO = CountryISO.UnitedStates;
  dialCodeAfterChange: string = '+1';
  isPhoneNumber:any;
  country: string = '';
  placeHolder: string = 'Phone Number';

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("changes", changes);

    if (changes['iso']?.currentValue) {
      this.isoCodeAfterChange = this.iso;
      // console.log("ISO code changed:", this.iso);
    }

    if (changes['phoneNumber']?.currentValue) {
      this.isPhoneNumber = this.phoneNumber;
      // console.log("PhoneNumber changed:", this.phoneNumber);
    }

    if (changes['dialCode']?.currentValue) {
      this.dialCodeAfterChange = this.dialCode;
      // console.log("Dial code changed:", this.dialCode);
    }
  }

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  getCountryChange(data: any) {
    // console.log("changedCountry", data);

    this.isoCodeAfterChange = data?.iso2;
    this.dialCodeAfterChange = `+${data?.dialCode}`;
    this.country = data?.name;

    const changeData = {
      country: this.country,
      number: this.isPhoneNumber?.number || '',
      dialCode: this.dialCodeAfterChange,
      iso: this.isoCodeAfterChange
    };

    // console.log('Change Data', changeData);
    this.enteredNumber.emit(changeData);
  }

  phoneNumberValue(phone: any) {
    // console.log("form value", phone.form.value);
    const phoneValue = phone.form.value.phone;

    const data = {
      country: this.country,
      number: phoneValue?.number || '',
      dialCode: this.dialCodeAfterChange || '',
      iso: this.isoCodeAfterChange || 'us'
    };

    // console.log('Phone Number Data', data);
    this.enteredNumber.emit(data);
  }



  // html: any;

  // ngOnInit() {
  //   const savedContent = sessionStorage.getItem('quillContent');
  //   if (savedContent) {
  //     this.html = JSON.parse(savedContent); // Restore content from sessionStorage
  //   }
  // }

  // localSave() {
  //   console.log(this.html);
  //   sessionStorage.setItem('quillContent', JSON.stringify(this.html)); // Save content to sessionStorage
  // }

  // @ViewChild('editor') quillEditor: any;

  // onEditorChange(event: any) {
  //   this.html = this.quillEditor?.editor.root.innerHTML;
  //   console.log(this.html);
  // }

  html: any;

  ngOnInit() {
    const savedContent = sessionStorage.getItem('quillContent');
    if (savedContent) {
      this.html = JSON.parse(savedContent); // Restore content from sessionStorage
      this.replacePlaceholders(); // Replace placeholders with dynamic values
    }
  }

  replacePlaceholders() {
    // Define the dynamic values for the placeholders
    const placeholderValues: Record<string, string> = {
      "{Company_Name}": "TechCorp",
      "{Employee_Name}": "John Doe"
    };
  
    // Loop through the ops array and replace placeholders in the insert field
    if (this.html && this.html.ops) {
      this.html.ops.forEach((op: any) => {
        if (op.insert) {
          Object.keys(placeholderValues).forEach((placeholder) => {
            const regex = new RegExp(placeholder, 'g'); // Create regex for each placeholder
            op.insert = op.insert.replace(regex, placeholderValues[placeholder]);
          });
        }
      });
    }
  }
  

  localSave() {
    console.log(this.html);
    sessionStorage.setItem('quillContent', JSON.stringify(this.html)); // Save content to sessionStorage
  }

  @ViewChild('editor') quillEditor: any;

  onEditorChange(event: any) {
    this.html = this.quillEditor?.editor.root.innerHTML;
    console.log(this.html);
  }
};