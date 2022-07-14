package com.example.thebankofpirates.code.data.impl;

import android.content.Context;


import java.util.ArrayList;

import java.util.List;

import com.example.thebankofpirates.code.sql.DatabaseHelper;
import com.example.thebankofpirates.code.data.AccountDAO;
import com.example.thebankofpirates.code.data.exception.InvalidAccountException;
import com.example.thebankofpirates.code.data.model.Account;
import com.example.thebankofpirates.code.data.model.TransactionType;


public class PersistentMemoryAccountDAO implements AccountDAO {
    private final Context context;
    private final DatabaseHelper dbHelper ;

    public PersistentMemoryAccountDAO(Context context) {
        this.context = context;
        dbHelper = new DatabaseHelper(context);

    }
    @Override
    public void updateBalance(String accountNo, TransactionType transactionType, double amount) throws InvalidAccountException {
        if (!dbHelper.getAccounts().containsKey(accountNo)) {
            String msg = "Account " + accountNo + " is invalid.";
            throw new InvalidAccountException(msg);
        }
        Account account = dbHelper.getAccounts().get(accountNo);
        // specific implementation based on the transaction type
        switch (transactionType) {
            case WITHDRAW:
                account.setBalance(account.getBalance() - amount);
                break;
            case DEPOSIT:
                account.setBalance(account.getBalance() + amount);
                break;
        }
        dbHelper.updateAccount(account);
    }

    @Override
    public List<String> getAccountNumbersList() {
        return new ArrayList<>(this.dbHelper.getAccounts().keySet());

    }

}
