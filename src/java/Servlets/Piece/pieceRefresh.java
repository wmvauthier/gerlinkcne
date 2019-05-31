/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets.Piece;

import Servlets.Employee.*;
import Itens.Employee;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;

/**
 *
 * @author ALUNO
 */
@WebServlet(name = "employeeRefresh", urlPatterns = {"/employeeRefresh"})
public class pieceRefresh extends HttpServlet {

protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, SQLException, ClassNotFoundException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println("{\"employees\": " + refreshEmployees() + "}");
        }
    }
    
    private ArrayList<JSONObject> refreshEmployees() throws SQLException, ClassNotFoundException {

        Class.forName("org.apache.derby.jdbc.ClientDriver");
        Connection con = DriverManager.getConnection("jdbc:derby://localhost:1527/gerlinkcne;create=true", "root", "root");

        ArrayList<JSONObject> list = new ArrayList<JSONObject>();
        Statement stmt = null;
        String query = "SELECT * FROM employee ORDER BY EMPLOYEE_NAME ASC";

        try {
            stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
                String id = rs.getString("EMPLOYEE_ID");
                String cpf = rs.getString("EMPLOYEE_CPF");
                String login = rs.getString("EMPLOYEE_LOGIN");
                String password = rs.getString("EMPLOYEE_PASSWORD");
                String name = rs.getString("EMPLOYEE_NAME");
                String email = rs.getString("EMPLOYEE_EMAIL");
                String date = rs.getString("EMPLOYEE_DATE");
                String contact = rs.getString("EMPLOYEE_CONTACT");
                String address = rs.getString("EMPLOYEE_LOG");
                String neigh = rs.getString("EMPLOYEE_NEIGH");
                String number = rs.getString("EMPLOYEE_NUMBER");
                String zip = rs.getString("EMPLOYEE_ZIP");
                String city = rs.getString("EMPLOYEE_CITY");
                String state = rs.getString("EMPLOYEE_STATE");
                Employee employee = new Employee(id,cpf,login,password,name,email,date,contact,address,neigh,number,zip,city,state);
                JSONObject json = new JSONObject(employee);
                list.add(json);
            }
        } catch (SQLException e) {
            System.out.println(e);
        } finally {
            if (stmt != null) {
                stmt.close();
            }
        }

        return list;
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    try {
        processRequest(request, response);
    } catch (SQLException ex) {
        Logger.getLogger(pieceRefresh.class.getName()).log(Level.SEVERE, null, ex);
    } catch (ClassNotFoundException ex) {
        Logger.getLogger(pieceRefresh.class.getName()).log(Level.SEVERE, null, ex);
    }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    try {
        processRequest(request, response);
    } catch (SQLException ex) {
        Logger.getLogger(pieceRefresh.class.getName()).log(Level.SEVERE, null, ex);
    } catch (ClassNotFoundException ex) {
        Logger.getLogger(pieceRefresh.class.getName()).log(Level.SEVERE, null, ex);
    }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
