package com.example.thebankofpirates.code;


import android.content.Context;

import com.example.thebankofpirates.code.data.AccountDAO;
import com.example.thebankofpirates.code.data.TransactionDAO;
import com.example.thebankofpirates.code.data.impl.PersistentMemoryAccountDAO;
import com.example.thebankofpirates.code.data.impl.PersistentMemoryTransactionDAO;

public class PersistentMemoryTransactionManager extends TransactionManager{
    private Context context;
    public PersistentMemoryTransactionManager(Context context) {
        this.context=context;
        setup();
    }
    @Override
    public void setup(){
        TransactionDAO persistentMemoryTransactionDAO =  new PersistentMemoryTransactionDAO(context);
        setTransactionsDAO(persistentMemoryTransactionDAO);

        AccountDAO persistentMemoryAccountDAO = new PersistentMemoryAccountDAO(context);
        setAccountsDAO(persistentMemoryAccountDAO);

    }
}
