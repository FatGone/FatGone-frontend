import type { AppException } from "@/common/models/AppException";
import type { AccountDetailsDto } from "../../accountDetails/models/dto/AccountDetailsDto";
import type { Either } from "fp-ts/lib/Either";
import type { CardDetailsDto } from "../models/dto/CardDetailsDto";
import type { CardDetails } from "../models/CardDetails";
import type { AccountDetails } from "@/accountDetails/models/AccountDetails";

export interface OnboardingInterface {
    patchAccountDetails(accountDetailsDto: AccountDetailsDto): Promise<Either<AppException, AccountDetails>>
    patchCardDetails(cardDetailsDto: CardDetailsDto): Promise<Either<AppException, CardDetails>>
    sendConfirmationMail(email: string, membershipType: string): Promise<void>
}