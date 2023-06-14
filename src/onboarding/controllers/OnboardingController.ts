
import type { AccountDetailsDto } from "../../accountDetails/models/dto/AccountDetailsDto";
import { OnboardingService } from "../services/OnboardingService";
import { type Either, isLeft, left, right } from "fp-ts/lib/Either";
import type { CardDto } from "../../card/models/dto/CardDto";
import type { Card } from "../../card/models/Card";
import type { AccountDetails } from "@/accountDetails/models/AccountDetails";
import { useAccountDetailsStore } from "@/accountDetails/stores/AccountDetailsStore";
import { useAccountStore } from "@/account/stores/AccountStore";
import type { Account } from "@/account/models/Account";
import { AccountDetailsFactory } from "@/accountDetails/factories/AccountDetailsFactory";


export class OnboardingController {
    constructor(
        private onboardingService: OnboardingService = new OnboardingService(),
    ) { }

    public async patchAccountDetails(accountDetailsDto: AccountDetailsDto): Promise<Either<string, AccountDetails>> {
        const accountDetailsStore = useAccountDetailsStore();
        const accountStore = useAccountStore();
        const response = await this.onboardingService.patchAccountDetails(accountDetailsDto);
        if (isLeft(response)) {
            return left('Wystąpił błąd serwera, spróbuj ponownie później');
        } else {
            const account: Account = {
                id: accountStore.account?.id!,
                email: accountStore.account?.email!,
                accountDetails: AccountDetailsFactory.fromDto(accountDetailsDto),
            }
            accountStore.setAccount(account);
            accountDetailsStore.setAccountDetails(response.right);
            return right(response.right);
        }

    }
    public async patchCardDetails(cardDetailsDto: CardDto): Promise<Either<string, Card>> {
        const response = await this.onboardingService.patchCardDetails(cardDetailsDto);
        if (isLeft(response)) {
            return left('Wystąpił błąd serwera, spróbuj ponownie później');
        } else {
            return right(response.right);
        }
    }
    public async setMembershipType(membershipTypeId: number): Promise<void> {
        await this.onboardingService.setMembershipType(membershipTypeId);
    }
    public async freezeMembership(): Promise<void> {
        await this.onboardingService.freezeMembership();
    }
    public async cancelMembership(): Promise<void> {
        await this.onboardingService.cancelMembership();
    }
    public async resetFingerPrint(): Promise<void> {
        await this.onboardingService.fingerPrintReset();
    }
    public async sendConfirmMail(email: string, membershipTypeId: number): Promise<void> {
        await this.onboardingService.sendConfirmationMail(email, membershipTypeId);
    }

}