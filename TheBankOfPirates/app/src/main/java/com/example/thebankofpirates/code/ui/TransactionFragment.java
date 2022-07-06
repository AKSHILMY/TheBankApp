
package com.example.thebankofpirates.code.ui;

import android.content.DialogInterface;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Spinner;
import android.widget.TextView;

import com.example.thebankofpirates.R;

import androidx.appcompat.app.AlertDialog;
import androidx.fragment.app.Fragment;

import com.example.thebankofpirates.code.TransactionManager;
import com.example.thebankofpirates.code.data.exception.InvalidAccountException;
import com.example.thebankofpirates.code.data.model.TransactionType;

import static com.example.thebankofpirates.code.Constants.TRANSACTION_MANAGER;

import java.text.SimpleDateFormat;
import java.util.Calendar;

public class TransactionFragment extends Fragment implements View.OnClickListener {
    private Button submitButton;
    private EditText amount;
    private Spinner accountSelector;
    private RadioGroup transactionTypeGroup;
    private TransactionManager currentTransactionManager;


    public static TransactionFragment newInstance(TransactionManager transactionManager) {
        TransactionFragment transactionFragment = new TransactionFragment();
        Bundle args = new Bundle();
        args.putSerializable(TRANSACTION_MANAGER, transactionManager);
        transactionFragment.setArguments(args);
        return transactionFragment;
    }

    public TransactionFragment() {
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_transaction, container, false);
        submitButton = (Button) rootView.findViewById(R.id.submit_amount);
        submitButton.setOnClickListener(this);

        amount = (EditText) rootView.findViewById(R.id.amount);
        accountSelector = (Spinner) rootView.findViewById(R.id.account_selector);
        currentTransactionManager = (TransactionManager) getArguments().get(TRANSACTION_MANAGER);
        ArrayAdapter<String> adapter =
                null;
        if (currentTransactionManager != null) {
            adapter = new ArrayAdapter<>(this.getActivity(), R.layout.support_simple_spinner_dropdown_item,
                 currentTransactionManager.getAccountNumbersList());
        }
        accountSelector.setAdapter(adapter);

        transactionTypeGroup = (RadioGroup) rootView.findViewById(R.id.expense_type_group);
        RadioButton expenseType = (RadioButton) rootView.findViewById(R.id.expense);
        RadioButton incomeType = (RadioButton) rootView.findViewById(R.id.income);

        return rootView;
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.submit_amount:
                String selectedAccount = (String) accountSelector.getSelectedItem();
                String amountStr = amount.getText().toString();
                RadioButton checkedType = (RadioButton) getActivity().findViewById(transactionTypeGroup
                        .getCheckedRadioButtonId());
                String type = (String) checkedType.getText();

                if (amountStr.isEmpty()) {
                    amount.setError(getActivity().getString(R.string.err_amount_required));
                }

                if (currentTransactionManager != null) {
                    try {
                        currentTransactionManager.updateAccountBalance(selectedAccount,
                                TransactionType.valueOf(type.toUpperCase()), amountStr);
                    } catch (InvalidAccountException e) {
                        new AlertDialog.Builder(this.getActivity())
                                .setTitle(this.getString(R.string.msg_account_update_unable) + selectedAccount)
                                .setMessage(e.getMessage())
                                .setNeutralButton(this.getString(R.string.msg_ok),
                                        new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        dialog.cancel();
                                    }
                                }).setIcon(android.R.drawable.ic_dialog_alert).show();
                    }
                }
                amount.getText().clear();
                break;
        }
    }
}
