
package com.example.thebankofpirates.code.ui;

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

import com.example.thebankofpirates.R;

import androidx.fragment.app.Fragment;

import com.example.thebankofpirates.code.TransactionManager;
import static com.example.thebankofpirates.code.Constants.TRANSACTION_MANAGER;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 *
 */
public class TransactionFragment extends Fragment implements View.OnClickListener {
    private Button submitButton;
    private EditText amount;
    private Spinner accountSelector;
    private RadioGroup expenseTypeGroup;
    private DatePicker datePicker;
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
        accountSelector = (Spinner) rootView.findViewById(R.id.permission_selector);
        currentTransactionManager = (TransactionManager) getArguments().get(TRANSACTION_MANAGER);
        ArrayAdapter<String> adapter =
                null;

        String[] strArray = {"Single Agent", "Multi Agent"};
        List<String> permissons = Arrays.asList(strArray);
        adapter = new ArrayAdapter<>(this.getActivity(), R.layout.support_simple_spinner_dropdown_item,
                    permissons);

        accountSelector.setAdapter(adapter);

        expenseTypeGroup = (RadioGroup) rootView.findViewById(R.id.expense_type_group);
        RadioButton expenseType = (RadioButton) rootView.findViewById(R.id.expense);
        RadioButton incomeType = (RadioButton) rootView.findViewById(R.id.income);
//        datePicker = (DatePicker) rootView.findViewById(R.id.date_selector);
        return rootView;
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
//            case R.id.submit_amount:
//                String selectedAccount = (String) accountSelector.getSelectedItem();
//                String amountStr = amount.getText().toString();
//                RadioButton checkedType = (RadioButton) getActivity().findViewById(expenseTypeGroup
//                        .getCheckedRadioButtonId());
//                String type = (String) checkedType.getText();
//
//                int day = datePicker.getDayOfMonth();
//                int month = datePicker.getMonth();
//                int year = datePicker.getYear();
//
//                if (amountStr.isEmpty()) {
//                    amount.setError(getActivity().getString(R.string.err_amount_required));
//                }

//                if (currentExpenseManager != null) {
//                    try {
//                        currentExpenseManager.updateAccountBalance(selectedAccount, day, month, year,
//                                ExpenseType.valueOf(type.toUpperCase()), amountStr);
//                    } catch (InvalidAccountException e) {
//                        new AlertDialog.Builder(this.getActivity())
//                                .setTitle(this.getString(R.string.msg_account_update_unable) + selectedAccount)
//                                .setMessage(e.getMessage())
//                                .setNeutralButton(this.getString(R.string.msg_ok),
//                                        new DialogInterface.OnClickListener() {
//                                    @Override
//                                    public void onClick(DialogInterface dialog, int which) {
//                                        dialog.cancel();
//                                    }
//                                }).setIcon(android.R.drawable.ic_dialog_alert).show();
//                    }
//                }
//                amount.getText().clear();
//                break;
        }
    }
}
