/*
 * Copyright 2015 Department of Computer Science and Engineering, University of Moratuwa.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *                  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package com.example.thebankofpirates.code.data.model;

import java.util.Date;

/**
 * This POJO holds the information regarding a single transaction.
 */
public class Transaction {
    private String transactionID;
    private String agentID;
    private String accountNo;
    private TransactionType transactionType;
    private double amount;
    private String specialRequestStatus;

    public String getTransactionID() {
        return transactionID;
    }

    public void setTransactionID(String transactionID) {
        this.transactionID = transactionID;
    }

    public String getAgentID() {
        return agentID;
    }

    public void setAgentID(String agentID) {
        this.agentID = agentID;
    }

    public String getAccountNo() {
        return accountNo;
    }

    public void setAccountNo(String accountNo) {
        this.accountNo = accountNo;
    }

    public TransactionType getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(TransactionType transactionType) {
        this.transactionType = transactionType;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getSpecialRequestStatus() {
        return specialRequestStatus;
    }

    public void setSpecialRequestStatus(String specialRequestStatus) {
        this.specialRequestStatus = specialRequestStatus;
    }

    public Transaction(String transactionID,
                       TransactionType transactionTyp,
                       double amount) {
        this.transactionID = transactionID;
        this.agentID = agentID;
        this.accountNo = accountNo;
        this.transactionType = transactionType;
        this.amount = amount;
        this.specialRequestStatus=specialRequestStatus;
    }
}
