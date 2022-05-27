import {style, animation, trigger, state, transition, group, animate} from "@angular/animations";

export const ShowUsersAnim = [
  trigger('showUsersAnim', [
    state('in', style({
      'height': '15%', 'opacity': '1'
    })),
    state('out', style({
      'height': '0px', 'opacity': '0'
    })),
    transition('in => out', [group([
      animate('500ms ease-in-out', style({
        'height': '0px'
      })),
      animate('400ms ease-in-out', style({
        'opacity': '0'
      }))
    ])]),
    transition('out => in',[group([
      animate('400ms ease-in-out', style({
        'height': '15%'
      })),
      animate('300ms ease-in-out', style({
        'opacity': '1'
      }))
    ])])
  ])
]
