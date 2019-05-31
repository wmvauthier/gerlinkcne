/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets.Piece;

import Servlets.Employee.*;
import Servlets.Client.clientAlter;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author ALUNO
 */
@WebServlet(name = "employeeAlter", urlPatterns = {"/employeeAlter"})
public class pieceAlter extends HttpServlet {

protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, ClassNotFoundException, SQLException {
        response.setContentType("text/html;charset=UTF-8");

        String id = request.getParameter("id");
        String name = request.getParameter("name");
        String date = request.getParameter("date");
        String cpf = request.getParameter("cpf");
        String login = request.getParameter("login");
        String password = request.getParameter("password");
        String address = request.getParameter("address");
        String number = request.getParameter("number");
        String city = request.getParameter("city");
        String neigh = request.getParameter("neigh");
        String zip = request.getParameter("cep");
        String state = request.getParameter("state");
        String contact = request.getParameter("contact");
        String email = request.getParameter("email");

        try (PrintWriter out = response.getWriter()) {
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            Connection con = DriverManager.getConnection("jdbc:derby://localhost:1527/gerlinkcne;create=true", "root", "root");
            Statement stmt = null;
            String query = "UPDATE EMPLOYEE SET "
                    + "EMPLOYEE_CPF = '"+cpf+"', EMPLOYEE_LOGIN= '"+login+"',"
                    + "EMPLOYEE_PASSWORD = '"+password+"', EMPLOYEE_NAME= '"+name+"',"
                    + "EMPLOYEE_EMAIL = '"+email+"', EMPLOYEE_DATE= '"+date+"',\n"
                    + "EMPLOYEE_CONTACT = '"+contact+"', EMPLOYEE_LOG= '"+address+"',"
                    + "EMPLOYEE_NEIGH = '"+neigh+"', EMPLOYEE_NUMBER= '"+number+"',"
                    + "EMPLOYEE_ZIP = '"+zip+"', EMPLOYEE_CITY= '"+city+"',"
                    + "EMPLOYEE_STATE = '"+state+"' "
                    + "WHERE EMPLOYEE_ID = '"+id+"'";
            System.out.println(query);
            try {
                PreparedStatement ps = null;
                ps = con.prepareStatement(query);
                ps.executeUpdate();
            } catch (SQLException e) {
                System.out.println(e);
            } finally {
                if (stmt != null) {
                    stmt.close();
                }
            }
        }

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
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(clientAlter.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(clientAlter.class.getName()).log(Level.SEVERE, null, ex);
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
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(clientAlter.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(clientAlter.class.getName()).log(Level.SEVERE, null, ex);
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
