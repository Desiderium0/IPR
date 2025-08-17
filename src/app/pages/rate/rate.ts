import {
  Component,
  DestroyRef,
  forwardRef,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { NonNumberFiveValidator } from 'src/app/shared/validators/nonNumberFive';

@Component({
  selector: 'app-rate',
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => Rate),
    },
  ],
  templateUrl: './rate.html',
  styleUrl: './rate.scss',
})
export class Rate implements ControlValueAccessor, OnInit {
  private destroyRef = inject(DestroyRef);

  public form = new FormGroup({
    checkingBox: new FormControl(false, { nonNullable: true }),
    text: new FormControl('', {
      validators: [NonNumberFiveValidator],
      nonNullable: true,
    }),
  });

  counter = 0;

  @Input() count: number = 1;

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.onChange(value);
        this.onTouched();
      });
  }

  onChange = (value: any) => {}; //#1 регистрируем callback
  onTouched = () => {}; //#1 регистрируем callback

  public writeValue(value: any): void {
    this.counter = value as number;
    this.form.patchValue({
      checkingBox: value as boolean,
      text: value as string,
    });
    this.onChange(this.form.value); // Уведомляем форму об изменении
    this.onTouched(); // Помечаем как "тронутый"
  }

  public registerOnChange(fn: any): void {
    //#2 подключаем к нашему callback что-бы angular мог следить
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    //#2 подключаем к нашему callback что-бы angular мог следить
    this.onTouched = fn;
  }

  increment(): void {
    this.counter += this.count;
    this.onChange(this.counter); // Уведомляем форму об изменении
    this.onTouched(); // Помечаем как "тронутый"
  }

  dicrement(): void {
    this.counter -= this.count;
    this.onChange(this.counter); // Уведомляем форму об изменении
    this.onTouched(); // Помечаем как "тронутый"
  }

  onInputChanges(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.onChange(inputValue);
    this.onTouched();
  }
}
