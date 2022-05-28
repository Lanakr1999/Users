import {animate, group, state, style, transition, trigger} from "@angular/animations";

export const ShowUserPost = [
  trigger('showUserPost', [
    state('show', style({
      'height': '10%'
    })),
    transition('void => show', [group([
      animate('500ms ease-in', style({
        'height': '10%'
      }))
    ])]),
    transition('* => void', [group([
      animate('500ms ease-in', style({
        'height': '0'
      }))
    ])])
  ])
]
