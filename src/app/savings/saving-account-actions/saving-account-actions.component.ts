/** Angular Imports */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Currency } from 'app/shared/models/general.model';

type SavingAccountActionType =
  | 'Approve'
  | 'Reject'
  | 'Withdrawal'
  | 'Deposit'
  | 'Activate'
  | 'Close'
  | 'Undo Approval'
  | 'Post Interest As On'
  | 'Assign Staff'
  | 'Add Charge'
  | 'Unassign Staff'
  | 'Withdrawn by Client'
  | 'Apply Annual Fees'
  | 'Hold Amount'
  | 'Block Account'
  | 'Unblock Account'
  | 'Block Deposit'
  | 'Unblock Deposit'
  | 'Block Withdrawal'
  | 'Unblock Withdrawal';

/**
 * Savings account actions component.
 */
@Component({
  selector: 'mifosx-saving-account-actions',
  templateUrl: './saving-account-actions.component.html',
  styleUrls: ['./saving-account-actions.component.scss']
})
export class SavingAccountActionsComponent {
  /** Flag object to store possible actions and render appropriate UI to the user */
  actions: Record<SavingAccountActionType, boolean> = {
    Approve: false,
    Reject: false,
    Withdrawal: false,
    Deposit: false,
    Activate: false,
    Close: false,
    'Undo Approval': false,
    'Post Interest As On': false,
    'Assign Staff': false,
    'Add Charge': false,
    'Unassign Staff': false,
    'Withdrawn by Client': false,
    'Apply Annual Fees': false,
    'Hold Amount': false,
    'Block Account': false,
    'Unblock Account': false,
    'Block Deposit': false,
    'Unblock Deposit': false,
    'Block Withdrawal': false,
    'Unblock Withdrawal': false
  };

  currency: Currency;

  /**
   * @param {ActivatedRoute} route Activated Route
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: { savingsAccountActionData: any }) => {
      if (data.savingsAccountActionData) {
        this.currency = data.savingsAccountActionData.currency;
      }
    });

    const name = this.route.snapshot.params['name'];
    if (this.isValidAction(name)) {
      this.actions[name] = true;
    }
  }

  private isValidAction(action: string): action is SavingAccountActionType {
    return action in this.actions;
  }
}
