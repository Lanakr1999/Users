import {style, animation, trigger, state, transition, group, animate} from "@angular/animations";

export const ShowUsersAnim = [
  trigger('showUsersAnim', [
    // state('in', style({
    //   'height': '0px', 'opacity': '0'
    // })),
    state('out', style({
      'height': '15%', 'opacity': '1'
    })),
    transition('void => out', [group([
      animate('300ms ease-in', style({
        'height': '15%'
      })),
      animate('400ms ease-in', style({
        'opacity': '1'
      }))
    ])]),
    transition('* => void',[group([
      animate('250ms ease-in', style({
        'height': '0px'
      })),
      animate('300ms ease-in', style({
        'opacity': '0'
      }))
    ])])
  ])
]

export const ChangeButtonAnim = [
  trigger('changeButtonAnim', [
    state('show', style({
      'width': '100%', 'bottom': '0', 'left': '0',
      'box-shadow': '0 0 0 0', 'background': 'black'
    })),
    state('close', style({
      'width': '12%', 'bottom': '-2%', 'left': '44%',
      'box-shadow': '0 0 3px 3px', 'background': 'white'
    })),
    transition('show => close', [group([
      animate('300ms ease-in', style({
        'width': '12%', 'bottom': '-2%', 'left': '44%',
        'box-shadow': '0 0 3px 3px', 'background': 'white'
      }))
    ])]),
    transition('close => show',[group([
      animate('250ms ease-in', style({
        'width': '100%', 'bottom': '0', 'left': '0',
        'box-shadow': '0 0 0 0', 'background': 'black'
      }))
    ])])
  ]),
  trigger('changeTextColor',[
    state('silver', style({
      'color': 'silver'
    })),
    state('black', style({
      'color': 'black'
    })),
    transition('silver => black', [group([
      animate('300ms ease-in', style({
        'color': 'black'
      }))
    ])]),
    transition('black => silver', [group([
      animate('300ms ease-in', style({
        'color': 'silver'
      }))
    ])])
  ])
]
