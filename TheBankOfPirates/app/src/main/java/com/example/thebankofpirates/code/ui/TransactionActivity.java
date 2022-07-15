
package com.example.thebankofpirates.code.ui;

import android.content.Context;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.fragment.app.Fragment;
import androidx.viewpager.widget.ViewPager;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentPagerAdapter;
import com.example.thebankofpirates.R;
import com.example.thebankofpirates.code.PersistentMemoryTransactionManager;
import com.example.thebankofpirates.code.TransactionManager;
import com.google.android.material.tabs.TabLayout;


public class TransactionActivity extends AppCompatActivity {
    Context context;
    private TransactionManager transactionManager;

    private SectionsPagerAdapter mSectionsPagerAdapter;

    private ViewPager mViewPager;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        context = this.getBaseContext();
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

        transactionManager = new PersistentMemoryTransactionManager(context);


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
                    return TransactionFragment.newInstance(transactionManager);
                case 1:
                    return DetailsFragment.newInstance(transactionManager);
                default:
                    return TransactionFragment.newInstance(transactionManager);
            }
        }

        @Override
        public int getCount() {
            // Show 2 total pages.
            return 2;
        }

        @Override
        public CharSequence getPageTitle(int position) {
            switch (position) {
                case 0:
                    return getString(R.string.label_transaction);
                case 1:
                    return getString(R.string.label_details);
                default:
                    return getString(R.string.label_transaction);
            }
        }
    }
}
