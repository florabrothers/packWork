import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {

  equation = String.raw`\begin{alignedat}{2}
   10&x+ &3&y = 2 \\
    3&x+&13&y = 4
\end{alignedat}`;
  options: KatexOptions = {
    displayMode: true
  };

  constructor() { }

  ngOnInit() {
  }

}
