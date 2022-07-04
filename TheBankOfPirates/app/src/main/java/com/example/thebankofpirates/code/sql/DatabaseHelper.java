package com.example.thebankofpirates.code.sql;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import java.util.Map;

public class DatabaseHelper extends SQLiteOpenHelper {
    private final Context context;

    private final static String DATABASE_NAME = "190028C.db";

    private final static  String LOCAL_ACCOUNT = "local_account";

    private final static  String CUSTOMER_ID = "Customer_ID";
    private final static  String CUSTOMER_NAME = "Customer_Name";
    private final static  String ACCOUNT_NO = "Account_No";
    private final static  String ACCOUNT_TYPE = "Account_Type";
    private final static  String PASSWORD = "Password";
    private final static  String BALANCE = "Balance";

    private final static  String LAST_UPDATE_TIME = "Last_Update_Time";

    private final static  String TRANSACTION_ID = "Transaction_ID";
    private final static  String LOCAL_LOGS = "Transaction_Logs";
    private final static  String TRANSACTION_TYPE = "Transaction_Type"; // Deposit or Withdrawal
    private final static  String DATE_TIME = "DateAndTime";
    private final static  String TRANSACTION_AMOUNT = "Amount";
    private final static  String TRANSACTION_CHARGE = "Charges";







    private static SQLiteDatabase db;
    public DatabaseHelper(Context context) {
        //creates a database with version 1
        super(context,DATABASE_NAME, null,1);
        this.context = context;
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        String createSqliteQuery = "CREATE TABLE "+LOCAL_ACCOUNT+" ("+
                ACCOUNT_NO+ " char(10) NOT NULL," +
                CUSTOMER_ID +" varchar(10) NOT NULL,"+
                CUSTOMER_NAME +" varchar(10) NOT NULL,"+
                ACCOUNT_TYPE +" varchar(10) NOT NULL,"+
                BALANCE +" decimal(8,2) DEFAULT NULL,"+
                PASSWORD +" varchar(10) NOT NULL,"+
                "PRIMARY KEY ("+ACCOUNT_NO+"));";

        String insertAccountDummyData = "INSERT INTO "+LOCAL_ACCOUNT+
                " VALUES (0000000001,190028,"+"Adult"+",450000.65,190028,"+"2022-09-02"+"),"+
                "(0000000001,190023,"+"Shanaaz,"+"Adult"+",150000.65,190023,"+"2022-09-03"+"),"+
                "(0000000002,190028,"+"Akeel,"+"Adult"+",250000.65,190028,"+"2022-09-08"+"),"+
                "(0000000003,190211,"+"Hafeel,"+"Adult"+",350000.65,190211,"+"2022-02-11"+"),"+
                "(0000000004,190569,"+"Sarraj,"+"Adult"+",450000.65,190569,"+"2022-06-09"+")"+";";


        String createSqliteQuery2 = "CREATE TABLE "+ LOCAL_LOGS +" ("+
                TRANSACTION_ID +" INTEGER AUTOINCREMENT,"+
                ACCOUNT_NO+ " char(10) NOT NULL," +
                TRANSACTION_TYPE +" varchar(10) NOT NULL,"+
                TRANSACTION_AMOUNT +" decimal(8,2) DEFAULT NULL,"+
                TRANSACTION_CHARGE +" decimal(8,2) DEFAULT NULL,"+
                DATE_TIME+ " varchar(10) DEFAULT NULL,"+
                "PRIMARY KEY ("+TRANSACTION_ID+")"+
                ACCOUNT_NO+" int FOREIGN KEY REFERENCES "+LOCAL_ACCOUNT+"("+ACCOUNT_NO+"));";

        String insertLogDummyData = "INSERT INTO "+LOCAL_ACCOUNT+
                " VALUES (1,190028,"+"Deposit"+","+"5000.00"+","+"30.00"+","+"2022-09-02"+");";


        db.execSQL(createSqliteQuery);
        db.execSQL(insertAccountDummyData);
        db.execSQL(insertLogDummyData);



    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int i, int i1) {
        db.execSQL("DROP TABLE IF EXISTS " +LOCAL_ACCOUNT +";");
        onCreate(db);
    }

}
