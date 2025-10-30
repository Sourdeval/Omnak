import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { inspirationsSteps, steps } from './steps';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'omnak-step-by-step-character',
  standalone: false,
  templateUrl: './step-by-step-character.component.html',
  styleUrl: './step-by-step-character.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class StepByStepCharacterComponent implements OnInit {
  steps: string[] = steps;
  stepIndex: number = 1;
  maxStep: number = steps.length;

  OkSteps = Array(1);
  FutureSteps = Array(1);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params["step"]) this.stepIndex = Number(params["step"])
      this.OkSteps = Array(this.stepIndex - 1);
      this.FutureSteps = Array(this.maxStep - this.stepIndex);
    })
  }

  back() {
    this.router.navigate(['new-character', this.stepIndex - 1]);
  }

  next() {
    this.router.navigate(['new-character', (this.stepIndex + 1)]);
  }

  goInspire(stepIndex: number) {
    this.router.navigate(["table", inspirationsSteps.find(s => s.step == stepIndex)?.inpiration])
  }

  showInspireButton(stepIndex: number) {
    return inspirationsSteps.find(s => s.step == stepIndex);
  }
}
