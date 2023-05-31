
import type { AccountDetailsDto } from "../models/dto/AccountDetailsDto";
import { OnboardingService } from "../services/OnboardingService";
import type { AccountDetails } from "../models/AccountDetails";
import { type Either, isLeft, left, right } from "fp-ts/lib/Either";
import type { CardDetailsDto } from "../models/dto/CardDetailsDto";
import type { CardDetails } from "../models/CardDetails";


export class OnboardingController {
    constructor(
        private onboardingService: OnboardingService = new OnboardingService(),
    ) { }

    public async patchAccountDetails(accountDetailsDto: AccountDetailsDto): Promise<Either<string, AccountDetails>> {
        const response = await this.onboardingService.patchAccountDetails(accountDetailsDto);
        if (isLeft(response)) {
            return left('Wystąpił błąd serwera, spróbuj ponownie później');
        } else {
            return right(response.right);
        }

    }
    public async patchCardDetails(cardDetailsDto: CardDetailsDto): Promise<Either<string, CardDetails>> {
        const response = await this.onboardingService.patchCardDetails(cardDetailsDto);
        if (isLeft(response)) {
            return left('Wystąpił błąd serwera, spróbuj ponownie później');
        } else {
            return right(response.right);
        }
    }
    public async sendConfirmMail(email: string, membershipType: string): Promise<void> {
        await this.onboardingService.sendConfirmationMail(email, membershipType);
    }

}