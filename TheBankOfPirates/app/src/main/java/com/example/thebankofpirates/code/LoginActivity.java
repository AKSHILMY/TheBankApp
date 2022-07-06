package com.example.thebankofpirates.code;



import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;

import android.widget.Toast;
;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import com.example.thebankofpirates.R;
import com.example.thebankofpirates.code.sql.ConnectionHelper;
import com.example.thebankofpirates.code.sql.DatabaseHelper;
import com.example.thebankofpirates.code.ui.TransactionActivity;
import com.google.android.material.textfield.TextInputLayout;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;


public class LoginActivity extends AppCompatActivity {
    private Connection connection;
    ProgressDialog progressDialog;
    TextInputLayout emailTextInputLayout,passTextInputLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        System.out.println("HELLO WORLD");
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        emailTextInputLayout=(TextInputLayout)findViewById(R.id.editText1);
        passTextInputLayout=(TextInputLayout)findViewById(R.id.editText2);
        DatabaseHelper db = new DatabaseHelper(getApplicationContext());
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);


    }


    @Override
    public void onBackPressed() {
        AlertDialog.Builder builder=new AlertDialog.Builder(LoginActivity.this);
        builder.setMessage("Really Exit ??");
        builder.setTitle("Exit");
        builder.setCancelable(false);
        builder.setPositiveButton("Ok",new MyListener());
        builder.setNegativeButton("Cancel",null);
        builder.show();

    }
    public class MyListener implements DialogInterface.OnClickListener{

        @Override
        public void onClick(DialogInterface dialog, int which) {
            finish();
        }
    }

    public void buttonIsClicked(View view){

        switch(view.getId()){

            case R.id.buttonSign:

                String email=emailTextInputLayout.getEditText().getText().toString().trim();
                String password=passTextInputLayout.getEditText().getText().toString().trim();

                //---CHECKING IF EMAIL AND PASSWORD IS NOT EMPTY----
                if(TextUtils.isEmpty(email)||TextUtils.isEmpty(password)){
                    Toast.makeText(LoginActivity.this, "Please Fill all blocks", Toast.LENGTH_SHORT).show();
                    return ;
                }
//                progressDialog.setTitle("Logging in");
//                progressDialog.setMessage("Please wait while we are checking the credentials..");
//                progressDialog.setCancelable(false);
//                progressDialog.setProgress(ProgressDialog.STYLE_SPINNER);
//                progressDialog.show();
//                Toast.makeText(LoginActivity.this, "Login and Home Needs to be Done!", Toast.LENGTH_LONG).show();
                login_user(email,password);
                break;

            case R.id.buttonRegister:

//                Intent intent=new Intent(LoginActivity.this,RegisterActivity.class);
//                startActivity(intent);
                Toast.makeText(LoginActivity.this, "Register activity needs to be done!", Toast.LENGTH_SHORT).show();
                break;

            default:
                break;
        }
    }

    private void login_user(String email, String password){

//        try{
//            ConnectionHelper connectionHelper = new ConnectionHelper();
//            connection = connectionHelper.getConnection();
//            Toast.makeText(LoginActivity.this, "Login user method called : "+connection, Toast.LENGTH_LONG).show();
//
//            if (connection!=null){
//                String query = "SELECT * FROM agent WHERE Agent_ID=00001 AND Name=S.Raman;";
//                Statement statement = connection.createStatement();
//                ResultSet resultSet = statement.executeQuery(query);
//                if (resultSet!=null){
//                    Toast.makeText(LoginActivity.this, "Logged successfully with : "+email, Toast.LENGTH_LONG).show();
//                }else{
//                    Toast.makeText(LoginActivity.this, "Wrong Credentials!", Toast.LENGTH_SHORT).show();
//                }
//
//            }
//        }catch(Exception ex){
//            Log.e("Invalid Authentication!",ex.getMessage());
//        }

        if (email.equals("admin") && password.equals("123")) {
            Intent intent = new Intent(LoginActivity.this, TransactionActivity.class);
            startActivity(intent);
            finish();
        }else{
            Toast.makeText(LoginActivity.this, "Wrong Credentials!", Toast.LENGTH_SHORT).show();
        }


    }



}

