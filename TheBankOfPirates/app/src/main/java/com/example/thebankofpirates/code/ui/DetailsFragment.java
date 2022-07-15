
package com.example.thebankofpirates.code.ui;

import android.os.Build;
import android.os.Bundle;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.TextView;
import android.widget.Toast;

import com.example.thebankofpirates.R;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import com.example.thebankofpirates.code.LoginActivity;
import com.example.thebankofpirates.code.TransactionManager;
import com.example.thebankofpirates.code.data.model.Transaction;

import static com.example.thebankofpirates.code.Constants.TRANSACTION_MANAGER;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

/**
 *
 */
public class DetailsFragment extends Fragment{
    private TransactionManager currentTransactionManager;

    public static DetailsFragment newInstance(TransactionManager transactionManager) {
        DetailsFragment details = new DetailsFragment();
        Bundle args = new Bundle();
        args.putSerializable(TRANSACTION_MANAGER, transactionManager);
        details.setArguments(args);
        return details;
    }

    public DetailsFragment() {
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_details, container, false);
        TableLayout logsTableLayout = (TableLayout) rootView.findViewById(R.id.logs_table);
        TableRow tableRowHeader = (TableRow) rootView.findViewById(R.id.logs_table_header);

        currentTransactionManager = (TransactionManager) getArguments().get(TRANSACTION_MANAGER);
        List<Transaction> transactionList = new ArrayList<>();
        if (currentTransactionManager != null) {
            transactionList = currentTransactionManager.getTransactionLogs();
        }
        generateTransactionsTable(rootView, logsTableLayout, transactionList);
        return rootView;
    }


    private void generateTransactionsTable(View rootView, TableLayout logsTableLayout,
                                           List<Transaction> transactionList) {
        for (Transaction transaction : transactionList) {
            TableRow tr = new TableRow(rootView.getContext());
            TextView lDateVal = new TextView(rootView.getContext());

            String currentDate = new SimpleDateFormat("dd-MM-yyyy", Locale.getDefault()).format(new Date());
            String currentTime = new SimpleDateFormat("HH:mm:ss", Locale.getDefault()).format(new Date());
            String dateTime = currentDate+" "+currentTime;

            lDateVal.setText(dateTime);
            tr.addView(lDateVal);

            TextView lAccountNoVal = new TextView(rootView.getContext());
            lAccountNoVal.setText(transaction.getAccountNo());
            tr.addView(lAccountNoVal);

            TextView lTransactionTypeVal = new TextView(rootView.getContext());
            lTransactionTypeVal.setText(transaction.getTransactionType().toString());
            tr.addView(lTransactionTypeVal);

            TextView lAmountVal = new TextView(rootView.getContext());
            lAmountVal.setText(String.valueOf(transaction.getAmount()));
            tr.addView(lAmountVal);

            logsTableLayout.addView(tr);
        }
    }

}
