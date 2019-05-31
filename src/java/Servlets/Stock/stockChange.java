///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//package Servlets.Stock;
//
//import Servlets.Client.clientAlter;
//import java.io.IOException;
//import java.io.PrintWriter;
//import java.sql.Connection;
//import java.sql.Date;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.sql.Statement;
//import java.text.DateFormat;
//import java.text.SimpleDateFormat;
//import java.util.logging.Level;
//import java.util.logging.Logger;
//import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
///**
// *
// * @author ALUNO
// */
//@WebServlet(name = "stockChange", urlPatterns = {"/stockChange"})
//public class stockChange extends HttpServlet {
//
//    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException, ClassNotFoundException, SQLException {
//        response.setContentType("text/html;charset=UTF-8");
//
//        String id = request.getParameter("id");
//        String quantity = request.getParameter("quantity");
//        String description = request.getParameter("description");
//        String client = request.getParameter("client");
//        String action = request.getParameter("action");
//	DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
//D	ate date = new Date();
//	System.out.println(dateFormat.format(date)); //2016/11/16 12:08:43
//        String datex = date.toString();
//        int quantityInt = Integer.parseInt(quantity);
//
//        try (PrintWriter out = response.getWriter()) {
//            Class.forName("org.apache.derby.jdbc.ClientDriver");
//            Connection con = DriverManager.getConnection("jdbc:derby://localhost:1527/gerlinkcne;create=true", "root", "root");
//            Statement stmt = null;
//            String query = "";
//            if ("plus".equals(action)) {
//                query = "INSERT INTO STOCKLOG values ('" + id + "','" + description + "','" + quantity + "','" + date + "','" + client + "')";
//
//            } else if ("minus".equals(action)) {
//                query = "DELETE FROM STOCKLOG WHERE STOCK_ID='" + id + "'";
//
//            }
//            System.out.println(query);
//            try {
//                for (int i = 0; i <= quantityInt; i++) {
//                    PreparedStatement ps = null;
//                    ps = con.prepareStatement(query);
//                    ps.executeUpdate();
//                }
//            } catch (SQLException e) {
//                System.out.println(e);
//            } finally {
//                if (stmt != null) {
//                    stmt.close();
//                }
//            }
//        }
//
//    }
//
//    protected int getActualQuantity(HttpServletRequest request, HttpServletResponse response, String id)
//            throws ServletException, IOException, ClassNotFoundException, SQLException {
//
//        try (PrintWriter out = response.getWriter()) {
//            Class.forName("org.apache.derby.jdbc.ClientDriver");
//            Connection con = DriverManager.getConnection("jdbc:derby://localhost:1527/gerlinkcne;create=true", "root", "root");
//            Statement stmt = null;
//            String query = "SELECT STOCK_QUANTITY FROM STOCK WHERE STOCK_ID = '" + id + "'";
//            System.out.println(query);
//            try {
//                stmt = con.createStatement();
//                ResultSet rs = stmt.executeQuery(query);
//                while (rs.next()) {
//                    String quantity = rs.getString("STOCK_QUANTITY");
//                    return Integer.parseInt(quantity);
//                }
//            } catch (SQLException e) {
//                System.out.println(e);
//            } finally {
//                if (stmt != null) {
//                    stmt.close();
//                }
//            }
//
//            return 0;
//
//        }
//    }
//
//    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
//    /**
//     * Handles the HTTP <code>GET</code> method.
//     *
//     * @param request servlet request
//     * @param response servlet response
//     * @throws ServletException if a servlet-specific error occurs
//     * @throws IOException if an I/O error occurs
//     */
//    @Override
//    protected void doGet(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException {
//        try {
//            processRequest(request, response);
//        } catch (ClassNotFoundException ex) {
//            Logger.getLogger(clientAlter.class.getName()).log(Level.SEVERE, null, ex);
//        } catch (SQLException ex) {
//            Logger.getLogger(clientAlter.class.getName()).log(Level.SEVERE, null, ex);
//        }
//    }
//
//    /**
//     * Handles the HTTP <code>POST</code> method.
//     *
//     * @param request servlet request
//     * @param response servlet response
//     * @throws ServletException if a servlet-specific error occurs
//     * @throws IOException if an I/O error occurs
//     */
//    @Override
//    protected void doPost(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException {
//        try {
//            processRequest(request, response);
//        } catch (ClassNotFoundException ex) {
//            Logger.getLogger(clientAlter.class.getName()).log(Level.SEVERE, null, ex);
//        } catch (SQLException ex) {
//            Logger.getLogger(clientAlter.class.getName()).log(Level.SEVERE, null, ex);
//        }
//    }
//
//    /**
//     * Returns a short description of the servlet.
//     *
//     * @return a String containing servlet description
//     */
//    @Override
//    public String getServletInfo() {
//        return "Short description";
//    }// </editor-fold>
//
//}
