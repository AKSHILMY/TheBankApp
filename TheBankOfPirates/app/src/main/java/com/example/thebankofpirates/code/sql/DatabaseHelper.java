package com.example.thebankofpirates.code.sql;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.Nullable;

import com.example.thebankofpirates.code.data.model.Account;
import com.example.thebankofpirates.code.data.model.Transaction;
import com.example.thebankofpirates.code.data.model.TransactionType;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DatabaseHelper extends SQLiteOpenHelper {
    private final Context context;
    private final static String DATABASE_NAME = "190028C.db";
    private final static  String LOCAL_ACCOUNT = "local_account";

    private final static  String ACCOUNT_NO = "Account_No";
    private final static  String ACCOUNT_TYPE = "Account_Type";
    private final static  String BALANCE = "Balance";
    private final static  String SPECIAL_REQUEST_PERMISSION = "Special_Request_Permission";
    private final static  String SPECIAL_REQUEST_STATUS = "Special_Request_Status";

    private final static  String TRANSACTION_ID = "Transaction_ID";
    private final static  String AGENT_ID = "Agent_ID";
    private final static  String LOCAL_TRANSACTION_RECORDS = "Local_Transaction_Records";
    private final static  String TRANSACTION_TYPE = "Transaction_Type"; // Deposit or Withdrawal
    private final static  String TRANSACTION_AMOUNT = "Amount";

    private static SQLiteDatabase db;
    public DatabaseHelper(@Nullable Context context) {
        //creates a database with version 1
        super(context,DATABASE_NAME, null,1);
        this.context = context;
        db = getWritableDatabase();
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        Toast.makeText(context, "DB CREATing", Toast.LENGTH_LONG).show();
        String createSqliteQuery1 = "CREATE TABLE IF NOT EXISTS "+LOCAL_ACCOUNT+" ("+
                ACCOUNT_NO+ " TEXT NOT NULL UNIQUE," +
                ACCOUNT_TYPE +" TEXT NOT NULL,"+
                BALANCE +" NUMERIC DEFAULT NULL,"+
                SPECIAL_REQUEST_PERMISSION +" TEXT NOT NULL,"+
                "PRIMARY KEY ("+ACCOUNT_NO+"));";

        String insertAccountDummyData = "INSERT INTO "+LOCAL_ACCOUNT+
                " VALUES ("+"0000000001"+","+"Adult"+",450001.65,0"+"),"+
                "("+"0000000002"+","+"Adult"+",450002.65,0"+"),"+
                "("+"0000000003"+","+"Adult"+",450003.65,0"+")"+";";


        String createSqliteQuery2 = "CREATE TABLE IF NOT EXISTS "+ LOCAL_TRANSACTION_RECORDS +" ("+
                TRANSACTION_ID +" INTEGER PRIMARY KEY AUTOINCREMENT,"+
                AGENT_ID +" TEXT NOT NULL,"+
                ACCOUNT_NO+ " TEXT NOT NULL," +
                TRANSACTION_TYPE +" TEXT NOT NULL,"+
                TRANSACTION_AMOUNT +" NUMERIC DEFAULT NULL,"+
//                TRANSACTION_CHARGE +" decimal(8,2) DEFAULT NULL,"+
                SPECIAL_REQUEST_STATUS +" TEXT NOT NULL,"+
                "FOREIGN KEY(" +ACCOUNT_NO +") REFERENCES " +LOCAL_ACCOUNT+"("+ACCOUNT_NO+"));";

        String insertLogDummyData2 = "INSERT INTO "+LOCAL_TRANSACTION_RECORDS+
                " VALUES ("+1+","+"190028"+","+"0000000001"+","+"Deposit"+","+"5000.00"+","+"YES"+");";
        String newQuery = "INSERT INTO local_account VALUES ('0000000001','Adult',450001.65,'YES'),('0000000002','Adult',450002.65,'NO'),('0000000003','Adult',450003.65,'YES')";
        String newQuery2 = "INSERT INTO Local_Transaction_Records VALUES (1,'190028','0000000001','Deposit',5000.90,'YES'),(2,'190029','0000000002','Deposit',5010.90,'NO'),(3,'190038','0000000004','Deposit',50450.90,'YES')";

        db.execSQL(createSqliteQuery1);
        db.execSQL(createSqliteQuery2);
        db.execSQL(newQuery);
        db.execSQL(newQuery2);
        Log.d("InsertACCTag",insertLogDummyData2);

//        db.execSQL(insertAccountDummyData);
//        db.execSQL(insertLogDummyData);
        Toast.makeText(context, "DB CREATED", Toast.LENGTH_SHORT).show();



    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int i, int i1) {
        db.execSQL("DROP TABLE IF EXISTS " +LOCAL_ACCOUNT +";");
        db.execSQL("DROP TABLE IF EXISTS " +LOCAL_TRANSACTION_RECORDS +";");
        onCreate(db);
    }

    public Map<String,Account> getAccounts() {
         Log.d("getAcc","WORKS");
        String selectQuery = "SELECT  * FROM " + LOCAL_ACCOUNT;
        db = this.getReadableDatabase();
        Cursor cursor = db.rawQuery(selectQuery, null);
        Map<String,Account> accounts= new HashMap<>();

        cursor.moveToFirst();
        while (!cursor.isAfterLast()) {
            Account account = new Account(cursor.getString(0),cursor.getDouble(2),cursor.getString(1),cursor.getString(3));
            accounts.put(cursor.getString(0),account);
            cursor.moveToNext();
        }
        if (!cursor.isClosed()) {
            cursor.close();
        }
        db.close();
//        Account account1 = new Account("1234567890",23.34,"Adult","YES");
//        accounts.put(account1.getAccountNo(),account1);
        return accounts;

    }
    public void updateAccount(Account account) {
        db = this.getWritableDatabase();
        ContentValues cv = new ContentValues();
        cv.put(ACCOUNT_NO,account.getAccountNo());
        cv.put(BALANCE,account.getBalance());
        cv.put(ACCOUNT_TYPE,account.getAccountType());
        cv.put(SPECIAL_REQUEST_PERMISSION,account.getSpecialRequestPermission());

        long success = db.update(LOCAL_ACCOUNT,cv, ACCOUNT_NO+"=?", new String[]{account.getAccountNo()});
        if (success==-1){
            Toast.makeText(context, "DB UPDATE FAILED", Toast.LENGTH_SHORT).show();
        }else{
            Toast.makeText(context, "DB UPDATE SUCCEEDED", Toast.LENGTH_SHORT).show();
        }

    }

    //Transactions
    public List<Transaction> getTransactions() {
        String selectQuery = "SELECT  * FROM " + LOCAL_TRANSACTION_RECORDS;
        db = this.getReadableDatabase();
        Cursor cursor = db.rawQuery(selectQuery, null);
        List<Transaction> transactions= new ArrayList<>();
        cursor.moveToFirst();
        while (!cursor.isAfterLast()) {
            TransactionType type = null;
            if (cursor.getString(3).equals("WITHDRAW")){
                type = TransactionType.WITHDRAW;
            }else if (cursor.getString(3).equals("DEPOSIT")){
                type = TransactionType.DEPOSIT;
            }else{
                Toast.makeText(context, "TRANSACTION TYPE UNRECOGNIZED", Toast.LENGTH_SHORT).show();
            }

            Transaction transaction = new Transaction(cursor.getString(2),type,cursor.getDouble(4));
            transactions.add(transaction);//using accountNo
            cursor.moveToNext();
        }
        if (!cursor.isClosed()) {
            cursor.close();
        }
        db.close();
        return transactions;

    }

    public void addTransactionLog(Transaction transaction) {
        db = this.getWritableDatabase();
        ContentValues cv = new ContentValues();
        cv.put(ACCOUNT_NO,transaction.getAccountNo());

        String type = "UNKNOWN";
        if (transaction.getTransactionType()==TransactionType.WITHDRAW){
            type = "EXPENSE";
        }else if (transaction.getTransactionType()==TransactionType.DEPOSIT){
            type = "INCOME";
        }
        cv.put(TRANSACTION_TYPE,type);

        cv.put(TRANSACTION_AMOUNT,transaction.getAmount());

        long success = db.insert(LOCAL_TRANSACTION_RECORDS,null,cv);
        if (success==-1){
            Toast.makeText(context, "TRANSACTION UPDATE FAILED", Toast.LENGTH_SHORT).show();
        }else{
            Toast.makeText(context, "TRANSACTION UPDATE SUCCEEDED", Toast.LENGTH_SHORT).show();
        }

    }

}
