import { ServerError, type AppException } from "@/common/models/AppException";
import type { OnboardingInterface } from "../interfaces/OnboardingInterface";
import type { AccountDetailsDto } from "../../accountDetails/models/dto/AccountDetailsDto";
import { AxiosClient } from "@/common/utils/http_client/AxiosClient";
import { left, right, type Either } from "fp-ts/lib/Either";
import { AccountDetailsFactory } from "../../accountDetails/factories/AccountDetailsFactory";
import type { CardDto } from "../../card/models/dto/CardDto";
import type { Card } from "../../card/models/Card";
import { CardFactory } from "../../card/factories/CardFactory";
import type { AccountDetails } from "@/accountDetails/models/AccountDetails";

export class OnboardingService implements OnboardingInterface {
    async patchAccountDetails(accountDetailsDto: AccountDetailsDto): Promise<Either<AppException, AccountDetails>> {
        const response = await AxiosClient.instance.patch<AccountDetailsDto>('/account/details', accountDetailsDto);
        if (response.status == 201) {
            const accountDetails: AccountDetails = AccountDetailsFactory.fromDto(response.data);
            return right(accountDetails);
        } else {
            return left(new ServerError());
        }
    }
    async patchCardDetails(cardDetailsDto: CardDto): Promise<Either<AppException, Card>> {
        const response = await AxiosClient.instance.patch<CardDto>('/account/card', cardDetailsDto);
        if (response.status == 201) {
            const cardDetails: Card = CardFactory.fromDto(response.data);
            return right(cardDetails);
        } else {
            return left(new ServerError());
        }
    }

    async setMembershipType(membershipTypeId: number): Promise<void> {
        return await AxiosClient.instance.post('/membership/set-membership/' + membershipTypeId);
    }
    async freezeMembership(): Promise<void> {
        return await AxiosClient.instance.post('/membership/freeze');
    }
    async cancelMembership(): Promise<void> {
        return await AxiosClient.instance.post('/membership/cancel');
    }
    async fingerPrintReset(): Promise<void> {
        return await AxiosClient.instance.post('/membership/finger-print-reset');
    }
    async sendConfirmationMail(email: string, membershipTypeId: number): Promise<void> {
        const dto = { 'email': email, 'membershipTypeId': membershipTypeId };
        return await AxiosClient.instance.post('auth/send-confirmation-mail', dto);
    }
}