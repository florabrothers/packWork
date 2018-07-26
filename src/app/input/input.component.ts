import { Component, OnInit, Injector } from '@angular/core';
import {
  BeforeChangeEvent,
  CopyPlugin,
  IWallConfiguration,
  IWallDefinition,
  IWallModel,
  IWallModelConfig,
  SelectionPlugin,
  UndoRedoPlugin,
  WALL,
  WallModelFactory
} from 'ngx-wall';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  equation: string = '\\sum_{i=1}^nx_i';

  plan: any = null;

  wallConfiguration: IWallConfiguration = {
    mode: WALL.MODES.EDIT
  };

  wallPlan: IWallDefinition = {
    'bricks': [],
    'layout': {
      'bricks': []
      }
  };

  wall2Model: IWallModel;

  constructor(private wallModelFactory: WallModelFactory,
    private injector: Injector) {
    const modelConfig: IWallModelConfig = {
      plan: this.wallPlan,
      plugins: [
        new CopyPlugin(this.injector),
        new UndoRedoPlugin(this.injector),
        new SelectionPlugin(this.injector)
      ]
    };

    this.wall2Model = this.wallModelFactory.create(modelConfig);

    // todo: fix it
    this.wall2Model.api.core.subscribe((e) => {
      if (!(e instanceof BeforeChangeEvent)) {
        // update current plan
        console.log(`update current plan`);

        this.plan = this.wall2Model.api.core.getPlan();
      }
    });
  }

  ngOnInit() {
  }

}
