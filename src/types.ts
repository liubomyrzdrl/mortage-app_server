import  { Document } from 'mongoose'

export interface BankType extends Document {
    // _id?: ObjectID | undefined,
    name:  string 
    intrestRate: number
    maxLoan: number
    minPaymant: number
    loanTerm: number
    date: Date
}