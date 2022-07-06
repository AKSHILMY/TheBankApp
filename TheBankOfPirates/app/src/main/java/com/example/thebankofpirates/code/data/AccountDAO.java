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

package com.example.thebankofpirates.code.data;

import com.example.thebankofpirates.code.data.model.Account;
import com.example.thebankofpirates.code.data.exception.InvalidAccountException;
import com.example.thebankofpirates.code.data.model.TransactionType;

import java.util.List;



/**
 * AccountDAO interface can be used to access the account details, including listing, adding, updating, removing
 * accounts and updating account balance.
 */
public interface AccountDAO {
    public void updateBalance(String accountNo, TransactionType transactionType, double amount) throws InvalidAccountException;

    List<String> getAccountNumbersList();


}
