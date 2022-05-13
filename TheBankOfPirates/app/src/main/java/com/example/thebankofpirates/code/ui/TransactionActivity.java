
package com.example.thebankofpirates.code.ui;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.fragment.app.Fragment;
import androidx.viewpager.widget.ViewPager;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentPagerAdapter;
import com.example.thebankofpirates.R;
import com.example.thebankofpirates.code.TransactionManager;
import com.google.android.material.tabs.TabLayout;


public class TransactionActivity extends AppCompatActivity {

    private TransactionManager transactionManager;

    private SectionsPagerAdapter mSectionsPagerAdapter;

    private ViewPager mViewPager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_transaction);

        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        // Create the adapter that will return a fragment for each of the three
        // primary sections of the activity.
        mSectionsPagerAdapter = new SectionsPagerAdapter(getSupportFragmentManager());

        // Set up the ViewPager with the sections adapter.
        mViewPager = (ViewPager) findViewById(R.id.container);
        mViewPager.setAdapter(mSectionsPagerAdapter);

        TabLayout tabLayout = (TabLayout) findViewById(R.id.tabs);
        tabLayout.setupWithViewPager(mViewPager);

//        db.addAccount(new Account("12345S","BANK02","AKL",325.89));
        /***  Begin generating dummy data for In-Memory implementation  ***/
//        expenseManager = new PersistentMemoryExpenseManager();
        /*** END ***/
    }

    /**
     * A {@link FragmentPagerAdapter} that returns a fragment corresponding to
     * one of the sections/tabs/pages.
     */
    public class SectionsPagerAdapter extends FragmentPagerAdapter {

        public SectionsPagerAdapter(FragmentManager fm) {
            super(fm);
        }

        @Override
        public Fragment getItem(int position) {
            // getItem is called to instantiate the fragment for the given page.
            // Return the respective fragment.
            switch (position) {
                case 0:
                    return WithdrawalFragment.newInstance(transactionManager);
                case 1:
                    return DepositFragment.newInstance(transactionManager);
                case 2:
                    return DetailsFragment.newInstance(transactionManager);
                default:
                    return WithdrawalFragment.newInstance(transactionManager);
            }
        }

        @Override
        public int getCount() {
            // Show 3 total pages.
            return 3;
        }

        @Override
        public CharSequence getPageTitle(int position) {
            switch (position) {
                case 0:
                    return getString(R.string.label_withdrawal);
                case 1:
                    return getString(R.string.label_deposit);
                case 2:
                    return getString(R.string.label_details);
                default:
                    return getString(R.string.label_withdrawal);
            }
        }
    }
}
