import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss']
})
export class PhoneInputComponent {
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

}
