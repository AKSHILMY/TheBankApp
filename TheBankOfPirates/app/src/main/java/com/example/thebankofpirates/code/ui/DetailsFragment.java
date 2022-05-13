
package com.example.thebankofpirates.code.ui;

import android.os.Bundle;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TableLayout;
import android.widget.TableRow;

import com.example.thebankofpirates.R;

import androidx.fragment.app.Fragment;

import com.example.thebankofpirates.code.TransactionManager;
import static com.example.thebankofpirates.code.Constants.TRANSACTION_MANAGER;

/**
 *
 */
public class DetailsFragment extends Fragment {
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
//        List<Transaction> transactionList = new ArrayList<>();
        if (currentTransactionManager != null) {
//            transactionList = currentExpenseManager.getTransactionLogs();
        }
//        generateTransactionsTable(rootView, logsTableLayout, transactionList);
        return rootView;
    }

//    private void generateTransactionsTable(View rootView, TableLayout logsTableLayout,
//                                           List<Transaction> transactionList) {
//        for (Transaction transaction : transactionList) {
//            TableRow tr = new TableRow(rootView.getContext());
//            TextView lDateVal = new TextView(rootView.getContext());
//
//            SimpleDateFormat sdf = new SimpleDateFormat(getActivity().getString(R.string.config_date_log_pattern));
//            String formattedDate = sdf.format(transaction.getDate());
//            lDateVal.setText(formattedDate);
//            tr.addView(lDateVal);
//
//            TextView lAccountNoVal = new TextView(rootView.getContext());
//            lAccountNoVal.setText(transaction.getAccountNo());
//            tr.addView(lAccountNoVal);
//
//            TextView lExpenseTypeVal = new TextView(rootView.getContext());
//            lExpenseTypeVal.setText(transaction.getExpenseType().toString());
//            tr.addView(lExpenseTypeVal);
//
//            TextView lAmountVal = new TextView(rootView.getContext());
//            lAmountVal.setText(String.valueOf(transaction.getAmount()));
//            tr.addView(lAmountVal);
//
//            logsTableLayout.addView(tr);
//        }
//    }
}
