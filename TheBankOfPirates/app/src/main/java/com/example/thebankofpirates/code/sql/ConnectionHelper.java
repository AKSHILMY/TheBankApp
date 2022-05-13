package com.example.thebankofpirates.code.sql;

import android.os.StrictMode;
import android.util.Log;
import android.widget.Toast;

import com.example.thebankofpirates.code.LoginActivity;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionHelper {
    private Connection conn;
    private final String username ="sqluser";
    private final String password ="password";
    private final String port = "3306";
    private final String database = "bank_of_pirates";
    private final String ip = "127.0.0.1";


    public Connection getConnection() {
//        Thread policy creation and setting
//        StrictMode is a developer tool which detects things you might be doing by accident and brings them to your attention so you can fix them.
//        StrictMode is most commonly used to catch accidental disk or network access on the application's main thread, where UI operations are received and animations take place. Keeping disk and network operations off the main thread makes for much smoother, more responsive applications.
        StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
        StrictMode.setThreadPolicy(policy);
        Connection connection = null;
        String connectionURL = null;
        try{
            String DRIVER = "com.mysql.jdbc.Driver";
            String jdbcUrl = "jdbc:mysql://192.168.43.17/bank_of_pirates";
            Class.forName(DRIVER);
            connection = DriverManager.getConnection(jdbcUrl,username,password);
        }catch(Exception ex){
            Log.e("Error",ex.getMessage());
        }
        return connection;
    }

}
