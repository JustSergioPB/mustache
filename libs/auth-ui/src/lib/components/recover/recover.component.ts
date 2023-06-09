import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
  CountdownComponent,
  SpinnerComponent,
  TabComponent,
  TabGroupComponent,
} from '@mustache/basic-ui';
import {
  InputDirective,
  FormFieldComponent,
  LabelDirective,
  CodeComponent,
  PhoneComponent,
  DiallingCode,
} from '@mustache/forms-ui';
import { RecoverCrendetials, RecoverMethod } from '../../models';

@Component({
  selector: 'mustache-recover',
  standalone: true,
  imports: [
    CommonModule,
    ButtonDirective,
    InputDirective,
    FormFieldComponent,
    LabelDirective,
    CountdownComponent,
    SpinnerComponent,
    CodeComponent,
    TabGroupComponent,
    TabComponent,
    PhoneComponent,
  ],
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
})
export class RecoverComponent {
  public counterIsVisible = false;
  public showSpinner = false;
  public firstCodeSent = false;
  @ViewChild(CountdownComponent) counter: CountdownComponent | undefined;
  @ViewChild(CodeComponent) code: CodeComponent | undefined;
  @Input() isSuccessful: boolean | null | undefined = false;
  @Input() isLoading: boolean | null | undefined = false;
  @Input() errorMessage: string | null | undefined;
  @Input() codeIsVerified: boolean | null | undefined = false;
  @Input() defaultDiallingCode: DiallingCode | undefined;
  @Input() diallingCodes: DiallingCode[] = [];
  @Output() sendCodeSubmited = new EventEmitter<RecoverMethod>();
  @Output() verifySubmited = new EventEmitter<RecoverMethod>();
  @Output() resetSubmited = new EventEmitter<RecoverCrendetials>();
  @Output() loginClicked = new EventEmitter<void>();

  onSendCodeSubmited(): void {
    this.sendCodeSubmited.emit();
    if (this.counter) {
      this.firstCodeSent = true;
      this.counterIsVisible = true;
      this.counter.start();
    }
  }

  onVerifySubmited(): void {
    this.verifySubmited.emit();
    this.codeIsVerified = true;
  }

  onResetSubmited(): void {
    this.resetSubmited.emit();
  }

  onLoginClicked(event: MouseEvent): void {
    event.preventDefault();
    this.loginClicked.emit();
  }
}
