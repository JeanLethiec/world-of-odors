package com.jlethiec.matieres_premieres;

import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@Slf4j
public class HomeController {

    @GetMapping("/home")
    public void home(HttpServletRequest req, HttpServletResponse resp) {
        RequestDispatcher dispatcher = req.getSession().getServletContext().getRequestDispatcher("/world-of-odors-app/index.html");
        try {
            dispatcher.forward(req, resp);
        } catch (ServletException | IOException e) {
            log.error("An error occurred when redirecting the request: " + e.getMessage());
        }
    }
}