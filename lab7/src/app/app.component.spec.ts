import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, AppComponent],
      providers: [FormBuilder]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'lab7' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('lab7');
  });

  it('should validate numberOfCopies is a number', () => {
    const form = component.printForm;
    const numberOfCopiesControl = form.controls['numberOfCopies'];

    numberOfCopiesControl.setValue(5);
    expect(numberOfCopiesControl.valid).toBeTruthy();

    numberOfCopiesControl.setValue('abc');
    expect(numberOfCopiesControl.valid).toBeFalsy();
  });

  it('should validate numberOfSheets is a number', () => {
    const form = component.printForm;
    const numberOfSheetsControl = form.controls['numberOfSheets'];

    numberOfSheetsControl.setValue(2);
    expect(numberOfSheetsControl.valid).toBeTruthy();

    numberOfSheetsControl.setValue('abc');
    expect(numberOfSheetsControl.valid).toBeFalsy();
  });

  it('should validate numberOfMaster is a number', () => {
    const form = component.printForm;
    const numberOfMasterControl = form.controls['numberOfSheets'];

    numberOfMasterControl.setValue(2);
    expect(numberOfMasterControl.valid).toBeTruthy();

    numberOfMasterControl.setValue('abc');
    expect(numberOfMasterControl.valid).toBeFalsy();
  });

  it('form should be invalid initially', () => {
    expect(component.printForm.valid).toBeFalsy();
  });

  it('form should be valid with proper data', () => {
    const form = component.printForm;
    form.controls['paperType'].setValue('Звичайний');
    form.controls['productType'].setValue('Документ');
    form.controls['format'].setValue('А1');
    form.controls['inkType'].setValue('Кольоровий');
    form.controls['numberOfSheets'].setValue(10);
    form.controls['numberOfCopies'].setValue(2);
    form.controls['numberOfSides'].setValue('1');
    form.controls['numberOfMaster'].setValue(2);
    expect(form.valid).toBeTruthy();
  });

  it('form should be invalid with improper data', () => {
    const form = component.printForm;
    form.controls['paperType'].setValue('');
    form.controls['productType'].setValue('Документ');
    form.controls['format'].setValue('А1');
    form.controls['inkType'].setValue('Кольоровий');
    form.controls['numberOfSheets'].setValue(10);
    form.controls['numberOfCopies'].setValue(2);
    form.controls['numberOfSides'].setValue('1');
    form.controls['numberOfMaster'].setValue(2);

    expect(form.valid).toBeFalsy();
  });

  it('form should be invalid with improper data', () => {
    const form = component.printForm;
    form.controls['paperType'].setValue('Звичайний');
    form.controls['productType'].setValue('Документ');
    form.controls['format'].setValue('А1');
    form.controls['inkType'].setValue('Кольоровий');
    form.controls['numberOfSheets'].setValue('k');
    form.controls['numberOfCopies'].setValue(2);
    form.controls['numberOfSides'].setValue('1');
    form.controls['numberOfMaster'].setValue(2);

    expect(form.valid).toBeFalsy();
  });

  it('should be invalid if paperType is empty', () => {
    const form = component.printForm;
    const paperTypeControl = form.controls['paperType'];
  
    expect(paperTypeControl.valid).toBeFalsy();
  
    paperTypeControl.setValue('');
    expect(paperTypeControl.valid).toBeFalsy();
  });

  it('should be invalid if productType is empty', () => {
    const form = component.printForm;
    const productTypeControl = form.controls['productType'];
  
    expect(productTypeControl.valid).toBeFalsy();
  
    productTypeControl.setValue('');
    expect(productTypeControl.valid).toBeFalsy();
  });

  it('should be invalid if format is empty', () => {
    const form = component.printForm;
    const formatControl = form.controls['format'];
  
    expect(formatControl.valid).toBeFalsy();
  
    formatControl.setValue('');
    expect(formatControl.valid).toBeFalsy();
  });

  it('should be invalid if inkType is empty', () => {
    const form = component.printForm;
    const inkTypeControl = form.controls['inkType'];
  
    expect(inkTypeControl.valid).toBeFalsy();
  
    inkTypeControl.setValue('');
    expect(inkTypeControl.valid).toBeFalsy();
  });

  it('should be invalid if numberOfSheets is empty', () => {
    const form = component.printForm;
    const numberOfSheetsControl = form.controls['numberOfSheets'];
  
    expect(numberOfSheetsControl.valid).toBeFalsy();
  
    numberOfSheetsControl.setValue('');
    expect(numberOfSheetsControl.valid).toBeFalsy();
  });

  it('should be invalid if numberOfCopies is empty', () => {
    const form = component.printForm;
    const numberOfCopiesControl = form.controls['numberOfCopies'];
  
    expect(numberOfCopiesControl.valid).toBeFalsy();
  
    numberOfCopiesControl.setValue('');
    expect(numberOfCopiesControl.valid).toBeFalsy();
  });

  it('should be invalid if numberOfMaster is empty', () => {
    const form = component.printForm;
    const numberOfMasterControl = form.controls['numberOfMaster'];
  
    expect(numberOfMasterControl.valid).toBeFalsy();
  
    numberOfMasterControl.setValue('');
    expect(numberOfMasterControl.valid).toBeFalsy();
  });

  it('should enable submit button when form is valid', () => {
    const form = component.printForm;
  
    expect(fixture.nativeElement.querySelector('button').disabled).toBeTruthy();
  
    form.controls['paperType'].setValue('Звичайний');
    form.controls['productType'].setValue('Документ');
    form.controls['format'].setValue('А1');
    form.controls['inkType'].setValue('Кольоровий');
    form.controls['numberOfSheets'].setValue(10);
    form.controls['numberOfCopies'].setValue(2);
    form.controls['numberOfSides'].setValue('1');
    form.controls['numberOfMaster'].setValue(2);
  
    fixture.detectChanges();
  
    expect(fixture.nativeElement.querySelector('button').disabled).toBeFalsy();
  });

  it('should submit the form with correct data', () => {
    const form = component.printForm;
    const onSubmitSpy = spyOn(component, 'onSubmit');
  
    form.controls['paperType'].setValue('Звичайний');
    form.controls['productType'].setValue('Документ');
    form.controls['format'].setValue('А1');
    form.controls['inkType'].setValue('Кольоровий');
    form.controls['numberOfSheets'].setValue(10);
    form.controls['numberOfCopies'].setValue(2);
    form.controls['numberOfSides'].setValue('1');
    form.controls['numberOfMaster'].setValue(2);
  
    fixture.detectChanges();
  
    const submitButton = fixture.nativeElement.querySelector('button');
    submitButton.click();
  
    expect(onSubmitSpy).toHaveBeenCalledOnceWith();
  });

  it('should not submit the form with invalid data', () => {
    const form = component.printForm;
    const onSubmitSpy = spyOn(component, 'onSubmit');
  
    form.controls['paperType'].setValue('Normal');
    form.controls['productType'].setValue('Документ');
    form.controls['format'].setValue('А1');
    form.controls['inkType'].setValue('Кольоровий');
    form.controls['numberOfSheets'].setValue(10);
    form.controls['numberOfCopies'].setValue(2);
    form.controls['numberOfSides'].setValue('1');
    form.controls['numberOfMaster'].setValue(2);
  
    const submitButton = fixture.nativeElement.querySelector('button');
    submitButton.click();
  
    expect(onSubmitSpy).not.toHaveBeenCalled();
  });
  it('should have the correct number of options in the paperType dropdown', () => {
    const options = fixture.nativeElement.querySelectorAll('#paperType option');
    expect(options.length).toBe(3);
  });
});
