package com.example.thebankofpirates.code;


import com.example.thebankofpirates.code.data.AccountDAO;
import com.example.thebankofpirates.code.data.TransactionDAO;
import com.example.thebankofpirates.code.data.impl.PersistentMemoryAccountDAO;
import com.example.thebankofpirates.code.data.impl.PersistentMemoryTransactionDAO;

public class PersistentMemoryExpenseManager extends TransactionManager{

    public PersistentMemoryExpenseManager() {
        setup();
    }
    @Override
    public void setup(){
        TransactionDAO persistentMemoryTransactionDAO =  new PersistentMemoryTransactionDAO();
        setTransactionsDAO(persistentMemoryTransactionDAO);

        AccountDAO persistentMemoryAccountDAO = new PersistentMemoryAccountDAO();
        setAccountsDAO(persistentMemoryAccountDAO);

    }
}
