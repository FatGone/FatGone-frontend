import { ServerError, type AppException } from "@/common/models/AppException";
import type { OnboardingInterface } from "../interfaces/OnboardingInterface";
import type { AccountDetailsDto } from "../../accountDetails/models/dto/AccountDetailsDto";
import { AxiosClient } from "@/common/utils/http_client/AxiosClient";
import { left, right, type Either } from "fp-ts/lib/Either";
import { AccountDetailsFactory } from "../factories/AccountDetailsFactory";
import type { CardDetailsDto } from "../models/dto/CardDetailsDto";
import type { CardDetails } from "../models/CardDetails";
import { CardDetailsFactory } from "../factories/CardDetailsFactory";
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
    async patchCardDetails(cardDetailsDto: CardDetailsDto): Promise<Either<AppException, CardDetails>> {
        const response = await AxiosClient.instance.patch<CardDetailsDto>('/account/card', cardDetailsDto);
        if (response.status == 201) {
            const cardDetails: CardDetails = CardDetailsFactory.fromDto(response.data);
            return right(cardDetails);
        } else {
            return left(new ServerError());
        }
    }
    async sendConfirmationMail(email: string, membershipType: string): Promise<void> {
        const dto = { 'email': email, 'membershipType': membershipType };
        return await AxiosClient.instance.post('auth/send-confirmation-mail', dto);
    }
}