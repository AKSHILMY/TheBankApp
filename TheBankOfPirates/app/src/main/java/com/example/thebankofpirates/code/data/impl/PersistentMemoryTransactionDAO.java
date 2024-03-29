package com.example.thebankofpirates.code.data.impl;

import android.content.Context;

import com.example.thebankofpirates.code.data.TransactionDAO;
import com.example.thebankofpirates.code.data.model.Transaction;
import com.example.thebankofpirates.code.data.model.TransactionType;
import com.example.thebankofpirates.code.sql.DatabaseHelper;
import com.example.thebankofpirates.code.ui.DetailsFragment;

import java.util.List;


public class PersistentMemoryTransactionDAO implements TransactionDAO {
    private final Context context;
    private final DatabaseHelper dbHelper ;

    public PersistentMemoryTransactionDAO(Context context) {
        this.context = context;
        dbHelper = new DatabaseHelper(context);
    }

    @Override
    public void logTransaction(String accountNo, TransactionType transactionType, double amount,String date) {
        Transaction transaction = new Transaction(accountNo, transactionType, amount,date);
        dbHelper.addTransactionLog(transaction);

    }

    @Override
    public List<Transaction> getAllTransactionLogs() {
        return this.dbHelper.getTransactions();
    }

    @Override
    public List<Transaction> getPaginatedTransactionLogs(int limit) {
        int size = dbHelper.getTransactions().size();
        List<Transaction> transactionList = this.dbHelper.getTransactions();
        if (size <= limit) {
            return transactionList;
        }
        // return the last <code>limit</code> number of transaction logs
        return transactionList.subList(size - limit, size);
    }
}
