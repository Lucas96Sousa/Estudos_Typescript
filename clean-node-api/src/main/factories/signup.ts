import { SignUpController } from '../../presentation/controllers/signup/signUp'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'
import { DbAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'

/**
 * * Criando as instancia das dependencias do factory
 */

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const addAccountRepository = new AccountMongoRepository()
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const bcyptAdapter = new BcryptAdapter(salt)
  const dbAddAccount = new DbAccount(bcyptAdapter, addAccountRepository)
  return new SignUpController(emailValidatorAdapter, dbAddAccount)
}
