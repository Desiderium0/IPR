import {
  Component,
  EventEmitter,
  Input,
  input,
  model,
  Output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-child-binding',
  imports: [],
  templateUrl: './child-binding.html',
  styleUrl: './child-binding.scss',
})
export class ChildBinding {
  @Input({ required: true, alias: 'outputValue' }) inputValue!: number;
  @Output('outputValueChange') outputValue = new EventEmitter<number>();

  public emitter(): void {
    this.inputValue += 1;
    this.outputValue.emit(this.inputValue);
  }

  //__________________________________________________________________________________________//

  valueModel = model(0, { alias: 'valModel' });

  public increment(): void {
    this.valueModel.update((val) => val + 1);
  }
}
