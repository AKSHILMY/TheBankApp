

package com.example.thebankofpirates.code.ui;

import android.os.Bundle;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import com.example.thebankofpirates.R;

import androidx.fragment.app.Fragment;

import com.example.thebankofpirates.code.TransactionManager;
import static com.example.thebankofpirates.code.Constants.TRANSACTION_MANAGER;

/**
 *
 */
public class DepositFragment extends Fragment implements View.OnClickListener {
    private TransactionManager currentTransactionManager;
    private EditText accountNumber;
    private EditText bankName;
    private EditText accountHolderName;
    private EditText depositAmount;
    private Button addDeposit;

    public static DepositFragment newInstance(TransactionManager transactionManager) {
        DepositFragment depositFragment = new DepositFragment();
        Bundle args = new Bundle();
        args.putSerializable(TRANSACTION_MANAGER, transactionManager);
        depositFragment.setArguments(args);
        return depositFragment;
    }

    public DepositFragment() {
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_deposit, container, false);
        accountNumber = (EditText) rootView.findViewById(R.id.account_num);
        accountHolderName = (EditText) rootView.findViewById(R.id.account_holder_name);
        depositAmount = (EditText) rootView.findViewById(R.id.deposit);
        addDeposit = (Button) rootView.findViewById(R.id.add_deposit);
        addDeposit.setOnClickListener(this);

        currentTransactionManager = (TransactionManager) getArguments().get(TRANSACTION_MANAGER);
        return rootView;
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.add_deposit:
                String accountNumStr = accountNumber.getText().toString();
                String bankNameStr = bankName.getText().toString();
                String accountHolderStr = accountHolderName.getText().toString();
                String initialBalanceStr = depositAmount.getText().toString();


                if (accountNumStr.isEmpty()) {
                    accountNumber.setError(getActivity().getString(R.string.err_acct_number_empty));
                    break;
                }

                if (bankNameStr.isEmpty()) {
                    bankName.setError(getActivity().getString(R.string.err_bank_name_empty));
                    break;
                }

                if (accountHolderStr.isEmpty()) {
                    accountHolderName.setError(getActivity().getString(R.string.err_acct_holder_empty));
                    break;
                }

                if (initialBalanceStr.isEmpty()) {
                    depositAmount.setError(getActivity().getString(R.string.err_init_balance_empty));
                    break;
                }

                if (currentTransactionManager != null) {
//                    currentExpenseManager.addAccount(accountNumStr, bankNameStr, accountHolderStr,
//                            Double.parseDouble(initialBalanceStr));
                }
                cleanUp();
                break;
        }
    }

    private void cleanUp() {
        accountNumber.getText().clear();
        bankName.getText().clear();
        accountHolderName.getText().clear();
        depositAmount.getText().clear();
    }
}
