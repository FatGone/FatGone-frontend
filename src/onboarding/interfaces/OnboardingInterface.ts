import type { AppException } from "@/common/models/AppException";
import type { AccountDetailsDto } from "../../accountDetails/models/dto/AccountDetailsDto";
import type { Either } from "fp-ts/lib/Either";
import type { CardDto } from "../../card/models/dto/CardDto";
import type { Card } from "../../card/models/Card";
import type { AccountDetails } from "@/accountDetails/models/AccountDetails";

export interface OnboardingInterface {
    patchAccountDetails(accountDetailsDto: AccountDetailsDto): Promise<Either<AppException, AccountDetails>>
    patchCardDetails(cardDetailsDto: CardDto): Promise<Either<AppException, Card>>
    setMembershipType(membershipTypeId: number): Promise<void>
    freezeMembership(): Promise<void>
    cancelMembership(): Promise<void>
    fingerPrintReset(): Promise<void>
    sendConfirmationMail(email: string, membershipTypeId: number): Promise<void>
}