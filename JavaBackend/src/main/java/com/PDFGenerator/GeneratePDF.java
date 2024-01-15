package com.PDFGenerator;
import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.Backend.pdfattachment.PDFDetails;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.font.Standard14Fonts;

public class GeneratePDF {

    public void createPDF(PDFDetails customerinfo) throws IOException {

        //Loading an existing document
        PDDocument document = new PDDocument();
        PDPage blankPage = new PDPage();
        document.addPage( blankPage );

        //Retrieving the pages of the document
        PDPage page = document.getPage(0);
        PDPageContentStream contentStream = new PDPageContentStream(document, page);
        //Begin the Content stream
        contentStream.beginText();

        //Setting the font to the Content stream
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.TIMES_ROMAN), 20);

        //Setting the position for the line
        contentStream.newLineAtOffset(420, 750);

        String text = "Auftragsbestätigung";
        //Adding text in the form of string
        contentStream.showText(text);
        CompanyInfo info = new CompanyInfo();
        info.setCompanyname("company");
        info.setCity("city");
        info.setNumber(2);
        info.setAdress("adress");
        info.setZip("12345");
        info.setPhone("0151291205");
        info.setFax("012312515");
        info.setEmail("email@gmail.de");
        contentStream = setCompanyHeader(info,contentStream);
        setOrderInfo(customerinfo,contentStream);
        setCustomerInfo(customerinfo,contentStream);
        //Ending the content stream
        contentStream.endText();

        System.out.println("Content added");

        //Closing the content stream
        contentStream.close();

        //Saving the document
        document.save(new File("C:/Users/stefa/OneDrive/Dokumente/PDFExample/new.pdf"));

        //Closing the document
        document.close();
    }

    public PDPageContentStream setCompanyHeader(CompanyInfo info,PDPageContentStream contentStream) throws IOException {

        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.TIMES_ROMAN), 14);
        contentStream.newLineAtOffset(-380, -36);
        contentStream.showText(info.getCompanyname());
        contentStream.newLineAtOffset(0, -18);
        contentStream.showText(info.getAdress() + " " + info.getNumber());
        contentStream.newLineAtOffset(0, -18);
        contentStream.showText(info.getZip() + " " + info.getCity());
        contentStream.newLineAtOffset(0, -18);
        contentStream.showText(info.getPhone());
        contentStream.newLineAtOffset(0, -18);
        contentStream.showText(info.getFax());
        contentStream.newLineAtOffset(0, -18);
        contentStream.showText(info.getEmail());
        return contentStream;
    }

    public PDPageContentStream setOrderInfo(PDFDetails info, PDPageContentStream contentStream) throws IOException {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        contentStream.newLineAtOffset(0, -36);
        contentStream.showText("Bestelldatum: " + dtf.format(now));
        contentStream.newLineAtOffset(0, -18);
        contentStream.showText("Auslieferungsdatum: " + dtf.format(now));
        return contentStream;
    }

    public PDPageContentStream setCustomerInfo(PDFDetails info, PDPageContentStream contentStream) throws IOException {
        contentStream.newLineAtOffset(380, 18);
        contentStream.showText(info.getFirstname());
        contentStream.newLineAtOffset(0, -18);
        contentStream.showText(info.getLastname());
        contentStream.newLineAtOffset(0, -18);
        contentStream.showText(info.getStreet() + " " + info.getNumber());
        contentStream.newLineAtOffset(0, -18);
        contentStream.showText(info.getZip() + " " + info.getCity());
        return contentStream;
    }
}
