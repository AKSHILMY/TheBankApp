package com.example.thebankofpirates.code.data.impl;

import android.content.Context;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import lk.ac.mrt.cse.dbs.simpleexpensemanager.control.App;
import lk.ac.mrt.cse.dbs.simpleexpensemanager.control.DatabaseHelper;
import lk.ac.mrt.cse.dbs.simpleexpensemanager.data.TransactionDAO;
import lk.ac.mrt.cse.dbs.simpleexpensemanager.data.model.ExpenseType;
import lk.ac.mrt.cse.dbs.simpleexpensemanager.data.model.Transaction;
import lk.ac.mrt.cse.dbs.simpleexpensemanager.ui.MainActivity;

public class PersistentMemoryTransactionDAO implements TransactionDAO {
    private final Context context;
    private final DatabaseHelper dbHelper ;

    public PersistentMemoryTransactionDAO() {
        context = App.getContext();
        dbHelper = new DatabaseHelper(context);
    }

    @Override
    public void logTransaction(Date date, String accountNo, ExpenseType expenseType, double amount) {
        Transaction transaction = new Transaction(date, accountNo, expenseType, amount);
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
