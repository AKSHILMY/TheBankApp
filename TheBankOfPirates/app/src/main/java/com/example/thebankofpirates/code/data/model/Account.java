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

/**
 * This POJO holds the information about an account.
 */
public class Account {
    private String accountNo;
    private double balance;
    private String accountType;
    private String specialRequestPermission;


    public String getAccountNo() {
        return accountNo;
    }

    public void setAccountNo(String accountNo) {
        this.accountNo = accountNo;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public String getSpecialRequestPermission() {
        return specialRequestPermission;
    }

    public void setSpecialRequestPermission(String specialRequestPermission) {
        this.specialRequestPermission = specialRequestPermission;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public Account(String accountNo, double balance, String accountType, String specialRequestPermission) {
        this.accountNo = accountNo;
        this.balance = balance;
        this.accountType = accountType;
        this.specialRequestPermission = specialRequestPermission;
    }
}
