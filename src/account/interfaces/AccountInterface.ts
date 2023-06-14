import type { AppException } from "@/common/models/AppException";
import type { Either } from "fp-ts/lib/Either";
import type { Account } from "../models/Account";

export interface AccountInterface {
    get(): Promise<Either<AppException, Account>>
    delete(): Promise<void>
}