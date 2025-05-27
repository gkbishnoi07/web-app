/** Angular Imports */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

type ClientActionType =
  | 'Assign Staff'
  | 'Close'
  | 'Survey'
  | 'Reject'
  | 'Activate' // Add this
  | 'Withdraw'
  | 'Update Default Savings'
  | 'Transfer Client'
  | 'Undo Transfer'
  | 'Reject Transfer'
  | 'Accept Transfer'
  | 'Reactivate'
  | 'Undo Rejection'
  | 'Add Charge'
  | 'Take Survey'
  | 'Client Screen Reports'
  | 'Create Collateral';

/**
 * Client actions component.
 */
@Component({
  selector: 'mifosx-client-actions',
  templateUrl: './client-actions.component.html',
  styleUrls: ['./client-actions.component.scss']
})
export class ClientActionsComponent {
  /** Flag object to store possible actions and render appropriate UI to the user */
  actions: Record<ClientActionType, boolean> = {
    'Assign Staff': false,
    Close: false,
    Survey: false,
    Reject: false,
    Activate: false, // Add this
    Withdraw: false,
    'Update Default Savings': false,
    'Transfer Client': false,
    'Undo Transfer': false,
    'Reject Transfer': false,
    'Accept Transfer': false,
    Reactivate: false,
    'Undo Rejection': false,
    'Add Charge': false,
    'Take Survey': false,
    'Client Screen Reports': false,
    'Create Collateral': false
  };

  /**
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const name = this.route.snapshot.params['name'] as keyof typeof this.actions;
    this.actions[name] = true;
  }
}
