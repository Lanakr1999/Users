import {
  animation, trigger, animateChild, group,
  transition, animate, style, state
} from '@angular/animations';

export const ChangeColor = [
  trigger('changeColor',[
    state('in', style({
      'height': '15%', 'background-color': 'darkred', 'opacity': '1', 'visibility': 'visible'
    })),
    state('out', style({
      'height': '0px', 'background-color': 'darkblue', 'opacity': '0', 'visibility': 'hidden'
    })),
    transition('in => out', [group([
        animate('400ms ease-in-out', style({
          'height': '0px', 'opacity': '0'
        })),
        animate('600ms ease-in-out', style({
          'background-color': 'darkblue'
        })),
        animate('700ms ease-in-out', style({
          'visibility': 'hidden'
        }))
      ]
    )]),
    transition('out => in', [group([
        animate('1ms ease-in-out', style({
          'visibility': 'visible'
        })),
        animate('600ms ease-in-out', style({
          'background-color': 'darkred'
        })),
        animate('800ms ease-in-out', style({
          'height': '15%', 'opacity': '1'
        }))
      ]
    )])
  ]),
]
