
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { catchError, distinctUntilChanged, map, shareReplay, switchMap } from 'rxjs/operators';

// AMES
import { UserIdentityService, TokenManagerService } from '@fmr-pr000264/ames-identity-service';
import { AmesDeviceDetectionService } from '@fmr-pr000264/ames-utility-service';

export type AmesUserProfileInfo = {
  corpId?: string;
  displayName?: string;
  firstName?: string;
  profileImageUrl?: string;
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userIdentity = inject(UserIdentityService);
  private readonly tokenManager = inject(TokenManagerService);
  private readonly deviceDetection = inject(AmesDeviceDetectionService);

  /** CorpId stream */
  private readonly corpId$: Observable<string> = this.userIdentity.getCorpId().pipe(
    map(v => (v ?? '').trim()),
    distinctUntilChanged(),
    catchError(() => of(''))
  );

  /** Logged-in user profile stream */
  private readonly loggedInUser$: Observable<AmesUserProfileInfo | null> = this.corpId$.pipe(
    switchMap(corpId =>
      corpId
        ? this.deviceDetection.getUserProfile(corpId)
        : of(null)
    ),
    catchError(() => of(null)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  /** ✅ Signal for components */
  readonly loggedInUser = toSignal(this.loggedInUser$, { initialValue: null });

  // Optional: keep these if you still use them elsewhere
  readonly accessToken$ = this.tokenManager.getToken().pipe(
    map(t => t?.access_token ?? ''),
    catchError(() => of(''))
  );
}
