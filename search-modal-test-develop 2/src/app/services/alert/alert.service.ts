import { Injectable } from "@angular/core";

export const enum MessageStatus {
  SUCCESS,
  ERROR,
  WARNING,
  INFO
}

@Injectable()
export class AlertService {
  constructor() {}

  /* good(message: string, title?: string) {
    const alreadyPresent = this.checkForDuplicate(message, title);

    if (alreadyPresent) {
      alreadyPresent.toastRef.timeoutReset();
    } else {
      this.toastr.success(message, title);
    }
  }

  bad(message: string, title?: string) {
    const alreadyPresent = this.checkForDuplicate(message, title);

    if (alreadyPresent) {
      alreadyPresent.toastRef.timeoutReset();
    } else {
      this.toastr.error(message, title);
    }
  }

  alert(message: string, title?: string, sticky?: boolean) {
    this.toastr.info(message, title, {
      closeButton: sticky,
      disableTimeOut: sticky,
      tapToDismiss: !sticky
    });
  } */

  // TODO: Remove this once https://github.com/scttcper/ngx-toastr/pull/526 is merged
  /* checkForDuplicate(message: string, title?: string) {
    return this.toastr.toasts.find(
      toast =>
        toast.toastRef.componentInstance.title === title &&
        toast.message === message
    );
  } */
}
